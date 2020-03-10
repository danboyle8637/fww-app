import React from 'react'
import styled from 'styled-components'

import {
  WorkoutPageHeadline,
  WorkoutPageDescription
} from '../../styles/Typography'
import { MenuLabel } from '../../styles/Typography'
import CircleCheckbox from '../../svgs/CircleCheckbox'
import { useFormStore } from '../../context/FormContext'
import { useFireBase } from '../Firebase/FirebaseContext'
import { useFetchingContext } from '../../context/FetchingContext'
import siteConfig from '../../utils/siteConfig'

const DownloadTrackingSection = ({
  handleToggleSync,
  handleSetSyncMessage
}) => {
  const admin = useFireBase()
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  // eslint-disable-next-line
  const [fetchingState, dispatchFetchingAction] = useFetchingContext()

  const handleSetTrackingDownloadVote = vote => {
    handleToggleSync()
    dispatchFetchingAction({ type: 'toggleFetching' })
    dispatchFormAction({ type: 'setDownloadTrackingSheet', value: vote })
    // const baseUrl = siteConfig.api.baseUrl
    // const caseVote = `/cast-download-tracking-sheet-vote`
    // const url = `${baseUrl}${caseVote}`

    // const body = {
    //   userVote: vote
    // }

    // admin.getCurrentUser().then(user => {
    //   user.getIdToken(true).then(token => {
    //     fetch(url, {
    //       method: 'POST',
    //       headers: {
    //         Authorization: `Bearer ${token}`
    //       },
    //       body: JSON.stringify(body)
    //     })
    //       .then(response => response.json())
    //       .then(data => {
    //         handleSetSyncMessage(data.message)
    //         handleToggleSync()
    //         dispatchFetchingAction({ type: 'toggleFetching' })
    //       })
    //   })
    // })
  }

  return (
    <FormContainer>
      <WorkoutPageHeadline>Download It:</WorkoutPageHeadline>
      <WorkoutPageDescription>
        Should we include downloadable tracking sheets? Click the icon below and
        let us know what you think.
      </WorkoutPageDescription>
      <CheckboxWrapper>
        <CheckWrapper>
          <Checkbox
            value={'yes'}
            isChecked={formState.downloadTrackingSheet.vote === 'yes'}
            handleToggleCheck={handleSetTrackingDownloadVote}
          />
          <MenuLabel>Yes</MenuLabel>
        </CheckWrapper>
        <CheckWrapper>
          <Checkbox
            value={'no'}
            isChecked={formState.downloadTrackingSheet.vote === 'no'}
            handleToggleCheck={handleSetTrackingDownloadVote}
          />
          <MenuLabel>No</MenuLabel>
        </CheckWrapper>
      </CheckboxWrapper>
    </FormContainer>
  )
}

export default DownloadTrackingSection

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const CheckboxWrapper = styled.div`
  margin: 20px 0 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`

const CheckWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  gap: 8px;
  justify-items: center;
`

const Checkbox = styled(CircleCheckbox)`
  width: 40px;
`
