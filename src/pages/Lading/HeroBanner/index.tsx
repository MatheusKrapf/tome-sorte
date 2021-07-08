import * as S from './styles';

import { Link } from 'react-scroll';

import Fade from 'react-reveal/Fade';

const background = '/images/HeroImages/background.png';
const logo = '/images/HeroImages/logo.png';
const btnGoogle = '/images/HeroImages/googleplay.png';
const smartphone = '/images/HeroImages/phone-hero.png'

const HeroBanner = () => {
    return (
        <S.Container id="HeroBanner">
            <Fade left>
                <S.ContentRight>
                    <S.Background>
                        <img src={background} alt="background" />
                    </S.Background>
                    
                        <S.Logo>
                            <img src={logo} alt="logo" />
                        </S.Logo>
                        <S.Title>QUE TAL TER UM SUPER APP EM SUAS MÃOS?</S.Title>
                        <S.Text>Acompanhe de forma rápida e fácil os resultados da loteria do Brasil</S.Text>
                        
                        <S.ButtonGooglePlayContainer>
                            <S.ButtonGooglePlay 
                                target="_blank" 
                                rel="noreferrer" 
                                href="https://play.google.com/store/apps/details?id=br.com.pyxisdev.tomesorte"
                            >
                                <img src={btnGoogle} alt="btnGoogle" />
                            </S.ButtonGooglePlay>
                        </S.ButtonGooglePlayContainer>
                    
                    
                    <S.ArrowCroll>
                        <Link to="WhatGames" smooth={true} duration={1000}>
                            <S.ArrowDown>
                            </S.ArrowDown>
                        </Link>
                    </S.ArrowCroll>
                </S.ContentRight>
            <S.ContentLeft>
                <S.SmartphoneImg>
                    <img src={smartphone} alt="smartphone" />
                </S.SmartphoneImg>
            </S.ContentLeft>
            </Fade>
        </S.Container>
    );
}

export default HeroBanner;