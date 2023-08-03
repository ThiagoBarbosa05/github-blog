import avatar from '../../../../assets/avatar.png'
import githubLogo from '../../../../assets/github-logo.svg'
import buildLogo from '../../../../assets/build.svg'
import followers from '../../../../assets/followers.svg'
import { ArrowSquareOut } from 'phosphor-react'
import { Description, ProfileContainer, ProfileContentInfo } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={avatar} alt="" />
      <ProfileContentInfo>
        <header>
          <h2>Cameron Williamson</h2>
          <a href="#">
            GITHUB <ArrowSquareOut size={12} weight="bold" />
          </a>
        </header>
        <Description>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Description>
        <footer>
          <span>
            <img src={githubLogo} alt="" />
            cameronwll
          </span>
          <span>
            <img src={buildLogo} alt="" />
            Rocketseat
          </span>
          <span>
            <img src={followers} alt="" />
            32 seguidores
          </span>
        </footer>
      </ProfileContentInfo>
    </ProfileContainer>
  )
}
