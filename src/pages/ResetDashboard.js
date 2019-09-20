import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Redirect, Link } from 'react-router-dom'

import FWWLogo from '../svgs/FWWLogo'
import BaseButton from '../components/Buttons/BaseButton'
import ProgramCard from '../components/Cards/WorkoutProgramCard'
import { useUserContext } from '../context/UserContext'
import { useFireBase } from '../components/Firebase/FirebaseContext'
import { useProgramsContext } from '../context/ProgramsContext'
// import siteConfig from '../utils/siteConfig'

const ResetDashboard = ({ match }) => {
  const auth = useFireBase()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  // eslint-disable-next-line
  const [programsState, dispatchProgramsAction] = useProgramsContext()
  // eslint-disable-next-line
  const [isLoadingPrograms, setIsLoadingPrograms] = useState(true)
  const [toLogin, setToLogin] = useState(false)

  useEffect(() => {
    setIsLoadingPrograms(false)
  }, [])

  useEffect(() => {
    if (Object.values(userState).length === 0) {
      console.log('user not set... fetching user data')
      auth.getCurrentUser().then(user => {
        const username = user.displayName

        fetch('http://localhost:5000/get-user', {
          method: 'POST',
          body: JSON.stringify({
            username: username
          })
        })
          .then(response => response.json())
          .then(userData => {
            dispatchUserAction({
              type: 'setLoggedInUser',
              value: userData
            })
          })
          .catch(error => {
            console.log('Error fetching user data', error)
          })
      })
    }
  }, [auth, dispatchUserAction, userState])

  // useEffect(() => {
  //   if (
  //     programsState.programs.length === 0 &&
  //     programsState.percentComplete.length === 0
  //   ) {
  //     console.log('Fetching Data - Setting Up Program State')
  //     const getProgramData = {
  //       username: userState.username,
  //       programs: userState.programs
  //     }
  //     const baseUrl = siteConfig.api.baseUrl
  //     const programsPath = '/get-programs'
  //     const percentCompletePath = '/get-percent-complete'
  //     const programsPromise = fetch(`${baseUrl}${programsPath}`)
  //     const percentCompletePromise = fetch(`${baseUrl}${percentCompletePath}`, {
  //       method: 'POST',
  //       body: JSON.stringify(getProgramData)
  //     })

  //     Promise.all([programsPromise, percentCompletePromise])
  //       .then(response => {
  //         const data = response.map(res => res.json())
  //         return Promise.all(data)
  //       })
  //       .then(dataArray => {
  //         const programs = dataArray[0]
  //         const percentComplete = dataArray[1]

  //         dispatchProgramsAction({
  //           type: 'setProgramsState',
  //           value: programs.programs
  //         })

  //         dispatchProgramsAction({
  //           type: 'setPercentComplete',
  //           value: percentComplete.percentComplete
  //         })

  //         setIsLoadingPrograms(false)
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })
  //   }
  // }, [
  //   dispatchProgramsAction,
  //   programsState.percentComplete,
  //   programsState.programs,
  //   userState.programs,
  //   userState.username
  // ])

  // // Check for real loading... use this!!!!
  // useEffect(() => {
  //   if (
  //     programsState.programs.length > 0 &&
  //     programsState.percentComplete.length > 0
  //   ) {
  //     setIsLoadingPrograms(false)
  //   }
  // }, [isLoadingPrograms, programsState])

  const handleSignOut = () => {
    auth.logUserOut()
    setToLogin(true)
  }

  const renderPrograms = () => {
    const programs = programsState.programs.map(program => {
      const key = program.order
      const coverImage = program.coverImage
      const description = program.description
      const title = program.name
      const programId = program.programId

      return (
        <Link
          key={key}
          to={`${match.url}/${programId}`}
          style={{ textDecoration: 'none' }}
        >
          <ProgramCard
            isProgram
            coverImage={coverImage}
            programId={programId}
            title={title}
            description={description}
          />
        </Link>
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
