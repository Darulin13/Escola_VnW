import styled from "styled-components";

export const Container = styled.main`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
//FormaçãoPage

export const Section = styled.section`
   width:100%;
   display:flex;
   flex-direction:row;
   justify-content:space-between;
   align-items:center;
   @media(max-width:802px){
    flex-direction:column;
   }
`

export const Img = styled.img`
    width:45%;
    @media(max-width:2116px){
        width:50%;
       }
    @media(max-width:802px){
        width:80%;
       }
`
export const Text_Box = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    @media(max-width:802px){
        width:100%;
       }
`
export const Box = styled.div`
    width:70%;
   display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:start;
    @media(max-width:1326px){
        width:80%;
       }
`
export const Title = styled.h1`
    font-size:58px;
    color:#0F2260;
    padding-bottom:20px;
    align-self:start;
    padding-left:180px;
    @media(max-width:1783px){
        padding-left:130px;
      
       }
    @media(max-width:1326px){
        font-size: 39px;
       }
    @media(max-width:802px){
        padding-bottom:40px;
        padding-left:0px;
        align-self:center;
        font-size:48px;
       }
`
export const Icon = styled.img` 
    width:18%;
`
export const Text  = styled.article`
    width:78%;
`
export const Subtitle = styled.h2`
    font-size:38px;
    color:#0F2260;
    padding-bottom:15px;
    @media(max-width:1724px){
        font-size: 30px;
    }
    
    @media(max-width:1326px){
        font-size: 20px;
       }

    @media(max-width:802px){
        font-size:28px;
       }
`
export const Paragraph = styled.p`
    font-size: 30px;
    padding-bottom:30px;
    @media(max-width:1996px){
        font-size: 25px;
    }
    @media(max-width:1724px){
        font-size: 20px;
    }
    
    @media(max-width:1326px){
        font-size: 15px;
       }
    @media(max-width:1326px){
        font-size: 15px;
       }
    
    @media(max-width:768px){
        font-size: 18px;
       }
`