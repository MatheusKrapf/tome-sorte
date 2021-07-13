import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;
  padding-left: 130px;
  padding-right: 130px;
  background: rgba(229, 229, 229, 0.5);
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding-left: 42px;
    padding-right: 42px;
  }
`

export const ContentRight = styled.div``

export const Background = styled.div`
  position: absolute;
  left: 0;
  z-index: 0;
  top: 0;

  @media screen and (max-width: 768px) {
    position: absolute;
    right: 0;

    overflow: hidden;
    background: #0c7dd4;

    > div {
      height: 100vh;
    }
  }
`

export const ZIndex = styled.div`
  position: relative;
  z-index: 4;
`

export const Logo = styled.div`
  padding-top: 70px;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 768px) {
    padding-top: 30px;
  }
`

export const Title = styled.div`
  padding-top: 50px;
  width: 77%;
  font-size: 35px;
  line-height: 45px;
  font-weight: 700;
  color: #fff;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    line-height: 32px;
    width: 311px;
  }
`

export const Text = styled.div`
  padding-top: 15px;
  color: #fff;
  font-size: 29px;
  font-weight: 300;
  width: 57%;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 100%;
  }
`

export const ButtonGooglePlayContainer = styled.div`
  padding-top: 58px;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 768px) {
    padding-top: 99px;
    padding-bottom: 168px;
  }
`

export const ButtonGooglePlay = styled.a``

export const ArrowCroll = styled.div`
  position: absolute;
  left: 50%;
  cursor: pointer;
  z-index: 2;

  transition: all 0.2s linear;

  &:hover {
    transform: translate3d(0, 10px, 0);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ArrowDown = styled.div`
  display: block;
  /* margin: 30px auto; */
  width: 30px;
  height: 30px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;

  transform: rotate(225deg);

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ContentLeft = styled.div``

export const SmartphoneImg = styled.div`
  position: relative;
  z-index: 2;

  @media screen and (max-width: 768px) {
    position: absolute;
    right: 0;
    top: 351px;

    img {
      width: 129px;
      height: 334px;
    }
  }
`
