import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation, Redirect } from 'react-router-dom'

import successMobileBg from '../images/successful-purchase-600x1300.jpg'
import successTabletBg from '../images/successful-purchase-834x1112.jpg'
import successIpadProBg from '../images/successful-purchase-1024x1366.jpg'
import successLaptopBg from '../images/successful-purchase-1440x900.jpg'
import useRenderBackgroundImage from '../hooks/useRenderBackgroundImage'
import ThankYouHeader from '../components/PageHeaders/ThankYouHeader'
import KindalSig from '../svgs/KindalSig'
import BaseButton from '../components/Buttons/BaseButton'
import { useProgramsContext } from '../context/ProgramsContext'
import { useUserContext } from '../context/UserContext'
import { above } from '../styles/Theme'

const ResetPurchaseThankYou = () => {
  const [toDashboard, setToDashboard] = useState(false)
  const [programName, setProgramName] = useState('')
  const [programsState, dispatchProgramsAction] = useProgramsContext()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()

  const location = useLocation()

  useEffect(() => {
    dispatchProgramsAction({
      type: 'updateShoppingCartProgram',
      value: {}
    })

    const fwwPrograms = {
      purchasedPrograms: programsState.purchasedPrograms,
      notPurchasedPrograms: programsState.notPurchasedPrograms,
      percentComplete: programsState.percentComplete
    }

    const programId = location.state.programId
    const program = programsState.purchasedPrograms.find(program => {
      return program.programId === programId
    })

    setProgramName(program.name)

    localStorage.setItem('fwwPrograms', JSON.stringify(fwwPrograms))
  }, [
    dispatchProgramsAction,
    location.state.programId,
    programsState.notPurchasedPrograms,
    programsState.percentComplete,
    programsState.purchasedProgram,
    programsState.purchasedPrograms
  ])

  const title = 'Kindal giving you a high five for joining FWW'
  const alt = 'Kindal giving you a high five for joining FWW'
  const background = useRenderBackgroundImage(
    successMobileBg,
    successTabletBg,
    successIpadProBg,
    successLaptopBg,
    title,
    alt
  )

  const handleButtonClick = () => setToDashboard(true)

  return (
    <>
      <ThankYouContainer>
        {background}
        <ContentWrapper>
          <ThankYouHeader
            firstName={userState.firstName}
            program={programName}
          />
          <BaseButton handleClick={handleButtonClick}>
            Back To My Dashboard
          </BaseButton>
          <Kindal />
        </ContentWrapper>
      </ThankYouContainer>
      {toDashboard ? <Redirect to={'/dashboard'} /> : null}
    </>
  )
}

export default ResetPurchaseThankYou

const ThankYouContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`

const ContentWrapper = styled.div`
  margin: 20px 0 0 0;
  padding: 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  ${above.mobile`
    margin: 40px 40px 0 0;
    justify-self: end;
    width: 70%;
  `}
  ${above.tablet`
    margin: 120px 40px 0 0;
    width: 60%;
  `}
  ${above.ipadPro`
    margin: 120px 120px 0 0;
    width: 50%;
  `}
`

const Kindal = styled(KindalSig)`
  margin: 40px 20px 0 0;
  align-self: flex-end;
  width: 120px;
  ${above.tablet`
    width: 160px;
  `}
`
