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
import { useFormStore } from '../../context/FormContext'
import useFormControls from '../../hooks/useFormControls'
import { above } from '../../styles/Theme'

const ReviewForm = () => {
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()

  const handleReviewSubmit = event => {
    event.preventDefault()

    console.log(`Stars: ${formState.starRatingValue.value}`)
    console.log(`First Name: ${formState.firstNameValue.value}`)
    console.log(`Email: ${formState.emailValue.value}`)
    console.log(`Review: ${formState.reviewValue.value}`)
    console.log(formState.reviewSelfieImage.file)
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
      <FileUpload />
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
