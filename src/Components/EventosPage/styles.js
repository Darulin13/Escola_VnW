import styled from "styled-components";

export const Container = styled.section`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-bottom:10vw;
`
export const Section = styled.section`
    width:95%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
`
export const Title = styled.h1`
    font-size:58px;
    font-family: 'Montserrat', sans-serif;
    color:#0F2260;
    padding-left:7vw;
    @media(max-width:768px){
        padding-left:0vw;
        width:90%;
        font-size:10.5vw;
        padding-bottom:10px;
        padding-left:3vw;
    }
    
`
export const Box = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    @media(max-width:768px){
        flex-direction:column-reverse;
        
    }
`
export const Mural = styled.img`
    width:80%;
    @media(max-width:1776px){
        width:80%;
    }
    @media(max-width:1084px){
        width:74%;
    }
    @media(max-width:768px){
        width:95%;
    }
   
`
export const Text = styled.div`
    width:20%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    position:relative;
    right:100px;
    @media(max-width:1776px){
        width:18%;
    }
    @media(max-width:1326px){
        width:16%;
    }
    @media(max-width:1084px){
        width:18%;
    }
    @media(max-width:768px){
        width:90%;
        position: static;
    }

    
`
export const Subtitle = styled.h2`
    font-size:2.5vw;
    font-family: 'Montserrat', sans-serif;
    color:#0F2260;
    padding-bottom:2vw;
    @media(max-width:1776px){
        font-size:2vw;
    }
    @media(max-width:768px){
        font-size:5.5vw;
    }
   
`
export const Paragraph = styled.p`
    font-size:1vw;
    color:#000000;
    text-align:start;
    font-family: 'Montserrat', sans-serif;
    @media(max-width:1776px){
        font-size:1.05vw;
    }
    @media(max-width:768px){
        font-size:3vw;
        padding-bottom:10px;
    }
    
`