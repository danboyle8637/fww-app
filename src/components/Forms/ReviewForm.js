import React from 'react'
import styled from 'styled-components'

import BaseButton from '../Buttons/BaseButton'
import ReviewStars from '../../svgs/ReviewStars'
import ReviewGuidelines from '../ContentBlocks/ReviewGuidelines'
import ReviewWhyEmail from '../ContentBlocks/ReviewWhyEmail'
import ReviewWhySelfie from '../ContentBlocks/ReviewWhySelfie'
import TextInput from '../Forms/Inputs/TextInput'
import TextArea from '../Forms/Inputs/TextArea'
import FileUpload from '../Forms/Inputs/FileUpload'
import ShowUploadedImage from '../Shared/ShowUploadedImage'
import { useFormStore } from '../../context/FormContext'
import { usePortalContext } from '../../context/portalContext'
import { useFireBase } from '../Firebase/FirebaseContext'
import useFormControls from '../../hooks/useFormControls'
import siteConfig from '../../utils/siteConfig'
import { above } from '../../styles/Theme'

const ReviewForm = ({ handleToggleSync, handleSetSyncMessage }) => {
  const auth = useFireBase()
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()
  const [updateInputValues, updateInputOptions] = useFormControls()

  const handleReviewSubmit = event => {
    event.preventDefault()
    handleToggleSync()
    handleSetSyncMessage('Saving your review...')

    const starRating = formState.starRatingValue.value
    const firstName = formState.firstNameValue.value
    const email = formState.emailValue.value
    const reviewText = formState.reviewValue.value
    const selfiePhoto = formState.reviewSelfieImage.file

    const reviewBody = {
      stars: starRating,
      firstName: firstName,
      email: email,
      review: reviewText
    }

    const formData = new FormData()
    formData.append('selfie', selfiePhoto)
    formData.append('reviewBody', JSON.stringify(reviewBody))

    const saveReviewUrl = `${siteConfig.api.baseUrl}/save-review`

    auth.getCurrentUser().then(user => {
      user.getIdToken(true).then(token => {
        return fetch(saveReviewUrl, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: formData
        })
          .then(response => response.json())
          .then(() => {
            handleSetSyncMessage('💪 Review saved!')
            dispatchFormAction({ type: 'emptyReviewForm' })
            dispatchPortalAction({ type: 'toggleMessageDialog' })
            dispatchPortalAction({
              type: 'setMessageDialogMessage',
              value: `💪 Thank you so much for leaving a review. If I have questions, I'll email you... if you left your email. Also pay attention to your email because you'll get special offers as a reviewer of the app. Thank you again. It means a lot!`
            })
            handleToggleSync()
          })
          .catch(() => {
            handleSetSyncMessage('😢 Review not saved.')
            dispatchPortalAction({ type: 'toggleMessageDialog' })
            dispatchPortalAction({
              type: 'setMessageDialogMessage',
              value: `😢 Noooo... it looks like some network issues casused your review to not save. I didn't clear your answers so do you mind submitting your form again? Thanks and if you keep getting an error... let me know!`
            })
            handleToggleSync()
          })
      })
    })
  }

  return (
    <StarRatingForm onSubmit={handleReviewSubmit}>
      <FormLabel>Review:</FormLabel>
      <StarRating />
      <TextInput
        type="text"
        name="firstName"
        labelName="name:"
        labelFor="firstName"
        labelInstructions="Only your first name..."
        labelError="At least 2 characters..."
        value={formState.firstNameValue.value}
        valid={formState.firstNameValue.valid}
        initial={formState.firstNameOptions.initial}
        touched={formState.firstNameOptions.touched}
        showInstructions={formState.firstNameOptions.showInstructions}
        onChange={updateInputValues}
        onFocus={updateInputOptions}
        onBlur={updateInputOptions}
      />
      <ReviewWhyEmail />
      <TextInput
        type="text"
        name="emailAddress"
        labelName="email:"
        labelFor="emailAddress"
        labelInstructions="Enter email (optional)..."
        labelError="Use a valid email address..."
        value={formState.emailValue.value}
        valid={formState.emailValue.valid}
        initial={formState.emailOptions.initial}
        touched={formState.emailOptions.touched}
        showInstructions={formState.emailOptions.showInstructions}
        onChange={updateInputValues}
        onFocus={updateInputOptions}
        onBlur={updateInputOptions}
      />
      <ReviewGuidelines />
      <TextArea
        name="leaveReview"
        labelName="Leave review"
        labelFor="leaveReview"
        labelInstructions="Be specific!"
        labelError="Where's the review?"
        value={formState.reviewValue.value}
        valid={formState.reviewValue.valid}
        initial={formState.reviewOptions.initial}
        touched={formState.reviewOptions.touched}
        showInstructions={formState.reviewOptions.showInstructions}
        onChange={updateInputValues}
        onFocus={updateInputOptions}
        onBlur={updateInputOptions}
      />
      <ReviewWhySelfie />
      <FileUpload
        name="reviewSelfie"
        valid={formState.reviewSelfieImage.valid}
        updateInputValues={updateInputValues}
      />
      {formState.reviewSelfieImage.fileName ? (
        <ShowUploadedImage file={formState.reviewSelfieImage.file} />
      ) : null}
      <BaseButton type="submit">Send Review</BaseButton>
    </StarRatingForm>
  )
}

export default ReviewForm

const StarRatingForm = styled.form`
  margin: 40px 0 0 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;
  width: 100%;
  ${above.mobile`
    width: 70%;
  `}
  ${above.tablet`
    width: 60%;
  `}
  ${above.ipadPro`
    width: 50%;
  `}
`

const FormLabel = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 28px;
  color: ${props => props.theme.mainBackgroundBorderColor};
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.1rem;
`

const StarRating = styled(ReviewStars)`
  width: 300px;
`
