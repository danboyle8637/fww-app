import React from 'react'
import styled from 'styled-components'

import UpdateAccountFormTransition from '../../Animations/Transitions/UpdateAccountFormTransition'
import BaseButton from '../Buttons/BaseButton'
import FileUpload from '../Forms/Inputs/FileUpload'
import BackChip from '../Chips/BackChip'
import useFormControls from '../../hooks/useFormControls'
import { useFormStore } from '../../context/FormContext'

const AccountUpdateProfilePicForm = ({ activeSlide, setActiveSlide }) => {
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  // eslint-disable-next-line
  const [updateInputValues, updateInputOptions] = useFormControls()

  const handleUploadPhoto = event => {
    event.preventDefault()
    console.log(formState.updateProfileImage.file)
    // Make functions call and handle file on server
  }

  const handleBack = () => setActiveSlide(0)

  return (
    <UpdateAccountFormTransition showNode={activeSlide === 1}>
      <ProfilePicForm onSubmit={handleUploadPhoto}>
        <BackChip handleClick={handleBack}>Back</BackChip>
        <Header3>Update Profile Picture:</Header3>
        <FileUpload
          name="updateProfileImage"
          valid={formState.updateProfileImage.valid}
          updateInputValues={updateInputValues}
        />
        <BaseButton type="submit">Save Photo</BaseButton>
      </ProfilePicForm>
    </UpdateAccountFormTransition>
  )
}

export default AccountUpdateProfilePicForm

const ProfilePicForm = styled.form`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Header3 = styled.h3`
  margin: 12px 0 0 0;
  padding: 0;
  font-size: 22px;
`
