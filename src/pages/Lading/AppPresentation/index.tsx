import * as S from './styles';

import Fade from 'react-reveal/Fade';

const phoneQuina = '/images/AppPresentationImage/4s.png';
const phonesMega = '/images/AppPresentationImage/33.png';

const AppPresentation = () => {
    return (
        <S.Container>
            <S.Content>
                <Fade left>
                <S.KnowWichNumbers>
                    <S.SmartphoneImage>
                        <img src={phoneQuina} alt="phoneQuina" />
                    </S.SmartphoneImage>
                    
                    <S.TextContainer>
                        <S.SearchGame>
                            PESQUISE SEU JOGO FAVORITO
                        </S.SearchGame>
                        <S.Title>
                            Saiba quais números foram <strong>sorteados</strong>
                        </S.Title>
                        <S.TextContent>
                            <S.Text>
                                Não sabe qual é o valor do próximo concurso? Nós disponibilizamos para você!
                            </S.Text>
                            <S.ButtonContainer>
                                <S.ButtonDownload
                                    target="_blank" 
                                    rel="noreferrer" 
                                    href="https://play.google.com/store/apps/details?id=br.com.pyxisdev.tomesorte"
                                >
                                        Baixar aplicativo
                                    </S.ButtonDownload>
                            </S.ButtonContainer>
                        </S.TextContent>
                    </S.TextContainer>
                </S.KnowWichNumbers>
                </Fade>

                <Fade right>
                    <S.WeProvide>
                        <S.TextContainerSecond>
                            <S.AlwaysBe>
                                Sempre esteja atualizado
                            </S.AlwaysBe>
                            <S.TitleSecond>
                                Nós disponibilizamos resultados <strong>diariamente</strong>
                            </S.TitleSecond>
                            <S.TextSecondContent>
                                <S.TextSecond>
                                    Você pode escolher quais jogos que queira ficar por dentro, 
                                    disponibilizamos um sistema de notificações diária!
                                </S.TextSecond>
                                <S.ButtonContainerSecond>
                                    <S.ButtonDownload
                                        target="_blank" 
                                        rel="noreferrer" 
                                        href="https://play.google.com/store/apps/details?id=br.com.pyxisdev.tomesorte"
                                    >
                                        Baixar aplicativo
                                    </S.ButtonDownload>
                                </S.ButtonContainerSecond>
                            </S.TextSecondContent>
                        </S.TextContainerSecond>
                        <S.SmartphoneImageTwo>
                            <img src={phonesMega} alt="phonesMega" />
                        </S.SmartphoneImageTwo>
                    </S.WeProvide>
                </Fade>

            </S.Content>
        </S.Container>
    );

}

export default AppPresentation;