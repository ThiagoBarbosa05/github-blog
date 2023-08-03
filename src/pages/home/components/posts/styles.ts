import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const PostsContainer = styled.section`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`

export const PostCard = styled(Link)`
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  text-decoration: none;
  border: 2px solid transparent;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.875rem;
    line-height: 1.6;

    h4 {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.25rem;
      width: 70%;

      font-weight: 700;
      max-width: 16rem;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
    }
  }

  p {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6;
  }

  &:hover {
    transition: border 0.5s;
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`
