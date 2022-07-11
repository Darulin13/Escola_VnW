import React from "react"
import * as S from "./styles";
import Face from "../Images/facebook.png"
import Insta from "../Images/insta.png"
import Linkedin from "../Images/linkrdin.png"
import Medium from "../Images/medium.png"
import Youtube from "../Images/youtub.png"
export default function Footer (){
    const SocialMedias = ()=>{
        return(
            <S.Section>
                <S.Paragraph>Siga nossas redes sociais e fique conectado com todas as novidades.</S.Paragraph>
                <S.Nav>
                    <S.Icon src={Face} alt="Facebook Icon"/>
                    <S.Icon src={Insta} alt="Instagram Icon"/>
                    <S.Icon src={Linkedin} alt="Linkedin Icon"/>
                    <S.Icon src={Medium} alt="Medium Icon"/>
                    <S.Icon src={Youtube} alt="Youtube Icon"/>
                </S.Nav>
            </S.Section>
        )
    }
    return(
        <S.Container>
        <S.Title>Contato</S.Title>
            {SocialMedias()}
        </S.Container>
    )
}