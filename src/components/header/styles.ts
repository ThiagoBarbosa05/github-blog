import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background-image: linear-gradient(to top, #0b1b2b, #071422, #040f1a);
  height: 18.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: -1;

  img {
    margin-bottom: 4rem;
  }

  div {
    position: absolute;
    inset: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      margin-bottom: initial;

      @media (max-width: 780px) {
        width: 40%;
      }
    }
  }
`
