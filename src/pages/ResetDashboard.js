import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import FWWLogo from '../svgs/FWWLogo'
import BaseButton from '../components/Buttons/BaseButton'
import ProgramCard from '../components/Cards/WorkoutProgramCard'
import { useUserContext } from '../context/UserContext'
import { useFireBase } from '../components/Firebase/FirebaseContext'
import { useProgramsContext } from '../context/ProgramsContext'
import siteConfig from '../utils/siteConfig'

const ResetDashboard = () => {
  const auth = useFireBase()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  const [programsState, dispatchProgramsAction] = useProgramsContext()
  const [isLoadingPrograms, setIsLoadingPrograms] = useState(true)
  const [toLogin, setToLogin] = useState(false)

  useEffect(() => {
    if (
      programsState.programs.length === 0 &&
      programsState.percentComplete.length === 0
    ) {
      console.log('Fetching Data from Api')
      const getProgramData = {
        username: userState.username,
        programs: userState.programs
      }
      const baseUrl = siteConfig.api.baseUrl
      const programsPath = '/get-programs'
      const percentCompletePath = '/get-percent-complete'
      const programsPromise = fetch(`${baseUrl}${programsPath}`)
      const percentCompletePromise = fetch(`${baseUrl}${percentCompletePath}`, {
        method: 'POST',
        body: JSON.stringify(getProgramData)
      })

      Promise.all([programsPromise, percentCompletePromise])
        .then(response => {
          const data = response.map(res => res.json())
          return Promise.all(data)
        })
        .then(dataArray => {
          const programs = dataArray[0]
          const percentComplete = dataArray[1]

          dispatchProgramsAction({
            type: 'setProgramsState',
            value: programs.programs
          })

          dispatchProgramsAction({
            type: 'setPercentComplete',
            value: percentComplete.percentComplete
          })

          setIsLoadingPrograms(false)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }, [
    dispatchProgramsAction,
    programsState.percentComplete,
    programsState.programs,
    userState.program,
    userState.programs,
    userState.username
  ])

  useEffect(() => {
    if (
      programsState.programs.length > 0 &&
      programsState.percentComplete.length > 0
    ) {
      setIsLoadingPrograms(false)
    }
  }, [isLoadingPrograms, programsState])

  const handleSignOut = () => {
    auth.logUserOut()
    setToLogin(true)
  }

  const renderPrograms = () => {
    const programs = programsState.programs.map(program => {
      const key = program.order
      const coverImage = program.coverImage
      const description = program.description
      // const duration = program.duration
      const title = program.name
      const programId = program.programId
      // const totalWorkouts = program.totalWorkouts

      return (
        <ProgramCard
          key={key}
          isProgram
          coverImage={coverImage}
          programId={programId}
          title={title}
          description={description}
        />
      )
    })

    return programs
  }

  return (
    <>
      {toLogin ? (
        <Redirect to="/login" />
      ) : (
        <DashboardContainer>
          <Logo />
          <UserInfo>{userState.firstName}</UserInfo>
          {isLoadingPrograms ? <p>Loading...</p> : <>{renderPrograms()}</>}
          <BaseButton handleClick={handleSignOut}>Sign Out</BaseButton>
        </DashboardContainer>
      )}
    </>
  )
}

export default ResetDashboard

const DashboardContainer = styled.div`
  margin: 40px 0 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled(FWWLogo)`
  width: 220px;
`

const UserInfo = styled.p`
  margin: 20px 0 0 0;
  font-family: QuicksandSemiBold;
  font-size: 18px;
  color: ${props => props.theme.bodyText};
`
