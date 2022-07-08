import styled from "styled-components";
import background from "../Images/Background.png"
export const Container = styled.header`
width:100%;
background-image:URL(${background});
background-repeat:no-repeat;
background-size: cover;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

@media(max-width:1721px){
    background-size: contain;
}
@media(max-width:1073px){
    background-size: cover;
}
`
//Navegation Page
export const NavBar = styled.nav`
    width:80%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    align-self:start;
    @media(max-width:2196px){
        width:80%;
    }
    @media(max-width:1452px){
        width:90%;
    }
`
export const Logo = styled.img`
    width:10%;
    padding-left:50px;
    padding-top:10px;

`
export const Ul = styled.ul`
    width:70%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    padding-top:20px;
    @media(max-width:2196px){
        width:70%;
    }
    @media(max-width:768px){
      display:none;
    }
`
export const Li = styled.li`
    list-style:none;
    color:#FFFFFF;
    font-size:30px;
    border:solid transparent 2px ;
    transition:all .2s linear;
    cursor:pointer;
    border-radius:20px;
    padding-left:25px;
    padding-right:25px;
    @media(max-width:1452px){
        font-size:18px;
    }
    &:hover {
        border:solid 2px #FFAC2D ;
      }
    
`


//Title Page

export const Section = styled.section`

    width:75%;
    padding-top:100px;
  
`
export const Title = styled.h1`
    color:#FFAC2D;
    font-size:80px;
    padding-bottom:40px;
    line-height:100px;
    @media(max-width:1727px){
        font-size:50px;
    }
    @media(max-width:1335px){
        font-size:40px;
    }


`
export const Box = styled.div`
    background-color:#FFFFFF;
    border:solid black;
    width:50%;
    padding-bottom:50px;
    padding-top:50px;
    @media(max-width:1848px){
        width:65%;
    }

`
export const Link = styled.p`
    color:#FED5B2;
    font-size:30px;
    font-weight:bold;
    padding-bottom:300px;
    padding-top:30px;

    @media(max-width:1727px){
        font-size:25px;
    }
    @media(max-width:1335px){
        font-size:20px;
    }
    
   
`