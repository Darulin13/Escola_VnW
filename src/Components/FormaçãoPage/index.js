import React from "react"
import * as S from "./styles";
import Formação from "../Images/Formação.png"
import Icon from  "../Images/Icon.jpg"
export default function FormaçãoPage() {
    const FormaçãoPage = () => {
        return (
            <S.Section>
                <S.Text_Box>
                    <S.Title>Formação</S.Title>
                    <S.Box>
                    <S.Icon src={Icon} alt="Icon computador" />
                        <S.Text>
                            <S.Subtitle>FRONT-END</S.Subtitle>
                            <S.Paragraph>Quem trabalha com Front End é responsável por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da Web: HTML, CSS e JavaScript.</S.Paragraph>
                        </S.Text>
                    </S.Box>
                    <S.Box>
                        <S.Icon src={Icon} alt="Icon computador" />
                        <S.Text>
                            <S.Subtitle>BACK-END</S.Subtitle>
                            <S.Paragraph>O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo).</S.Paragraph>
                        </S.Text>
                    </S.Box>

                </S.Text_Box>
                <S.Img src={Formação} alt="Imagens de códigos de programação" />
            </S.Section>
        )
    }
    return (
        <S.Container>
            {FormaçãoPage()}
        </S.Container>
    )
}


