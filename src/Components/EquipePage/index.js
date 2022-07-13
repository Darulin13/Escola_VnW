import React, { useState } from "react";
import * as S from "./styles";
import Aline from "./Equipe/photo1.jpg"
import Dimitri from "./Equipe/photo2.jpg"
import Luzia from "./Equipe/photo3.jpg"
import Paula from "./Equipe/photo4.jpg"
import AlineN from "./Equipe/photo5.jpg"
import Hugo from "./Equipe/photo6.jpg"
import Mariana from "./Equipe/photo7.jpg"
import Priscila from "./Equipe/photo8.jpg"
import Andrea from "./Equipe/photo9.jpg"
import Karla from "./Equipe/photo10.jpg"
import Marina from "./Equipe/photo11.jpg"
import Thais from "./Equipe/photo12.jpg"
import Cris from "./Equipe/photo13.jpg"
import Karynne from "./Equipe/photo14.jpg"
import Marlon from "./Equipe/photo15.jpg"
import Lupa from "../Images/pageview_black_24dp@2x.png"


export default class EquipePage extends React.Component {
    state = {
        dadosdaEquipe: [
            {
                img: Dimitri,
                nome: "Dimitri Duque",
                cargo: "#voluntários",
            },
            {

                img: Hugo,
                nome: "Hugo Sabino",
                cargo: "#voluntários",

            },
            {

                img: Karla,
                nome: "Karla De Melo",
                cargo: "#voluntários",

            },
            {

                img: Paula,
                nome: "Paula Misan",
                cargo: "#voluntários",

            },
            {

                img: Thais,
                nome: "Thais Brait",
                cargo: "#voluntários",

            },
            {

                img: Aline,
                nome: "Aline Fróes",
                cargo: "#CEO",

            },
            {

                img: AlineN,
                nome: "Aline Nogueira",
                cargo: "#Agente Socioemocional",

            },
            {

                img: Andrea,
                nome: "Andrea Marinho",
                cargo: "#Psicóloga",

            },
            {

                img: Cris,
                nome: "Cris Dos Prazeres",
                cargo: "#Coordernadora Executiva",

            },
            {

                img: Karynne,
                nome: "Karynne Moreira",
                cargo: "#Facilitadora Técnica",

            },
            {

                img: Luzia,
                nome: "Luzia Merlim",
                cargo: "#Agente Socioemocional",

            },
            {

                img: Mariana,
                nome: "Mariana Correia",
                cargo: "#Coordernadora Administrativa",

            },
            {

                img: Marina,
                nome: "Marina Tiago",
                cargo: "#Agente Estratégia",

            },
            {

                img: Marlon,
                nome: "Marlon Yuri",
                cargo: "#Instrutor Técnico",
            },
            {

                img: Priscila,
                nome: "Priscila Tufani",
                cargo: "#Agente Estratégia",
            },
        ],
        FilterNomes: []
    }
    //Lógica da barra de pesquisa


    Search = (event) => {
        const { dadosdaEquipe } = this.state
        const filter = dadosdaEquipe.filter((item) => {
            if (item.nome.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())) {
                return true
            }
        })
        this.setState({
            dadosdaEquipe: filter
        })

    }


    render() {
        return (
            <S.Container>
                <S.Section>
                    <S.Title>Equipe</S.Title>
                    <S.BlueBackground>
                        <S.Pesquisa>
                             <S.Input type="text" placeholder="Pesquisar..." onChange={this.Search}/>
                        <S.Lupa src={Lupa} alt="Lupa"/>
                        </S.Pesquisa>
                       
                    </S.BlueBackground>
                    <S.Box>
                        {this.state.dadosdaEquipe.map((item) => (
                            <S.Text>
                                <S.Img src={item.img} alt={item.nome} />
                                <div>
                                    <h2>{item.nome}</h2>
                                    <p>{item.cargo}</p>
                                </div>
                            </S.Text>


                        ))}
                    </S.Box>
                </S.Section>
            </S.Container>
        )
    }

}





