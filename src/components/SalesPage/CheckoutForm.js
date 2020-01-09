import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { CardElement, injectStripe } from 'react-stripe-elements'

import PoweredByStripe from '../../svgs/PoweredByStripe'
import BaseButton from '../Buttons/BaseButton'
import { useUserContext } from '../../context/UserContext'
import { useFireBase } from '../Firebase/FirebaseContext'
import siteConfig from '../../utils/siteConfig'
import './stripe-styles.css'

const CheckoutForm = ({ price, stripe }) => {
  const auth = useFireBase()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
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
    empty: {
      padding: '14px'
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
    const url = `${siteConfig.api.baseUrl}/charge`
    const firstName = userState.firstName
    const programId = urlParams.programId
    const amount = price

    auth
      .getCurrentUser()
      .then(user => {
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

                fetch(url, {
                  method: 'POST',
                  body: JSON.stringify(chargeData)
                })
                  .then(response => response.json())
                  .then(chargeData => {
                    console.log(chargeData)
                  })
                  .catch(error => {
                    console.log(error)
                  })
              })
              .catch(error => {
                console.log(error)
              })
          })
          .catch(() => {
            console.log('Could not generate token.')
          })
      })
      .catch(() => {
        console.log('Could not get signed in user')
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
