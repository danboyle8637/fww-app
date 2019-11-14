import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import FWWLogo from '../components/Logos/FWWLogo'
import ProgramCard from '../components/Cards/WorkoutProgramCard'
import HorizontalBasicUserCard from '../components/UserCards/HorizontalBasicUserCard'
import WorkoutCardLoader from '../components/Loaders/WorkoutCardLoader'
import { useUserContext } from '../context/UserContext'
import { useProgramsContext } from '../context/ProgramsContext'
import { useFireBase } from '../components/Firebase/FirebaseContext'
import siteConfig from '../utils/siteConfig'
import { above } from '../styles/Theme'

const ResetDashboard = ({ location }) => {
  const auth = useFireBase()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  // eslint-disable-next-line
  const [programsState, dispatchProgramsAction] = useProgramsContext()
  // eslint-disable-next-line
  const [isLoadingPrograms, setIsLoadingPrograms] = useState(false)

  useEffect(() => {
    if (
      programsState.programs.length === 0 &&
      programsState.percentComplete.length === 0
    ) {
      setIsLoadingPrograms(true)

      const getPrograms = {
        programIdArray: userState.programs
      }

      const getPercentComplete = {
        programs: userState.programs
      }
      const baseUrl = siteConfig.api.baseUrl

      const programsPath = '/get-programs'
      const percentCompletePath = '/get-percent-complete'

      // ! Checking local storage for programs
      if (localStorage.getItem('fwwPrograms')) {
        console.log('fwwPrograms are in local storage')
        const data = localStorage.getItem('fwwPrograms')
        const programData = JSON.parse(data)

        dispatchProgramsAction({
          type: 'setProgramsState',
          value: programData.programs
        })

        dispatchProgramsAction({
          type: 'setPercentComplete',
          value: programData.percentComplete
        })

        setIsLoadingPrograms(false)
      } else {
        console.log('fwwPrograms are not in local storage')
        console.log('Fetching Data - Setting Up Program State')
        auth
          .getCurrentUser()
          .then(user => {
            user
              .getIdToken(true)
              .then(token => {
                const programsPromise = fetch(`${baseUrl}${programsPath}`, {
                  method: 'POST',
                  headers: {
                    Authorization: `Bearer ${token}`
                  },
                  body: JSON.stringify(getPrograms)
                })
                const percentCompletePromise = fetch(
                  `${baseUrl}${percentCompletePath}`,
                  {
                    method: 'POST',
                    headers: {
                      Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(getPercentComplete)
                  }
                )

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

                    // ! Set program data to local storage
                    const fwwPrograms = {
                      programs: programs.programs,
                      percentComplete: percentComplete.percentComplete
                    }

                    localStorage.setItem(
                      'fwwPrograms',
                      JSON.stringify(fwwPrograms)
                    )

                    setIsLoadingPrograms(false)
                  })
                  .catch(error => {
                    console.log(error)
                  })
              })
              .catch(error => {
                // Token error
                console.log(error)
              })
          })
          .catch(error => {
            console.log(`The whole things crashed down`, error)
          })
      }
    }
  }, [
    auth,
    dispatchProgramsAction,
    programsState.percentComplete,
    programsState.programs,
    userState.programs,
    userState.userId
  ])

  const renderPrograms = () => {
    const programs = programsState.programs.map(program => {
      const key = program.order
      const coverImage = program.coverImage
      const tinyCoverImage = program.tinyCoverImage
      const description = program.description
      const title = program.name
      const programId = program.programId
      const userPrograms = userState.programs

      const activeProgram = userPrograms.includes(programId)

      if (activeProgram) {
        return (
          <CardLink
            key={key}
            to={`${location.pathname}/${programId}`}
            // style={{ textDecoration: 'none' }}
          >
            <ProgramCard
              isProgram
              coverImage={coverImage}
              tinyCoverImage={tinyCoverImage}
              programId={programId}
              title={title}
              description={description}
              activeProgram={activeProgram}
            />
          </CardLink>
        )
      } else {
        return (
          <ProgramCard
            key={key}
            isProgram
            coverImage={coverImage}
            tinyCoverImage={tinyCoverImage}
            programId={programId}
            title={title}
            description={description}
            activeProgram={activeProgram}
          />
        )
      }
    })

    return programs
  }

  const programCardLoader = (
    <>
      <WorkoutCardLoader loadingMessage={'Loading programs...'} />
      <WorkoutCardLoader loadingMessage={'Loading programs...'} />
      <WorkoutCardLoader loadingMessage={'Loading programs...'} />
    </>
  )

  return (
    <DashboardContainer>
      <FWWLogo />
      <HorizontalBasicUserCard
        photoUrl={userState.photoUrl}
        firstName={userState.firstName}
      />
      <ProgramCardsWrapper>
        {isLoadingPrograms ? <>{programCardLoader}</> : renderPrograms()}
      </ProgramCardsWrapper>
    </DashboardContainer>
  )
}

export default ResetDashboard

const DashboardContainer = styled.div`
  margin: 40px 0 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProgramCardsWrapper = styled.div`
  margin: 60px 0 80px 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  gap: 40px;
  justify-items: center;
  width: 100%;
  ${above.mobile`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 12px;
  `}
  ${above.tablet`
    width: auto;
    gap: 20px;
  `}
`

const CardLink = styled(Link)`
  text-decoration: none;
  border-radius: 10px 10px 30px 10px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props => props.theme.primaryAccent};
  }
`
