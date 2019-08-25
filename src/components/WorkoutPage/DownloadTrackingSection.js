import React from 'react'
import styled from 'styled-components'

import {
  WorkoutPageHeadline,
  WorkoutPageDescription
} from '../../styles/Typography'
import DownloadIcon from '../../svgs/DownloadIcon'

const DownloadTrackingSection = () => {
  return (
    <FormContainer>
      <WorkoutPageHeadline>Download It:</WorkoutPageHeadline>
      <WorkoutPageDescription>
        Download the tracking sheet and print it off for your records.
      </WorkoutPageDescription>
      <Download />
    </FormContainer>
  )
}

export default DownloadTrackingSection

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Download = styled(DownloadIcon)`
  margin: 20px 0 0 0;
  align-self: center;
  width: 120px;
`
