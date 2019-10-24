import React from 'react'
import { Transition } from 'react-transition-group'

import AccountMenuEnter from '../Tweens/AccountMenuEnter'
import AccountMenuExit from '../Tweens/AccountMenuExit'
import AccountUpdateFormsEnter from '../Tweens/AccountUpdateFormsEnter'
import AccountUpdateFormsExit from '../Tweens/AccountUpdateFormsExit'

const UpdateAccountFormTransition = ({
  showNode,
  reverse,
  children,
  isAccountMenu = false
}) => {
  const handleEnter = node => {
    if (isAccountMenu) {
      AccountMenuEnter(node)
    } else {
      AccountUpdateFormsEnter(node)
    }
  }

  const handleExit = node => {
    if (isAccountMenu) {
      AccountMenuExit(node)
    } else {
      AccountUpdateFormsExit(node)
    }
  }

  return (
    <Transition
      in={showNode}
      timeout={500}
      enter={true}
      exit={true}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={node => handleEnter(node)}
      onExit={node => handleExit(node)}
    >
      {children}
    </Transition>
  )
}

export default UpdateAccountFormTransition
