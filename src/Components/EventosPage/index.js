import React from "react";
import * as S from "./styles";
import Mural from "../Images/Grupo 11151@2x.png"
export default function EventosPage() {
    const Eventos = () => {
        return (
            <S.Section>
                <S.Title>Eventos</S.Title>
                <S.Box>
                    <S.Mural src={Mural} alt="Mural de estudantes do Vai na Web" />
                    <S.Text>
                        <S.Subtitle>Tech Girls</S.Subtitle>
                        <S.Paragraph>Com o objetivo de promover network entre mulheres de tecnologia, conectar talentos femininos com oportunidades no mercado da tecnologia, oferecer experiências de troca através de eventos com mulheres que já têm experiência no mercado da tecnologia, acelerar os talentos com ajuda para custeio de luz e internet para facilitar o processo de estudo, promover mentoria para as participantes do grupo.</S.Paragraph>
                    </S.Text>
                </S.Box>
            </S.Section>
        )
    }
    return (
        <S.Container>
            {Eventos()}
        </S.Container>
    )
}