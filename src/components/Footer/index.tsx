import * as S from './styles'

import Fade from 'react-reveal/Fade'

import { Link } from 'react-scroll'

const ball = '/img/Footer/ball.png'
const qrcode = '/img/Footer/qrcode.png'
const versatil = '/img/Footer/versatil.png'

const date = new Date()

const Footer = () => {
  return (
    <S.Container>
      <S.Content>
        <S.BallImage>
          <img src={ball} alt="ball" />
        </S.BallImage>
        <S.HelpContainer>
          <Fade left>
            <S.TextContent>
              <S.Text>Nos ajude a crescer</S.Text>
              <S.Title>
                Baixe nosso aplicativo na loja do <strong>google play</strong>
              </S.Title>
              <S.ButtonDownload
                target="_blank"
                rel="noreferrer"
                href="https://play.google.com/store/apps/details?id=br.com.pyxisdev.tomesorte"
              >
                Baixar aplicativo agora
              </S.ButtonDownload>
            </S.TextContent>
          </Fade>

          <S.SendContainer>
            <Fade right>
              <S.SendText>Nos envie um Pix</S.SendText>
              <S.QrImage>
                <img src={qrcode} alt="qrcode" />
              </S.QrImage>

              <S.KeyButton href="/">Copiar chave Pix</S.KeyButton>

              <S.ScrollContent>
                <Link to="HeroBanner" smooth={true} duration={1000}>
                  <S.ScrollTop></S.ScrollTop>
                </Link>

                <S.TextBack>Voltar ao topo</S.TextBack>
              </S.ScrollContent>
            </Fade>
          </S.SendContainer>
        </S.HelpContainer>

        <S.BottomContainer>
          <S.Line></S.Line>
          <S.CopyrightContainer>
            <S.CopyrightText>
              Todos os direitos reservados - {date.getFullYear()}
            </S.CopyrightText>
            <S.VersatilLogo>
              <img src={versatil} alt="versatil" />
            </S.VersatilLogo>
          </S.CopyrightContainer>
        </S.BottomContainer>
      </S.Content>
    </S.Container>
  )
}

export default Footer
