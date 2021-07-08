import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-left: 130px;
    padding-right: 130px;
    background: rgba(0, 0, 0, 0.95);
    color: #FFF;
    position: relative;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Content = styled.div`
    /* height: 100vh; */
`;

export const BallImage = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
`;

export const HelpContainer = styled.div`
    padding-top: 150px;
    display: flex;
    justify-content: space-between;
`;

export const TextContent = styled.div``;

export const Text = styled.div`
    font-size: 13px;
    text-transform: uppercase;
`;

export const Title = styled.div`
    width: 514px;
    font-size: 47px;
    font-weight: 300;
    padding-bottom: 30px;

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

export const SendContainer = styled.div`
    
`;

export const SendText = styled.div`
    text-align: end;
    text-transform: uppercase;
`;

export const QrImage = styled.div`
    padding-bottom: 22px;
    padding-top: 15px;

    display: flex;
    justify-content: flex-end;
`;

export const KeyButton = styled.a`
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

export const ScrollContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    /* position: absolute; */
    /* right: 16px; */

    position: relative;
    right: -157px;
    top: -16px;
`;

export const ScrollTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    position: relative;
    padding: 5px;
    /* padding-bottom: 15px; */
    background: #000;
    height: 50px;
    width: 50px;
    border-radius: 10px;;
    transition: all 0.2s linear;

    &:hover {
        transform: translate3d(0, -10px, 0);
    }

    &:after {
        content: "";
        position: relative;
        top: 7px;
        z-index: 11;
        display: block;
        width: 25px;
        height: 25px;
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
        transform: rotate(46deg)
 
    }
`;

export const TextBack = styled.div`
    padding-top: 15px;
    text-transform: uppercase;

    font-size: 9px;
`;

export const Line = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const CopyrightContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BottomContainer = styled.div`
    /* padding-top: 60px; */
`;

export const CopyrightText = styled.div`
    padding-top: 25px;
    font-size: 9px;
`;

export const VersatilLogo = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
`;