import * as S from './styles'

import Fade from 'react-reveal/Fade'

const Suggestion = () => {
  return (
    <S.Container>
      <S.Content>
        <Fade top>
          <S.Card>
            <S.TextContent>
              <S.Text>Deseja ver uma nova feature?</S.Text>
              <S.Title>
                Nos mande uma <strong>sugestão</strong> =D
              </S.Title>
            </S.TextContent>
            <S.ButtonEmailContainer>
              <S.ButtonDownload href="mailto:teste@teste.com?subject=Hello%20again">
                Enviar sugestão via email
              </S.ButtonDownload>
            </S.ButtonEmailContainer>
          </S.Card>
        </Fade>
      </S.Content>
    </S.Container>
  )
}

export default Suggestion
