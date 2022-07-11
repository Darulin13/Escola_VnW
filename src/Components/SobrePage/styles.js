import styled from "styled-components";

export const Container = styled.main`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
//SobrePage

export const Section = styled.section`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    padding-top:110px;
    padding-bottom:130px;
    @media(max-width: 1024px){
        flex-direction:column-reverse;
    }
`
export const Logo = styled.img`
    width:20%;

    @media(max-width:2296px){
        width:25%;
    }
    @media(max-width: 1024px){
        width:50%;
     
    }
`
export const Text = styled.div`
    width:60%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    @media(max-width: 1024px){
        width:90%;
        padding-bottom:60px;
      
    }
    
`

export const Title = styled.h1`
    font-size:58px;
    color:#0F2260;
    padding-bottom:25px;

    @media(max-width:600px){
        font-size:30px;
    }
    
`
export const Paragraph = styled.p`
    font-size:35px;
    color:#000000;
     text-align:start;
     padding-bottom:25px;
     @media(max-width:1824px){
        font-size:25px;
    }
    @media(max-width:516px){
        font-size:15px;
    }
`



