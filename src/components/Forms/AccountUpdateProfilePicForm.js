import React from 'react'
import styled from 'styled-components'

import UpdateAccountFormTransition from '../../Animations/Transitions/UpdateAccountFormTransition'
import BaseButton from '../Buttons/BaseButton'
import FileUpload from '../Forms/Inputs/FileUpload'
import BackChip from '../Chips/BackChip'
import useFormControls from '../../hooks/useFormControls'
import { useUserContext } from '../../context/UserContext'
import { useFormStore } from '../../context/FormContext'
import { useFetchingContext } from '../../context/FetchingContext'
import { useFireBase } from '../Firebase/FirebaseContext'
import siteConfig from '../../utils/siteConfig'

const AccountUpdateProfilePicForm = ({
  activeSlide,
  setActiveSlide,
  handleToggleSync,
  handleSetSyncMessage,
  setIsProfilePic
}) => {
  const auth = useFireBase()
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  // eslint-disable-next-line
  const [updateInputValues, updateInputOptions] = useFormControls()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  // eslint-disable-next-line
  const [fetchingState, dispatchFetchingAction] = useFetchingContext()

  const handleUploadPhoto = event => {
    event.preventDefault()
    handleToggleSync()
    dispatchFetchingAction({ type: 'toggleFetching' })
    setIsProfilePic(true)
    handleSetSyncMessage('Updating your image...')

    const newAvatar = formState.updateProfileImage.file
    const formData = new FormData()
    formData.append('avatar', newAvatar)

    const getPhotoUrl = `${siteConfig.api.baseUrl}/get-user-photo-url`

    auth.getCurrentUser().then(user => {
      user.getIdToken(true).then(token => {
        return fetch(getPhotoUrl, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: formData
        })
          .then(response => response.json())
          .then(data => {
            handleSetSyncMessage(data.message)

            dispatchUserAction({
              type: 'setUpdatedProfileImage',
              value: data.photoUrl
            })

            const userData = localStorage.getItem('fwwUser')
            const fwwUser = JSON.parse(userData)

            const updatedFWWUser = {
              ...fwwUser,
              photoUrl: data.photoUrl
            }

            localStorage.setItem('fwwUser', JSON.stringify(updatedFWWUser))

            dispatchFormAction({ type: 'emptyProfileImage' })

            handleToggleSync()
            dispatchFetchingAction({ type: 'toggleFetching' })
            setIsProfilePic(false)
          })
          .catch(error => {
            handleSetSyncMessage(`😢 ${error.errors}`)
            dispatchFetchingAction({ type: 'toggleFetching' })
          })
      })
    })
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
        <BaseButton type="submit">
          {formState.updateProfileImage.file
            ? 'Click to Save Image'
            : 'Upload an Image'}
        </BaseButton>
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
