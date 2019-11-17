import React from 'react'
import styled from 'styled-components'

import NavigationArrow from '../Shared/NavigationArrow'
import { useFireBase } from '../Firebase/FirebaseContext'
import { useUserContext } from '../../context/UserContext'
import { useProgramsContext } from '../../context/ProgramsContext'
import siteConfig from '../../utils/siteConfig'

const AddProgramCardFooter = ({
  programId,
  setAddingProgramToAccount,
  setLoadingMessage
}) => {
  const auth = useFireBase()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  // eslint-disable-next-line
  const [programsState, dispatchProgramsAction] = useProgramsContext()

  const handleAddProgram = () => {
    console.log('Add program to user program array')
    // 1. Show the full page kettlebell loader
    setAddingProgramToAccount(true)
    setLoadingMessage('Adding Progam to Account...')
    // 2. Make fetch call to update user custom claims and database program array
    const addProgramUrl = `${siteConfig.api.baseUrl}/add-program`
    const getPercentCompleteUrl = `${siteConfig.api.baseUrl}/get-percent-complete`
    const addProgramBody = {
      programId: programId
    }

    auth.getCurrentUser().then(user =>
      user.getIdToken(true).then(token => {
        fetch(addProgramUrl, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(addProgramBody)
        })
          .then(response => response.json())
          .then(data => {
            const programArray = data.programArray

            dispatchUserAction({
              type: 'setUpdatedPrograms',
              value: programId
            })

            const userData = localStorage.getItem('fwwUser')
            const fwwUser = JSON.parse(userData)
            const updatedFWWUser = { ...fwwUser, programs: programArray }
            localStorage.setItem('fwwUser', JSON.stringify(updatedFWWUser))

            const getPercentCompleteBody = {
              programs: programArray
            }

            fetch(getPercentCompleteUrl, {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${token}`
              },
              body: JSON.stringify(getPercentCompleteBody)
            })
              .then(response => response.json())
              .then(data => {
                const percentComplete = data.percentComplete

                dispatchProgramsAction({
                  type: 'setPercentComplete',
                  value: percentComplete
                })

                const programsData = localStorage.getItem('fwwPrograms')
                const fwwPrograms = JSON.parse(programsData)
                const updatedFWWPrograms = {
                  ...fwwPrograms,
                  percentComplete: percentComplete
                }
                localStorage.setItem(
                  'fwwPrograms',
                  JSON.stringify(updatedFWWPrograms)
                )

                setAddingProgramToAccount(false)
              })
              .catch(() => {
                // error getting percent complete
              })
          })
          .catch(() => {
            // error adding program.
          })
      })
    )

    // 3. Update user state program array and localstorage program array
    // 4. Reshow the dashboard with what should be active program card
  }

  return (
    <FooterContainer>
      <AddProgramButton onClick={handleAddProgram}>
        Add to My Fit Profile
      </AddProgramButton>
      <NavigationArrow />
    </FooterContainer>
  )
}

export default AddProgramCardFooter

const FooterContainer = styled.div`
  padding: 8px;
  justify-self: end;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  align-items: center;
  justify-items: end;
  width: 100%;
`

const AddProgramButton = styled.button`
  margin: 0;
  padding: 8px 12px;
  background: ${props => props.theme.tertiaryAccent};
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: ${props => props.theme.mainBackgroundBorderColor};
  border: none;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props => props.theme.primaryAccent};
  }
`
