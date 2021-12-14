import React from 'react'
import '../styles/CardComic.scss'

const CardComic = ({ card_image, card_image_alt, onClick }) => {
    return (
        <div
            className='card-comic'
            onClick={onClick}
            data-aos="fade-down"
        >
            <img
                className='card-comic__image'
                src={card_image}
                alt={card_image_alt}
            />

            <div className='card-comic__info'>
                <p>{card_image_alt}</p>
            </div>
        </div>
    )
}

export default CardComic
