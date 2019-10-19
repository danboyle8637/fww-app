import React from 'react'
import styled from 'styled-components'

import FileUploadIndicator from '../../../svgs/FileUploadIndicator'
import useFormControls from '../../../hooks/useFormControls'
import { useFormStore } from '../../../context/FormContext'
import '../Inputs/inputs.css'

const FileUpload = () => {
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  // eslint-disable-next-line
  const [updateInputValues, updateInputOptions] = useFormControls()

  return (
    <UploadSelfieContainer>
      <Upload
        type="file"
        name="reviewSelfie"
        accept="image/*"
        onChange={updateInputValues}
      />
      <UploadIcon />
      <UploadLabel>
        {formState.reviewSelfieImage.imageSet
          ? formState.reviewSelfieImage.fileName
          : 'Click To Upload Selfie'}
      </UploadLabel>
    </UploadSelfieContainer>
  )
}

export default FileUpload

const UploadSelfieContainer = styled.div`
  position: relative;
  margin: 20px 0 60px 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  justify-items: center;
  overflow: hidden;
`

const UploadLabel = styled.p`
  margin: 0;
  padding: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.theme.primaryAccent};
`

const Upload = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  font-size: 40px;
  width: 100%;
  height: 100%;
`

const UploadIcon = styled(FileUploadIndicator)`
  width: 120px;
`
