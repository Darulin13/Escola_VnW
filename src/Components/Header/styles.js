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
    @media(max-width:962px){
        width:15%;
        padding-top:20px;
      }
      @media(max-width:678px){
        width:25%;
        padding-left:20px;
      }
      @media(max-width:467px){
        width:30%;
      }

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
    font-family: 'Montserrat', sans-serif;
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

    @media(max-width:1046px){
        width:85%;
     
    }
  
`
export const Title = styled.h1`
    color:#FFAC2D;
    font-size:80px;
    padding-bottom:40px;
    line-height:100px;
    font-family: 'Montserrat', sans-serif;
    @media(max-width:1727px){
        font-size:50px;
    }
    @media(max-width:1335px){
        font-size:40px;
    }
    @media(max-width:1046px){
        font-size:18px;
        line-height:35px;
    }


`
export const Box = styled.div`
    background-color:#FFFFFF;
    border:none;
    border-radius:10px;
    width:50%;
    padding-bottom:50px;
    padding-top:50px;
    padding-left:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:start;

    h2{
        color:#00145D;
        font-size:2.7vw;
        font-family: 'Montserrat', sans-serif;
        padding-bottom:20px;
        border-top:10px solid #00145D;
        border-radius:3%;
        padding-top:20px;
        @media(max-width:1727px){
            font-size:25px;
        }
        @media(max-width:1335px){
            font-size:20px;
        }
        @media(max-width:1046px){
            font-size:15px;
        }
    }
    p{
        font-size:1.8vw;
        font-family: 'Montserrat', sans-serif;

        @media(max-width:425px){
            font-size:2.8vw;
        }
      
    }
    
    @media(max-width:1848px){
        width:65%;
    }
    @media(max-width:1046px){
        width:90%;
    }

`
export const Link = styled.p`
    color:#FED5B2;
    font-size:30px;
    font-weight:bold;
    font-family: 'Montserrat', sans-serif;
    padding-bottom:300px;
    padding-top:30px;
    a{
        color:#FED5B2;
        font-size:30px;
        text-decoration:none;
        @media(max-width:1727px){
            font-size:25px;
        }
        @media(max-width:1335px){
            font-size:20px;
        }
        @media(max-width:1046px){
            font-size:15px;
        }
    }

    @media(max-width:1727px){
        font-size:25px;
    }
    @media(max-width:1335px){
        font-size:20px;
    }
    @media(max-width:1046px){
        font-size:15px;
    }
`
export const Bolas = styled.div`
    width:14%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:start;
    padding-bottom:1vw;
    @media(max-width:768px){
        width:25%;
      }
 
`
export const Bola = styled.div`
    border:solid #00145D;
    border-radius:50%;
    width:20%;
    background-color:#00145D;
`

