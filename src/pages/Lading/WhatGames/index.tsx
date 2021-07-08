import * as S from './styles';

import Fade from 'react-reveal/Fade'

const megasena = '/images/GamesImage/megasena-logo.png';
const lotofacil = '/images/GamesImage/lotofacil-logo.png';
const quina = '/images/GamesImage/quina-logo.png';
const lotomania = '/images/GamesImage/lotomania-logo.png';
const timemania = '/images/GamesImage/timemania-logo.png';

const WhatGames = () => {
    return (
        <S.Container id="WhatGames">
            <S.Content>
                <Fade left>
                    <S.TitleContent>
                        <S.Title>
                            Quais jogos trabalhamos <strong>atualmente</strong>
                        </S.Title>
                    </S.TitleContent>
                    <S.CardsContainer>
                        <S.CardsContentMega>
                            <S.CardImageMega>
                                <img src={megasena} alt="megasena" />
                            </S.CardImageMega>
                            <S.TextContent>
                                <S.TitleCard>
                                    Mega-Sena
                                </S.TitleCard>
                                <S.TextCard>
                                    Para apostar você escolhe de 6 a 15 números, entre os 60 disponíveis no volante.
                                </S.TextCard>
                            </S.TextContent>
                        </S.CardsContentMega>

                        <S.CardsContentFacil>
                            <S.CardImageFacil>
                                <img src={lotofacil} alt="lotofacil" />
                            </S.CardImageFacil>
                            <S.TextContent>
                                <S.TitleCard>
                                    Lotofácil
                                </S.TitleCard>
                                <S.TextCard>
                                    Você pode marcar de 15 a 20 números, entre os 25 disponíveis no volante.
                                </S.TextCard>
                            </S.TextContent>
                        </S.CardsContentFacil>

                        <S.CardsContentQuina>
                            <S.CardImageQuina>
                                <img src={quina} alt="quina" />
                            </S.CardImageQuina>
                            <S.TextContent>
                                <S.TitleCard>
                                    Quina
                                </S.TitleCard>
                                <S.TextCard>
                                    Você aposta de 5 a 15 números, entre os 80 disponíveis, e concorre a prêmios de valores grandiosos.
                                </S.TextCard>
                            </S.TextContent>
                        </S.CardsContentQuina>

                        <S.CardsContentMania>
                            <S.CardImageMania>
                                <img src={lotomania} alt="lotomania" />
                            </S.CardImageMania>
                            <S.TextContent>
                                <S.TitleCard>
                                    Lotomania
                                </S.TitleCard>
                                <S.TextCard>
                                    Na Lotomania, você escolhe 50 números e ganha se acertar 15, 16, 17, 18, 19, 20 ou nenhum número.
                                </S.TextCard>
                            </S.TextContent>
                        </S.CardsContentMania>

                        <S.CardsContentTime>
                            <S.CardImageTime>
                                <img src={timemania} alt="timemania" />
                            </S.CardImageTime>
                            <S.TextContent>
                                <S.TitleCard>
                                    Timemania
                                </S.TitleCard>
                                <S.TextCard>
                                    São oitenta números e oitenta clubes de futebol, você escolhe dez números e um time do coração.
                                </S.TextCard>
                            </S.TextContent>
                        </S.CardsContentTime>

                    </S.CardsContainer>
                </Fade>
            </S.Content>
        </S.Container>
    );
}

export default WhatGames;