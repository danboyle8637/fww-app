// Rem Converter 16px = 1rem
const getRems = pixelWidth => {
  const baseSize = 16
  return pixelWidth / baseSize
}

const createDate = timestamp => {
  const day = timestamp.getDate()
  const month = timestamp.getMonth()
  const fullYear = timestamp.getFullYear()

  const twoDigitYear = Number(
    fullYear
      .toString()
      .split(0)
      .pop()
  )

  const dateString = `${month}/${day}/${twoDigitYear}`

  return dateString
}

export { getRems, createDate }
