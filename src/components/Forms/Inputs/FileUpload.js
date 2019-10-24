import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'

import FileUploadIndicator from '../../../svgs/FileUploadIndicator'
import { useFormStore } from '../../../context/FormContext'
import '../Inputs/inputs.css'

const FileUpload = props => {
  const { name, updateInputValues } = props
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  const [startAnimation, setStartAnimation] = useState(false)

  const setLabel = useCallback(() => {
    switch (name) {
      case 'reviewSelfie': {
        return formState.reviewSelfieImage.valid
          ? formState.reviewSelfieImage.fileName
          : 'Click to Upload Selfie'
      }
      case 'updateProfileImage': {
        return formState.updateProfileImage.valid
          ? formState.updateProfileImage.fileName
          : 'Click to Update Image'
      }
      default: {
        return 'Click to Upload Image'
      }
    }
  }, [formState.reviewSelfieImage, formState.updateProfileImage, name])

  useEffect(() => {
    if (
      formState.reviewSelfieImage.valid ||
      formState.updateProfileImage.valid
    ) {
      setStartAnimation(true)
    }
  }, [formState.reviewSelfieImage, formState.updateProfileImage])

  return (
    <UploadSelfieContainer>
      <Upload
        type="file"
        name={name}
        accept="image/*"
        onChange={updateInputValues}
        {...props}
      />
      <UploadIcon startAnimation={startAnimation} />
      <UploadLabel>{setLabel()}</UploadLabel>
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
