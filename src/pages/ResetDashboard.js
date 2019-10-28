import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import FWWLogo from '../components/Logos/FWWLogo'
import ProgramCard from '../components/Cards/WorkoutProgramCard'
import HorizontalBasicUserCard from '../components/UserCards/HorizontalBasicUserCard'
import FullPageKettlebellLoader from '../components/Loaders/FullPageKettlebellLoader'
import { useUserContext } from '../context/UserContext'
import { useProgramsContext } from '../context/ProgramsContext'
import siteConfig from '../utils/siteConfig'

const ResetDashboard = ({ match }) => {
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
      console.log('Fetching Data - Setting Up Program State')
      setIsLoadingPrograms(true)
      const getPrograms = {
        programIdArray: userState.programs
      }

      const getPercentComplete = {
        userId: userState.userId,
        programs: userState.programs
      }
      const baseUrl = siteConfig.api.baseUrl
      // For Get Programs you need to pass an array of programIds
      // You already have this in the object above
      const programsPath = '/get-programs'
      const percentCompletePath = '/get-percent-complete'
      const programsPromise = fetch(`${baseUrl}${programsPath}`, {
        method: 'POST',
        body: JSON.stringify(getPrograms)
      })
      const percentCompletePromise = fetch(`${baseUrl}${percentCompletePath}`, {
        method: 'POST',
        body: JSON.stringify(getPercentComplete)
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
          <Link
            key={key}
            to={`${match.url}/${programId}`}
            style={{ textDecoration: 'none' }}
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
          </Link>
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

  return (
    <>
      {isLoadingPrograms ? (
        <FullPageKettlebellLoader loadingMessage="Loading Your Programs..." />
      ) : (
        <DashboardContainer>
          <FWWLogo />
          <HorizontalBasicUserCard
            photoUrl={userState.photoUrl}
            firstName={userState.firstName}
          />
          <ProgramCardsWrapper>{renderPrograms()}</ProgramCardsWrapper>
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

const ProgramCardsWrapper = styled.div`
  margin: 60px 0 80px 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  gap: 40px;
  justify-items: center;
`
