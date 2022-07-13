import styled from "styled-components";

export const Container = styled.section`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
//Equipe Page
export const Section = styled.section`
    width:81%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:start;

`

export const Title = styled.h1`
    font-size:58px;
    font-family: 'Montserrat', sans-serif;
    color:#0F2260;
    padding-bottom:2vw;
    @media(max-width:768px){
        font-size:10.5vw;
        
    }
    

`
export const BlueBackground = styled.div`
    background-color:#0F2260;
    width:100%;
    padding-top:2vw;
    padding-bottom:2vw;
    padding-left:5vw;
 
`
export const Input = styled.input`
    padding-top:0.3vw;
    padding-bottom:0.3vw;
    padding-right:1vw;
    font-size:1.5vw;
    background-color:#0F2260;
    border:solid 1px #FFFFFF;
    border-right:#0F2260;
    color:white;
    @media(max-width:768px){
       width:90%;
    }
    
    
`
//Box part

export const Box = styled.div`
  width:100%;
  display:grid;
  grid-template-columns:repeat(4,1fr) ;
  gap: 1vw;
  padding-top:2vw;
  padding-bottom:5vw;
  @media(max-width:768px){
    grid-template-columns:1fr ; 
  }
`
export const Img = styled.img`
    width:100%;
    z-index:0;
`
export const Text = styled.article`
    div{
    width:100%;
    position:relative;
    z-index:1;
    bottom:4vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media(max-width:768px){
        bottom:16vw;
      }
    h2{
        color:white;
        font-size:1.6vw;
        font-family: 'Montserrat', sans-serif;
        @media(max-width:768px){
            font-size:5vw;
          }
    }
    p{
        color:white;
        font-size:1vw;
        font-family: 'Montserrat', sans-serif;
        @media(max-width:768px){
            font-size:3vw;
          }
    }
}
`
export const Lupa = styled.img`
  width:10%;
  border:solid 1px #FFFFFF;
  border-left:none;
  
`
export const Pesquisa = styled.div`
    width:30%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    @media(max-width:768px){
        width:90%;
        
    }

  
`

