import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { CardElement, injectStripe } from 'react-stripe-elements'

import PoweredByStripe from '../../svgs/PoweredByStripe'
import BaseButton from '../Buttons/BaseButton'
import { useUserContext } from '../../context/UserContext'
import { useProgramsContext } from '../../context/ProgramsContext'
import { useFireBase } from '../Firebase/FirebaseContext'
import siteConfig from '../../utils/siteConfig'
import './stripe-styles.css'

const CheckoutForm = ({
  price,
  setIsCreatingCharge,
  setToThankYouPage,
  stripe
}) => {
  const auth = useFireBase()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  // eslint-disable-next-line
  const [programsState, dispatchProgramsAction] = useProgramsContext()
  const urlParams = useParams()

  const stripeStyle = {
    base: {
      color: '#aff8ff',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '18px',
      fontWeight: 600,
      fontSmoothing: 'antialiased',
      backgroundColor: '#282830',
      ':-webkit-autofill': {
        fontSize: '18px',
        fontWeight: 600,
        color: '#B3B6E1',
        backgroundColor: '#282830'
      },
      '::placeholder': {
        color: '#B44CFF'
      }
    },
    complete: {
      backgroundColor: '#282830'
    },
    invalid: {
      iconColor: '#E14075',
      color: '#E14075'
    }
  }

  const handleCompleteCheckout = () => {
    setIsCreatingCharge(true)

    const chargeUrl = `${siteConfig.api.baseUrl}/charge`
    const addProgramUrl = `${siteConfig.api.baseUrl}/add-program`
    const firstName = userState.firstName
    const programId = urlParams.programId
    const amount = price

    auth.getCurrentUser().then(user => {
      user
        .getIdToken(true)
        .then(token => {
          stripe
            .createToken({ name: firstName })
            .then(stripeToken => {
              const stripeTokenId = stripeToken.token.id

              const chargeData = {
                firstName: firstName,
                programId: programId,
                amount: amount,
                token: stripeTokenId
              }

              const addProgramData = {
                programId: programId
              }

              const chargePromise = fetch(chargeUrl, {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(chargeData)
              })

              const addProgramPromise = fetch(addProgramUrl, {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(addProgramData)
              })

              Promise.all([chargePromise, addProgramPromise])
                .then(dataPromises => {
                  const responsePromises = dataPromises.map(promise =>
                    promise.json()
                  )
                  return Promise.all(responsePromises)
                })
                .then(dataArray => {
                  const chargeData = dataArray[0]
                  const addProgramData = dataArray[1]

                  console.log(chargeData)
                  console.log(addProgramData)

                  dispatchProgramsAction({
                    type: 'setProgramsState',
                    value: {
                      purchasedPrograms: addProgramData.purchasedPrograms,
                      notPurchasedPrograms: addProgramData.notPurchasedPrograms
                    }
                  })

                  dispatchProgramsAction({
                    type: 'updatePercentComplete',
                    value: addProgramData.addToPercentComplete
                  })

                  const fwwPrograms = {
                    purchasedPrograms: addProgramData.purchasedPrograms,
                    notPurchasedPrograms: addProgramData.notPurchasedPrograms,
                    percentComplete: addProgramData.addToPercentComplete
                  }

                  localStorage.setItem(
                    'fwwPrograms',
                    JSON.stringify(fwwPrograms)
                  )

                  setIsCreatingCharge(false)
                  setToThankYouPage(true)
                })
                .catch(error => {
                  console.log({
                    message:
                      'Promise.all failed or one of the endpoints failed.',
                    error: error
                  })
                })
            })
            .catch(() => {
              console.log('Could not generate Stripe token.')
            })
        })
        .catch(() => {
          console.log('Could not get signed in user')
        })
    })
  }

  return (
    <CheckoutContainer>
      <StyledCardElement style={stripeStyle} />
      <BaseButton handleClick={handleCompleteCheckout}>
        Purchase for ${price}
      </BaseButton>
      <StripeLink
        href="https://stripe.com"
        rel="noreferrer noopener"
        target="_blank"
      >
        <StripeLogo />
      </StripeLink>
    </CheckoutContainer>
  )
}

export default injectStripe(CheckoutForm)

const CheckoutContainer = styled.div`
  margin: 20px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 12px;
  width: 100%;
`

const StyledCardElement = styled(CardElement)`
  margin: 0 0 12px 0;
  padding: 12px 18px;
  background-color: #282830;
  border: 1px solid ${props => props.theme.headlinePrimary};
  border-radius: 10px;
`

const StripeLogo = styled(PoweredByStripe)`
  width: 120px;
`

const StripeLink = styled.a`
  margin: 8px 0 0 0;
  padding: 0;
  justify-self: center;
  text-decoration: none;
`
