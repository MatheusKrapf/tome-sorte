import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-left: 130px;
    padding-right: 130px;
    background: rgba(233, 30, 99, 0.1);

    @media screen and (max-width: 768px) {
        padding-left: 42px;
        padding-right: 42px;
    }
`;

export const Content = styled.div`
    /* height: 100vh; */
`;

export const NoLimits = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 70px;


    font-size: 13px;
    font-weight: 600;
    color: #E91E63;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
        padding-top: 50px;
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    
    font-size: 47px;
    font-weight: 300;

    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
`;

export const CardsContainer = styled.div`
    padding-top: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 70px;

    @media screen and (max-width: 768px) {
        gap: 35px;
    }
`;

export const CardsContent = styled.div`
    width: 315px;
`;

export const CheckImage = styled.div``;

export const TitleCard = styled.div`
    font-family: 'Roboto', sans-serif;
    padding-top: 20px;
    font-size: 17px;
    font-weight: 700;
`;

export const TextCard = styled.div`
    padding-top: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 63px;
    padding-bottom: 70px;

    @media screen and (max-width: 768px) {
        padding-top: 50px;
        padding-bottom: 50px;
    }
`;

export const ButtonDownload = styled.a`
    background-color: #E91E63;
    border: none;
    border-radius: 57px;
    
    padding: 13px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    color: #FFF;
    text-decoration: none;

    &:hover { 
        background-color: #d9215f;
        transition: 0.2s;
    }
`;