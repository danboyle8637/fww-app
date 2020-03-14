import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import FWWLogo from '../components/Logos/FWWLogo'
import ProgramCard from '../components/Cards/WorkoutProgramCard'
import HorizontalBasicUserCard from '../components/UserCards/HorizontalBasicUserCard'
import { WorkoutPageHeadline } from '../styles/Typography'
import WorkoutCardLoader from '../components/Loaders/WorkoutCardLoader'
import ScrollToTop from '../components/Shared/ScrollToTop'
import FierceSection from '../components/Fierce/FierceSection'
import { useUserContext } from '../context/UserContext'
import { useProgramsContext } from '../context/ProgramsContext'
import { usePortalContext } from '../context/portalContext'
import { useFireBase } from '../components/Firebase/FirebaseContext'
import siteConfig from '../utils/siteConfig'
import { above } from '../styles/Theme'

const ResetDashboard = ({ location }) => {
  const auth = useFireBase()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  const [programsState, dispatchProgramsAction] = useProgramsContext()
  const [isLoadingPrograms, setIsLoadingPrograms] = useState(false)
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()

  useEffect(() => {
    if (
      programsState.purchasedPrograms.length === 0 &&
      programsState.notPurchasedPrograms.length === 0 &&
      programsState.percentComplete.length === 0
    ) {
      setIsLoadingPrograms(true)

      // ! Checking local storage for programs
      if (localStorage.getItem('fwwPrograms')) {
        const data = localStorage.getItem('fwwPrograms')
        const programData = JSON.parse(data)

        dispatchProgramsAction({
          type: 'setProgramsState',
          value: {
            purchasedPrograms: programData.purchasedPrograms,
            notPurchasedPrograms: programData.notPurchasedPrograms
          }
        })

        dispatchProgramsAction({
          type: 'setPercentComplete',
          value: programData.percentComplete
        })

        setIsLoadingPrograms(false)
      } else {
        const getPrograms = {
          programIdArray: userState.programs
        }

        const getPercentComplete = {
          programs: userState.programs
        }
        const baseUrl = siteConfig.api.baseUrl

        const programsPath = '/get-programs'
        const percentCompletePath = '/get-percent-complete'

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
                      value: {
                        purchasedPrograms: programs.purchasedPrograms,
                        notPurchasedPrograms: programs.notPurchasedPrograms
                      }
                    })

                    dispatchProgramsAction({
                      type: 'setPercentComplete',
                      value: percentComplete.percentComplete
                    })

                    // ! Set program data to local storage
                    const fwwPrograms = {
                      purchasedPrograms: programs.purchasedPrograms,
                      notPurchasedPrograms: programs.notPurchasedPrograms,
                      percentComplete: percentComplete.percentComplete
                    }

                    localStorage.setItem(
                      'fwwPrograms',
                      JSON.stringify(fwwPrograms)
                    )

                    setIsLoadingPrograms(false)
                  })
                  .catch(error => {
                    dispatchPortalAction({
                      type: 'toggleErrorMessage',
                      value: error.message
                    })
                  })
              })
              .catch(() => {
                dispatchPortalAction({
                  type: 'toggleErrorMessage',
                  value:
                    '😬 Something happened. Refresh the page and try again.'
                })
              })
          })
          .catch(() => {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value: `😬 Could not get your user account. Try again so we can setup your programs.`
            })
          })
      }
    }
  }, [
    auth,
    dispatchPortalAction,
    dispatchProgramsAction,
    programsState.notPurchasedPrograms,
    programsState.percentComplete,
    programsState.programs,
    programsState.purchasedPrograms,
    userState.programs,
    userState.userId
  ])

  const renderPurchasedPrograms = () => {
    const purchasedPrograms = programsState.purchasedPrograms.map(program => {
      const key = program.order
      const coverImage = program.coverImage
      const tinyCoverImage = program.tinyCoverImage
      const description = program.description
      const title = program.name
      const programId = program.programId

      return (
        <CardLink key={key} to={`${location.pathname}/${programId}`}>
          <ProgramCard
            isProgram
            coverImage={coverImage}
            tinyCoverImage={tinyCoverImage}
            programId={programId}
            title={title}
            description={description}
            activeProgram={true}
          />
        </CardLink>
      )
    })

    return purchasedPrograms
  }

  const renderNotPurchasedPrograms = () => {
    const notPurchasedPrograms = programsState.notPurchasedPrograms.map(
      program => {
        const key = program.order
        const coverImage = program.coverImage
        const tinyCoverImage = program.tinyCoverImage
        const description = program.description
        const title = program.name
        const programId = program.programId
        const fitnessLevel = program.fitnessLevel
        const duration = program.duration
        const totalWorkouts = program.totalWorkouts
        const price = program.price

        return (
          <CardLink key={key} to={`${location.pathname}/purchase/${programId}`}>
            <ProgramCard
              isProgram
              coverImage={coverImage}
              tinyCoverImage={tinyCoverImage}
              programId={programId}
              title={title}
              description={description}
              activeProgram={false}
              fitnessLevel={fitnessLevel}
              duration={duration}
              totalWorkouts={totalWorkouts}
              price={price}
            />
          </CardLink>
        )
      }
    )

    return notPurchasedPrograms
  }

  const yourProgramsCardLoader = () => {
    return userState.programs.map((card, index) => {
      return (
        <WorkoutCardLoader key={index} loadingMessage={'Loading programs...'} />
      )
    })
  }

  const programCardLoader = (
    <>
      <WorkoutCardLoader loadingMessage={'Loading programs...'} />
      <WorkoutCardLoader loadingMessage={'Loading programs...'} />
      <WorkoutCardLoader loadingMessage={'Loading programs...'} />
    </>
  )

  return (
    <>
      <DashboardContainer>
        <ScrollToTop />
        <FWWLogo />
        <HorizontalBasicUserCard
          photoUrl={userState.photoUrl}
          firstName={userState.firstName}
        />
        <ExtendWorkoutPageHeadline>Your Programs:</ExtendWorkoutPageHeadline>
        <ProgramCardsWrapper>
          {isLoadingPrograms ? (
            <>{yourProgramsCardLoader()}</>
          ) : (
            renderPurchasedPrograms()
          )}
        </ProgramCardsWrapper>
        <FierceSection />
        <ProgramCardsWrapper>
          {isLoadingPrograms ? (
            <>{programCardLoader}</>
          ) : (
            renderNotPurchasedPrograms()
          )}
        </ProgramCardsWrapper>
      </DashboardContainer>
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

const ProgramCardsWrapper = styled.div`
  margin: 60px 0 80px 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
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

const ExtendWorkoutPageHeadline = styled(WorkoutPageHeadline)`
  margin: 40px 0 0 0;
  padding: 0 16px;
  align-self: flex-start;
`
