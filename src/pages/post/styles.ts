import { styled } from 'styled-components'

export const PostContainer = styled.section`
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  padding-inline: 1rem;
`

export const PostDetailsContainer = styled.section`
  padding: 2.5rem 2rem;
  color: ${(props) => props.theme['base-text']};
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme['base-title']};
    margin-top: 1rem;
  }

  ul {
    margin: 1rem;
    border-bottom: 1px solid ${(props) => props.theme['base-post']};
    padding-bottom: 1rem;
  }

  li {
    margin-top: 0.5rem;
  }

  strong {
    color: ${(props) => props.theme['base-subtitle']};
  }

  img {
    width: 100%;
    margin-top: 2rem;
  }
`
