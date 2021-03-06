import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    padding-left: 130px;
    padding-right: 130px;
    background: rgba(229, 229, 229, 0.5);

    @media screen and (max-width: 768px) {
        padding-left: 42px;
        padding-right: 42px;
    }
`;

export const Content = styled.div `
    /* height: 100vh; */
`;

export const TitleContent = styled.div `
    display: flex;
    justify-content: center;
    padding-top: 50px;
`;

export const Title = styled.div `
    font-size: 47px;
    line-height: 59px;
    font-weight: 300;
    width: 50%;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 25px;
        line-height: 31px;
        width: 100%;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 49px;
    align-items: flex-start;
    padding-top: 45px;
    padding-bottom: 24px;
`;

export const CardsContentMega = styled.div`
    display: flex;
    width: 329px;
    height: 151px;
    border: 1px solid rgba(0, 158, 76, 0.3);
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 15px;
`;

export const CardsContentFacil = styled.div`
    display: flex;
    width: 329px;
    height: 151px;
    border: 1px solid rgba(167, 52, 139, 0.3);
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 15px;
`;

export const CardsContentQuina = styled.div`
    display: flex;
    width: 329px;
    height: 151px;
    border: 1px solid rgba(66, 51, 139, 0.3);
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 15px;
`;

export const CardsContentMania = styled.div`
    display: flex;
    width: 329px;
    height: 151px;
    border: 1px solid rgba(243, 147, 35, 0.3);
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 15px;
`;

export const CardsContentTime = styled.div`
    display: flex;
    width: 329px;
    height: 151px;
    border: 1px solid rgba(0, 158, 76, 0.3);
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 15px;
`;

export const TextContent = styled.div`
    width: 233px;
`;

export const CardImageMega = styled.div`
    position: relative;
    left: -19px;
    top: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #009E4C;
    
    width: 50px;
    height: 50px;
    border: 1px solid #009E4C;
    border-radius: 10px;
`;

export const CardImageFacil = styled.div`
    position: relative;
    left: -19px;
    top: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #A7348B;
    
    width: 50px;
    height: 50px;
    border: 1px solid #A7348B;
    border-radius: 10px;
`;

export const CardImageQuina = styled.div`
    position: relative;
    left: -19px;
    top: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #42338B;
    
    width: 50px;
    height: 50px;
    border: 1px solid #42338B;
    border-radius: 10px;
`;

export const CardImageMania = styled.div`
    position: relative;
    left: -19px;
    top: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F39323;
    
    width: 50px;
    height: 50px;
    border: 1px solid #F39323;
    border-radius: 10px;
`;

export const CardImageTime = styled.div`
    position: relative;
    left: -19px;
    top: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFED00;
    
    width: 50px;
    height: 50px;
    border: 1px solid #FFED00;
    border-radius: 10px;
`;

export const TitleCard = styled.div`
    font-family: 'Roboto', sans-serif;
    padding-top: 17px;
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 700;
    color: #0C7ED4;
`;

export const TextCard = styled.div`
    padding-top: 5px;
    font-size: 14px;
    line-height: 28px;
`;