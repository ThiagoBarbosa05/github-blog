import { styled } from 'styled-components'

export const ProfileContainer = styled.section`
  background: ${(props) => props.theme['base-profile']};
  margin-top: -5.5rem;
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0px 0px 15px ${(props) => props.theme['base-background']};

  img {
    border-radius: 8px;
    max-width: 9.25rem;
  }

  @media (max-width: 580px) {
    flex-direction: column;
  }
`

export const ProfileContentInfo = styled.div`
  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h2 {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.3;
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      font-size: 0.75rem;
    }
  }

  footer {
    padding-top: 1.5rem;
    color: ${(props) => props.theme['base-subtitle']};
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      line-height: 1.6;
    }

    img {
      width: 1.125rem;
    }
  }
`
export const Description = styled.p`
  color: ${(props) => props.theme['base-text']};
  line-height: 1.6;
`
