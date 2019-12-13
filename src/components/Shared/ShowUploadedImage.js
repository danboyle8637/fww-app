import React from 'react'
import styled from 'styled-components'

const ShowUploadedImage = ({ file }) => {
  return <PreviewImage src={URL.createObjectURL(file)} />
}

export default ShowUploadedImage

const PreviewImage = styled.img`
  margin: 0;
  padding: 0;
  justify-self: center;
  border: 8px solid ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 50%;
  width: 140px;
  height: 140px;
`
