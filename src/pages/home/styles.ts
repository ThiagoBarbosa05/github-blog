import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  padding-inline: 1rem;
`

export const NumberOfPublications = styled.div`
  width: 100%;
  margin-top: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.6;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    line-height: 1.6;
  }
`
