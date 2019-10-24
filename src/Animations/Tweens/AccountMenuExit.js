import { TweenMax, Linear } from 'gsap/TweenMax'

const AccountMenuExit = node => {
  TweenMax.fromTo(
    node,
    0.3,
    {
      x: 0,
      autoAlpha: 1
    },
    {
      x: -300,
      autoAlpha: 0,
      ease: Linear.easeNone
    }
  )
}

export default AccountMenuExit
