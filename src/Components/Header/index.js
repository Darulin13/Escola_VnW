import React from "react"
import * as S from "./styles";
import Logo from "../Images/Grupo 18@2x.png"

export default function Header() {
    const NavegationPage = () => {
        return (
            <S.NavBar>
                <S.Logo src={Logo} alt="Logo" />
                <S.Ul>
                    <S.Li>Sobre</S.Li>
                    <S.Li>Formação</S.Li>
                    <S.Li>Equipe</S.Li>
                    <S.Li>Eventos</S.Li>
                    <S.Li>Contatos</S.Li>
                </S.Ul>
            </S.NavBar>
        )
    }
    const TitlePage = () => {
        return (
            <S.Section>
                <S.Title>// Quer construir uma carreira de sucesso como Desenvolvedor(a) Front-end?</S.Title>
                <S.Box>
                    <h2>Inscreva-se no Vai na Web!</h2>
                    <p>Inscrições 02 a 21 de Agosto</p>
                </S.Box>
                <S.Link>Link para o formulário: bit.ly/CarreiraVaiNaWeb</S.Link>
            </S.Section>
        )
    }
    return (
        <S.Container>
            {NavegationPage()}
            {TitlePage()}
        </S.Container>
    )
}