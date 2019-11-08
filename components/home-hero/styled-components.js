import styled from 'styled-components'

export const HomeHeroBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f5;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const IntroHeading = styled.h1`
  width: 320px;
  padding: 32px 16px 16px;

  @media screen and (min-width: 768px) {
    padding: 0 0 0 32px;
  }
`

export const Avatar = styled.img`
  max-width: 150px;
`
