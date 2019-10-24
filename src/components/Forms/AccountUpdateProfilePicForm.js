import React from 'react'
import styled from 'styled-components'

import { Header3 } from '../../styles/Typography'
import BaseButton from '../Buttons/BaseButton'
import FileUpload from '../Forms/Inputs/FileUpload'
import useFormControls from '../../hooks/useFormControls'
import { useFormStore } from '../../context/FormContext'

const AccountUpdateProfilePicForm = () => {
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  // eslint-disable-next-line
  const [updateInputValues, updateInputOptions] = useFormControls()

  const handleUploadPhoto = event => {
    event.preventDefault()
    console.log(formState.updateProfileImage.file)
    // Make functions call and handle file on server
  }

  return (
    <ProfilePicForm onSubmit={handleUploadPhoto}>
      <Header3>Update Profile Picture:</Header3>
      <FileUpload
        name="updateProfileImage"
        valid={formState.updateProfileImage.valid}
        updateInputValues={updateInputValues}
      />
      <BaseButton type="submit">Save Photo</BaseButton>
    </ProfilePicForm>
  )
}

export default AccountUpdateProfilePicForm

const ProfilePicForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
