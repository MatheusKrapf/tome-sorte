import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-left: 140px;
  padding-right: 140px;
  background: rgba(229, 229, 229, 0.5);

  @media screen and (max-width: 768px) {
    padding-left: 34px;
    padding-right: 34px;
  }
`

export const Content = styled.div`
  /* height: 100vh; */
  max-width: 1200px;
  margin: 0 auto;
`

export const KnowWichNumbers = styled.div`
  display: flex;
`

export const SmartphoneImage = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    left: -22px;
    top: 2833px;

    img {
      width: 251px;
      height: 355px;
    }
  }
`

export const TextContainer = styled.div``

export const SearchGame = styled.div`
  padding-top: 123px;
  font-size: 13px;
  font-weight: 600;
  color: #e91e63;

  @media screen and (max-width: 768px) {
    text-align: center;
    padding-top: 50px;
  }
`

export const SmartphoneImageTwo = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    right: 0;
    top: 3345px;

    img {
      width: 142.92px;
      height: 277px;
    }
  }
`

export const Title = styled.div`
  width: 499px;
  font-size: 47px;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 25px;
    text-align: center;
  }
`

export const TextContent = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
`

export const Text = styled.div`
  padding-top: 40px;
  width: 315px;
  font-size: 14px;
  line-height: 28px;
  opacity: 0.6;

  @media screen and (max-width: 768px) {
    width: 174px;
  }
`

export const ButtonContainer = styled.div`
  padding-top: 40px;
`

export const ButtonDownload = styled.a`
  background-color: #e91e63;
  border: none;
  border-radius: 57px;

  padding: 13px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  color: #fff;
  text-decoration: none;

  &:hover {
    background-color: #d9215f;
    transition: 0.2s;
  }
`

export const WeProvide = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 140px;
  padding-bottom: 70px;

  @media screen and (max-width: 768px) {
    padding-bottom: 117px;
  }
`

export const TextContainerSecond = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 514px;
`

export const AlwaysBe = styled.div`
  padding-top: 153px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  color: #e91e63;

  @media screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`

export const TitleSecond = styled.div`
  font-size: 47px;
  font-weight: 300;
  text-align: end;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    text-align: center;
  }
`

export const TextSecondContent = styled.div`
  width: 315px;
`

export const TextSecond = styled.div`
  text-align: end;
  padding-top: 40px;
  font-size: 14px;
  line-height: 28px;
  opacity: 0.6;

  @media screen and (max-width: 768px) {
    width: 188px;
    text-align: start;
  }
`

export const ButtonContainerSecond = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
  }
`
