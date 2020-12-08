import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out this epic reciepes</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src='images/img-1.jpg'
                        text='CRANBERRY WHITECHOCOLATE FUDGE'
                        label='To The Reciepe'
                        path='/services'
                        />
                        <CardItem src='images/img-2.jpg'
                      text=' NO BAKE CHOCOLATE FUDGE – 3 INGREDIENTS ONLY!'
                      label='To the Reciepe'
                       path='/services'
                        />
                        <CardItem
                      src='images/img-3.jpeg'
                      text='VANILLA SPONGE CAKE – FLUFFY TEA CAKE RECIPE!'
                      label='To the Reciepe'
                      path='/services'
                        />
                        
                        </ul>
                          <ul className="cards__items">
                          <CardItem
                    src='images/img-4.jpeg'
                    text='LEBANEESE OLIVE PIZZA RECIPE'
                    label='To the Reciepe'
                    path='/services'
                        />
                        <CardItem
                    src='images/img-5.jpg'
                    text='EGGLESS VANILLA SPONGE CAKE RECIPE'
                    label='To the Reciepe'
                    path='/services'
                        />


                    
               
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
