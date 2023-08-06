/* eslint-disable camelcase */
import githubLogo from '../../../../assets/github-logo.svg'
import buildLogo from '../../../../assets/build.svg'
import followers from '../../../../assets/followers.svg'
import { ArrowSquareOut } from 'phosphor-react'
import { Description, ProfileContainer, ProfileContentInfo } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/api'

interface TUserProfileInfo {
  avatar_url: string
  bio: string
  company: string
  followers: number
  html_url: string
  login: string
  name: string
}

export function Profile() {
  const [user, setUser] = useState<TUserProfileInfo>()

  const fetchUser = async () => {
    const response = await api.get('users/ThiagoBarbosa05')
    // eslint-disable-next-line camelcase
    const { avatar_url, bio, company, followers, html_url, login, name } =
      response.data
    const userInfo = {
      avatar_url,
      bio,
      company,
      followers,
      html_url,
      login,
      name,
    }

    setUser(userInfo)
  }

  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <ProfileContainer>
      <img src={user?.avatar_url} alt="" />
      <ProfileContentInfo>
        <header>
          <h2>{user?.name}</h2>
          <a href={user?.html_url} target="_blank" rel="noreferrer">
            GITHUB <ArrowSquareOut size={12} weight="bold" />
          </a>
        </header>
        <Description>{user?.bio}</Description>
        <footer>
          <span>
            <img src={githubLogo} alt="" />
            {user?.login}
          </span>

          {user?.company && (
            <span>
              <img src={buildLogo} alt="" />
              Rocketseat
            </span>
          )}
          <span>
            <img src={followers} alt="" />
            {user?.followers !== 0
              ? `${user?.followers} seguidores`
              : '32 seguidores'}
          </span>
        </footer>
      </ProfileContentInfo>
    </ProfileContainer>
  )
}
