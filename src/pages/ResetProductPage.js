import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { StripeProvider, Elements } from 'react-stripe-elements'
import { useParams } from 'react-router-dom'

import SalesVideoSection from '../components/SalesPage/SalesVideoSection'
import WhatYouGetSection from '../components/SalesPage/WhatYouGetSection'
import PricingCard from '../components/SalesPage/PricingCard'
import ScrollToTop from '../components/Shared/ScrollToTop'
import BaseButton from '../components/Buttons/BaseButton'
import FWWLogo from '../svgs/FWWLogo'
import MessageDialog from '../components/Dialogs/MessageDialog'
import Portal from '../components/Shared/Portal'
import CheckoutForm from '../components/SalesPage/CheckoutForm'
import { useProgramsContext } from '../context/ProgramsContext'
import { above } from '../styles/Theme'

const ResetProductPage = () => {
  // eslint-disable-next-line
  const [programsState, dispatchProgramsAction] = useProgramsContext()
  const [ipadProOrAbove, setIpadProOrAbove] = useState(false)
  const [stripe, setStripe] = useState(null)
  const mediaQueryRef = useRef(null)

  const params = useParams()

  const program = programsState.notPurchasedPrograms.find(
    program => program.programId === params.programId
  )

  const programId = program.programId
  const tinyCoverImage = program.tinyCoverImage
  const coverImage = program.coverImage
  const fitnessLevel = program.fitnessLevel
  const numbreOfWorkouts = program.totalWorkouts
  const duration = program.duration
  const salesVideo = program.salesVideo
  const price = program.price
  const benefits = program.benefits

  useEffect(() => {
    mediaQueryRef.current = window.matchMedia(`(min-width: 960px)`)

    if (mediaQueryRef.current.matches) {
      setIpadProOrAbove(true)
    } else {
      setIpadProOrAbove(false)
    }

    const queryTest = event => {
      if (event.matches) {
        setIpadProOrAbove(true)
      } else {
        setIpadProOrAbove(false)
      }
    }

    mediaQueryRef.current.addListener(queryTest)

    return () => {
      mediaQueryRef.current.removeListener(queryTest)
    }
  }, [])

  useEffect(() => {
    if (typeof window.Stripe !== undefined) {
      setStripe(window.Stripe(process.env.REACT_APP_STRIPE_TEST_KEY))
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        setStripe(window.Stripe(process.env.REACT_APP_STRIPE_TEST_KEY))
      })
    }
  }, [])

  const handlePurchaseClick = () => {
    console.log('Hit API and create the charge!')
  }

  return (
    <StripeProvider stripe={stripe}>
      <>
        <ScrollToTop />
        <SalesPageContainer>
          <SalesVideoSection
            programId={programId}
            tinyCoverImage={tinyCoverImage}
            coverImage={coverImage}
            fitnessLevel={fitnessLevel}
            numberOfWorkouts={numbreOfWorkouts}
            duration={duration}
            salesVideo={salesVideo}
          />
          <BenefitWrapper>
            <WhatYouGetSection benefits={benefits} price={price} />
            <PricingCard price={price} />
            {!ipadProOrAbove ? (
              <Logo />
            ) : (
              <Elements>
                <CheckoutForm price={price} />
              </Elements>
            )}
          </BenefitWrapper>
        </SalesPageContainer>
        {!ipadProOrAbove ? (
          <MobileButtonWrapper>
            <BaseButton handleClick={handlePurchaseClick}>
              Purchase for ${price}
            </BaseButton>
          </MobileButtonWrapper>
        ) : (
          <Logo />
        )}
        <Portal>
          <MessageDialog />
        </Portal>
      </>
    </StripeProvider>
  )
}

export default ResetProductPage

const SalesPageContainer = styled.div`
  margin: 80px 0 80px 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 40px;
  justify-items: center;
  ${above.mobile`
    width: 90%;
  `}
  ${above.tablet`
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 100%;
  `}
  ${above.ipadPro`
    width: 90%;
  `}
`

const BenefitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${above.tablet`
    margin: 40px 0 0 0;
  `}
`

const MobileButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 70%;
  transform: translate(-10px, -20px);
`

const Logo = styled(FWWLogo)`
  margin: 40px 0 0 0;
  width: 140px;
  ${above.mobile`
    margin: 80px 0 0 0;
  `}
  ${above.ipadPro`
    margin: 80px 0 80px 0;
  `}
`
