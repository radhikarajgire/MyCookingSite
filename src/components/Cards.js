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
                        <CardItem src='images/img-9.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='To The Reciepe'
                        path='/services'
                        />
                        <CardItem src='images/img-2.jpg'
                      text='Travel through the Islands of Bali in a Private Cruise'
                      label='To the Reciepe'
                       path='/services'
                        />
                        <CardItem
                      src='images/img-2.jpg'
                      text='Travel through the Islands of Bali in a Private Cruise'
                      label='To the Reciepe'
                      path='/services'
                        />
                        <CardItem
                    src='images/img-2.jpg'
                    text='Travel through the Islands of Bali in a Private Cruise'
                    label='To the Reciepe'
                    path='/services'
                        />
                        <CardItem
                    src='images/img-2.jpg'
                    text='Travel through the Islands of Bali in a Private Cruise'
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
