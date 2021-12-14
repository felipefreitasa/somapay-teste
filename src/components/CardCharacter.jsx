import React from 'react'
import '../styles/CardCharacter.scss'

const CardCharacter = ({ card_character_image, card_character_name }) => {
    return (
        <div className='card-character'>
            <img
                src={card_character_image}
                alt={card_character_name}
                className='card-character__image'
            />

            <p className='card-character__name'>
                {card_character_name}
            </p>

        </div>
    )
}

export default CardCharacter
