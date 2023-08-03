import { styled } from 'styled-components'

export const PostInfoContainer = styled.section`
  background: ${(props) => props.theme['base-profile']};
  margin-top: -5.5rem;
  padding: 2rem;
  border-radius: 8px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
    }
  }

  h4 {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
  }

  footer {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 2rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['base-span']};
      img {
        width: 1.124rem;
      }
    }
  }
`
