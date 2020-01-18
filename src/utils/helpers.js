// Rem Converter 16px = 1rem
const getRems = pixelWidth => {
  const baseSize = 16
  return pixelWidth / baseSize
}

const createDate = timestamp => {
  const day = timestamp.getDate()
  // Remember months and days of week are zero index based
  const month = timestamp.getMonth() + 1
  const fullYear = timestamp.getFullYear()

  const twoDigitYear = Number(fullYear.toString().slice(0, -2))

  const dateString = `${month}/${day}/${twoDigitYear}`

  return dateString
}

const updateWorkoutsCompleteInLocalStorage = (programId, key) => {
  let programIndex

  const localStorageProgramData = localStorage.getItem(key)
  const programsData = JSON.parse(localStorageProgramData)

  const programPercentComplete = programsData.percentComplete.find(
    (program, index) => {
      programIndex = index
      return program.programId === programId
    }
  )

  const workoutsComplete = programPercentComplete.workoutsCompleted

  const updatedProgramPercentComplete = {
    ...programPercentComplete,
    workoutsCompleted: workoutsComplete + 1
  }

  programsData.percentComplete[programIndex] = updatedProgramPercentComplete

  localStorage.setItem(key, JSON.stringify(programsData))
}

export { getRems, createDate, updateWorkoutsCompleteInLocalStorage }
