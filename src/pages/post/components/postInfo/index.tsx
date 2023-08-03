import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import { Link } from 'react-router-dom'

import githubLogo from '../../../../assets/github-logo.svg'
import calendarIcon from '../../../../assets/calendar.svg'
import commentsIcon from '../../../../assets/comments.svg'
import { PostInfoContainer } from './styles'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <header>
        <Link to="/">
          <CaretLeft size={12} weight="bold" />
          voltar
        </Link>
        <a href="#">
          ver no github <ArrowSquareOut size={12} weight="bold" />
        </a>
      </header>
      <h4>JavaScript data types and data structures</h4>
      <footer>
        <div>
          <img src={githubLogo} alt="" />
          cameronwll
        </div>
        <div>
          <img src={calendarIcon} alt="" />
          Há 1 dia
        </div>
        <div>
          <img src={commentsIcon} alt="" />5 comentários
        </div>
      </footer>
    </PostInfoContainer>
  )
}
