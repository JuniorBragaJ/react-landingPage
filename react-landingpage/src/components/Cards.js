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
                        src="images/img-2.jpg"
                        text="Direito civil"
                        label="Serviços"
                        path="/services"
                        />
                        <CardItem
                        src="images/img-9.jpg"
                        text="Direito administrativo"
                        label="Serviços"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                    <CardItem
                        src="images/img-1.jpg"
                        text="Direito ambiental"
                        label="Serviços"
                        path="/services"
                        />
                        <CardItem
                        src="images/img-4.jpg"
                        text="Direito do consumidor"
                        label="Serviços"
                        path="/services"
                        />
                        <CardItem
                        src="images/img-5.jpg"
                        text="Direito contratual"
                        label="Serviços"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;