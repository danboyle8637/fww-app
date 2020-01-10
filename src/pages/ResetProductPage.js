import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { StripeProvider, Elements } from 'react-stripe-elements'
import { useParams, Redirect } from 'react-router-dom'
import { TweenMax } from 'gsap/TweenMax'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import SalesVideoSection from '../components/SalesPage/SalesVideoSection'
import WhatYouGetSection from '../components/SalesPage/WhatYouGetSection'
import PricingCard from '../components/SalesPage/PricingCard'
import ScrollToTop from '../components/Shared/ScrollToTop'
import BaseButton from '../components/Buttons/BaseButton'
import FWWLogo from '../svgs/FWWLogo'
import MessageDialog from '../components/Dialogs/MessageDialog'
import Portal from '../components/Shared/Portal'
import CheckoutForm from '../components/SalesPage/CheckoutForm'
import FullPageKettlebellLoader from '../components/Loaders/FullPageKettlebellLoader'
import { useProgramsContext } from '../context/ProgramsContext'
import { above } from '../styles/Theme'

const ResetProductPage = () => {
  // eslint-disable-next-line
  const [programsState, dispatchProgramsAction] = useProgramsContext()
  const [ipadProOrAbove, setIpadProOrAbove] = useState(false)
  const [stripe, setStripe] = useState(null)
  const [isCreatingCharge, setIsCreatingCharge] = useState(false)
  const [toThankYouPage, setToThankYouPage] = useState(false)
  const mediaQueryRef = useRef(null)

  const params = useParams()

  // eslint-disable-next-line
  const scroll = ScrollToPlugin

  // * Steps for loading... and letting the user know what's going on.
  // Step 1 - Go into full page kettlebell laoding component.

  // Step 2 - Once functions completes purchase... Redirect to success page.
  // TODO need a success page

  // Step 3 - User clicks to go back to dashboard and program will be active and in the top of the view

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
    if (typeof window !== undefined) {
      TweenMax.to(window, 1, { scrollTo: `#payment-form` })
    }
  }

  return (
    <StripeProvider stripe={stripe}>
      <>
        {isCreatingCharge ? (
          <FullPageKettlebellLoader loadingMessage="Creating charge and adding program to your account!" />
        ) : null}
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
            <div id="payment-form" />
            <Elements>
              <CheckoutForm
                price={price}
                setIsCreatingCharge={setIsCreatingCharge}
                setToThankYouPage={setToThankYouPage}
              />
            </Elements>
            {!ipadProOrAbove ? <Logo /> : null}
          </BenefitWrapper>
        </SalesPageContainer>
        {!ipadProOrAbove ? (
          <MobileButtonWrapper>
            <BaseButton purple={true} handleClick={handlePurchaseClick}>
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
