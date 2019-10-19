import React, { useRef } from 'react'

import { reviewStarAni, resetStars } from '../Animations/Tweens/reviewStar'
import { useFormStore } from '../context/FormContext'

const ReviewStars = ({ width, height, className }) => {
  const star1Ref = useRef(null)
  const star2Ref = useRef(null)
  const star3Ref = useRef(null)
  const star4Ref = useRef(null)
  const star5Ref = useRef(null)

  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()

  const handleFillInStar = value => {
    const star1 = star1Ref.current
    const star2 = star2Ref.current
    const star3 = star3Ref.current
    const star4 = star4Ref.current
    const star5 = star5Ref.current

    if (value === 1) {
      if (formState.starRatingValue.value > 1) {
        resetStars([star1, star2, star3, star4, star5])
        reviewStarAni([star1])
      } else {
        reviewStarAni([star1])
      }

      dispatchFormAction({
        type: 'setStarRatingValue',
        value: 1
      })
    }

    if (value === 2) {
      if (formState.starRatingValue.value > 2) {
        resetStars([star1, star2, star3, star4, star5])
        reviewStarAni([star1, star2])
      } else {
        reviewStarAni([star1, star2])
      }

      dispatchFormAction({
        type: 'setStarRatingValue',
        value: 2
      })
    }

    if (value === 3) {
      if (formState.starRatingValue.value > 3) {
        resetStars([star1, star2, star3, star4, star5])
        reviewStarAni([star1, star2, star3])
      } else {
        reviewStarAni([star1, star2, star3])
      }

      dispatchFormAction({
        type: 'setStarRatingValue',
        value: 3
      })
    }

    if (value === 4) {
      if (formState.starRatingValue.value > 4) {
        resetStars([star1, star2, star3, star4, star5])
        reviewStarAni([star1, star2, star3, star4])
      } else {
        reviewStarAni([star1, star2, star3, star4])
      }

      dispatchFormAction({
        type: 'setStarRatingValue',
        value: 4
      })
    }

    if (value === 5) {
      reviewStarAni([star1, star2, star3, star4, star5])
      dispatchFormAction({
        type: 'setStarRatingValue',
        value: 5
      })
    }
  }

  return (
    <svg
      id="review-page-stars"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 194.66 55.88"
    >
      <path
        ref={star1Ref}
        onMouseEnter={() => handleFillInStar(1)}
        onClick={() => handleFillInStar(1)}
        id="star-one"
        fill="#19191C"
        stroke="#101010"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M18.79 1.5l5.34 10.82 11.94 1.74-8.64 8.42 2.04 11.9-10.68-5.62L8.1 34.38l2.04-11.9-8.64-8.42 11.94-1.74L18.79 1.5z"
      />
      <path
        ref={star2Ref}
        onMouseEnter={() => handleFillInStar(2)}
        onClick={() => handleFillInStar(2)}
        id="star-two"
        fill="#19191C"
        stroke="#101010"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M58.06 1.5l5.34 10.82 11.94 1.74-8.64 8.42 2.04 11.9-10.68-5.62-10.68 5.62 2.03-11.9-8.64-8.42 11.95-1.74L58.06 1.5z"
      />
      <path
        ref={star3Ref}
        onMouseEnter={() => handleFillInStar(3)}
        onClick={() => handleFillInStar(3)}
        id="star-three"
        fill="#19191C"
        stroke="#101010"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M97.33 1.5l5.34 10.82 11.95 1.74-8.65 8.42 2.04 11.9-10.68-5.62-10.68 5.62 2.04-11.9-8.64-8.42 11.94-1.74L97.33 1.5z"
      />
      <path
        ref={star4Ref}
        onMouseEnter={() => handleFillInStar(4)}
        onClick={() => handleFillInStar(4)}
        id="star-four"
        fill="#19191C"
        stroke="#101010"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M136.6 1.5l5.34 10.82 11.95 1.74-8.64 8.42 2.04 11.9-10.69-5.62-10.68 5.62 2.04-11.9-8.64-8.42 11.94-1.74L136.6 1.5z"
      />
      <path
        ref={star5Ref}
        onMouseEnter={() => handleFillInStar(5)}
        onClick={() => handleFillInStar(5)}
        id="star-five"
        fill="#19191C"
        stroke="#101010"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M175.88 1.5l5.34 10.82 11.94 1.74-8.64 8.42 2.04 11.9-10.68-5.62-10.69 5.62 2.04-11.9-8.64-8.42 11.94-1.74 5.35-10.82z"
      />
    </svg>
  )
}

export default ReviewStars
