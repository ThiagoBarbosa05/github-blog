import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import { Link } from 'react-router-dom'

import githubLogo from '../../../../assets/github-logo.svg'
import calendarIcon from '../../../../assets/calendar.svg'
import commentsIcon from '../../../../assets/comments.svg'
import { PostInfoContainer } from './styles'

interface IPostInfoProps {
  title: string
  url: string
  user: { login: string }
  createdAt: string
  comments: number
}

export function PostInfo({
  title,
  url,
  user,
  createdAt,
  comments,
}: IPostInfoProps) {
  return (
    <PostInfoContainer>
      <header>
        <Link to="/">
          <CaretLeft size={12} weight="bold" />
          voltar
        </Link>
        <a href={url}>
          ver no github <ArrowSquareOut size={12} weight="bold" />
        </a>
      </header>
      <h4>{title}</h4>
      <footer>
        <div>
          <img src={githubLogo} alt="" />
          {user?.login}
        </div>
        <div>
          <img src={calendarIcon} alt="" />
          <time title={createdAt}>{createdAt}</time>
        </div>
        <div>
          <img src={commentsIcon} alt="" />
          {comments === 1
            ? `${comments} comentário`
            : `${comments} comentários`}
        </div>
      </footer>
    </PostInfoContainer>
  )
}
