import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Areas de atuação</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/direito-civil.jpg"
                        text="Direito civil"
                        label="Serviços"
                        path="/services"
                        content="Nessa área, o advogado representa interesses individuais em casos relacionados à propriedade, bens ou questões familiares."
                        />
                        <CardItem
                        src="images/direito-administrativo.jpg"
                        text="Direito administrativo"
                        label="Serviços"
                        path="/services"
                        content="Trata de leis que regulamentam órgãos e poderes públicos, e sua relação com a sociedade."
                        />
                    </ul>
                    <ul className="cards__items">
                    <CardItem
                        src="images/direito-ambiental.jpg"
                        text="Direito ambiental"
                        label="Serviços"
                        path="/services"
                        content="Atua na proteção e na qualidade do meio ambiente, assim como em sua relação com o homem."
                        />
                        <CardItem
                        src="images/direito-consumidor.png"
                        text="Direito do consumidor"
                        label="Serviços"
                        path="/services"
                        content="Representa os cidadãos em direitos relacionados a fornecedores de bens e serviços."
                        />
                        <CardItem
                        src="images/direito-contratual.jpg"
                        text="Direito contratual"
                        label="Serviços"
                        path="/services"
                        content="Defende pessoas ou empresas na elaboração de contratos de vendas e compras de bens e serviços."
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;