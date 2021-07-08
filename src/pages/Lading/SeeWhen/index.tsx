import * as S from './styles';

import Fade from 'react-reveal/Fade';

const check = '/images/SeeImage/check-circle.png';

const SeeWhen = () => {
    return (
        <S.Container>
            <S.Content>
                <Fade left>
                    <S.NoLimits>
                        Não Tenha Limites
                    </S.NoLimits>
                    <S.Title>
                    <p><strong>Consulte</strong> quando quiser</p>
                    </S.Title>

                    <S.CardsContainer>
                        <S.CardsContent>
                            <S.CheckImage>
                                <img src={check} alt="check" />
                            </S.CheckImage>
                            <S.TitleCard>
                                Acesso offline
                            </S.TitleCard>
                            <S.TextCard>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Integer dignissim, velit vel pretium.
                            </S.TextCard>
                        </S.CardsContent>

                        <S.CardsContent>
                            <S.CheckImage>
                                <img src={check} alt="check" />
                            </S.CheckImage>
                            <S.TitleCard>
                                Desabilitar notificações
                            </S.TitleCard>
                            <S.TextCard>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Integer dignissim, velit vel pretium.
                            </S.TextCard>
                        </S.CardsContent>

                        <S.CardsContent>
                            <S.CheckImage>
                                <img src={check} alt="check" />
                            </S.CheckImage>
                            <S.TitleCard>
                                Gratuito
                            </S.TitleCard>
                            <S.TextCard>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Integer dignissim, velit vel pretium.
                            </S.TextCard>
                        </S.CardsContent>
                    </S.CardsContainer>

                    <S.ButtonContainer>
                        <S.ButtonDownload
                            target="_blank" 
                            rel="noreferrer" 
                            href="https://play.google.com/store/apps/details?id=br.com.pyxisdev.tomesorte"
                        >
                            Baixar aplicativo agora
                        </S.ButtonDownload>
                    </S.ButtonContainer>
                </Fade>

            </S.Content>
        </S.Container>
    );
}

export default SeeWhen;