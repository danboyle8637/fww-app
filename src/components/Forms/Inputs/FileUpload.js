import React from 'react'
import styled from 'styled-components'

const FileUpload = () => {
  return (
    <UploadSelfieContainer>
      <SelfieButton>Upload a Selfie!</SelfieButton>
      <Upload type="file" name="selfie" accept="image/*" />
    </UploadSelfieContainer>
  )
}

export default FileUpload

const UploadSelfieContainer = styled.div`
  position: relative;
  overflow: hidden;
`

const SelfieButton = styled.button`
  margin: 0;
  padding: 12px;
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.strongBodyText};
  background: ${props => props.theme.mainBackgroundColor};
  border: 3px solid ${props => props.theme.strongBodyText};
  border-radius: 8px;
`

const Upload = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  font-size: 40px;
  width: 100%;
`
