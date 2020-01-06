import React from 'react'
import { useParams } from 'react-router-dom'

import { useProgramsContext } from '../context/ProgramsContext'

const ResetProductPage = () => {
  // eslint-disable-next-line
  const [programsState, dispatchProgramsAction] = useProgramsContext()
  const params = useParams()

  const program = programsState.notPurchasedPrograms.find(
    program => program.programId === params.programId
  )

  console.log(program)

  return <div>This is going to be the product page.</div>
}

export default ResetProductPage
