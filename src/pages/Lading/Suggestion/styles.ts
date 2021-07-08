import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    padding-left: 130px;
    padding-right: 130px;
    padding-bottom: 45px;
    background: rgba(229, 229, 229, 0.5);

    @media screen and (max-width: 768px) {
        padding-left: 35px;
        padding-right: 35px;
        background: #FFF;
    }
`;

export const Content = styled.div `
    /* height: 100vh; */
`;

export const Card = styled.div `
    background-color: #FFF;
    border-radius: 50px;
    display: flex;

    @media screen and (max-width: 768px) {
        border-radius: none;
        flex-direction: column;
    }
`;

export const TextContent = styled.div `
    padding-left: 110px;
    padding-right: 110px;
    padding-top: 50px;
    padding-bottom: 50px;

    @media screen and (max-width: 768px) {
        padding-left: 0px;
        padding-right: 0px;
    }
`;

export const Text = styled.div `
    font-size: 13px;
    font-weight: 600;
    color: #E91E63;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {

    }
`;

export const Title = styled.div `
    width: 514px;
    font-size: 47px;

    @media screen and (max-width: 768px) {
        width: none;
        font-size: 25px;
    }
`;

export const ButtonEmailContainer = styled.div`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        justify-content: center;
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