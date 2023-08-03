import { styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  margin-top: 0.75rem;

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
