import logo from '../../assets/logo.svg'
import effectLeft from '../../assets/effect-left.svg'
import effectRight from '../../assets/effect-right.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div>
        <img src={effectLeft} alt="" />
        <img src={effectRight} alt="" />
      </div>
    </HeaderContainer>
  )
}
