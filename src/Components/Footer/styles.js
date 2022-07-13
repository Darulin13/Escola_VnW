import styled from "styled-components";
import background from "../Images/FooterBackground.png"
export const Container = styled.footer`
    width:100%;
    background-image:URL(${background});
    background-repeat:no-repeat;
    background-size: cover;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:start;
    padding-left:200px;
    padding-bottom:150px;
    padding-top:30px;
    @media(max-width:922px){
        padding-left:100px;
    }
    @media(max-width:494px){
        align-items:center;
        padding-left:0px;
        padding-bottom:50px;
    }
`
//Navegation Page

export const Section = styled.section`
    width:50%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    
    @media(max-width:922px){
        width:90%;
        
    }
    @media(max-width:443px){
        width:70%;
        flex-direction:column;
    }
    
`



export const Paragraph = styled.p`
    width:35%;
    color:#FFFFFF;
    font-size:30px;
    font-family: 'Montserrat', sans-serif;
    @media(max-width:2105px){
        font-size:25px;
    }
    @media(max-width:1787px){
        font-size:16px;
    }
    @media(max-width:1216px){
        width:40%;
        font-size:13px;
    }
    @media(max-width:922px){
        width:40%;
        font-size:17px;
    }
    @media(max-width:648px){
        font-size:12px;
    }
    @media(max-width:443px){
        width:100%;
        padding-bottom:20px;
        font-size:15px;
        text-align:center;
    }
`


export const Nav = styled.nav`
    width:60%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    @media(max-width:1216px){
        width:55%;
    }
    @media(max-width:443px){
        width:85%;
    }

`

export const Icon = styled.img`
    width:15%;
    @media(max-width:922px){
        width:16%;
    }
   
`
export const Title = styled.h1`
    color:#FFFFFF;
    font-size:68px;
    font-family: 'Montserrat', sans-serif;
    padding-bottom:150px;
    padding-top:50px;
    @media(max-width:494px){
        padding-bottom:50px;
    }


`
