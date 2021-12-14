import React, { useLayoutEffect, useState } from 'react'
import { useSelector } from "react-redux";
import marvelApi from '../services/marvelApi'
import { useHistory } from "react-router-dom";
import '../styles/ComicDetails.scss'
import CardCharacter from '../components/CardCharacter';

const DetailsPage = () => {
    const history = useHistory();
    const [comics] = useSelector((state) => state.comics);
    const [characters, setCharacters] = useState([]);

    useLayoutEffect(() => {
        if (!comics) {
            history.push("/");
        } else {
            async function getCharacters() {
                const response = await marvelApi.get(`/comics/${comics.id}/characters`);
                setCharacters(response.data.data.results);
            }
            getCharacters();
        }

    }, [history, comics]);

    return (
        <div className='comic-details' >

            <img
                src={`${comics?.thumbnail.path}.${comics?.thumbnail.extension}`}
                alt={comics?.title}
                className='comic-details__thumbnail'
            />

            <div className="comic-details__content">
                <p className='comic-details__title'>
                    {comics?.title}
                </p>

                <p className='comic-details__description'>
                    {comics?.description}
                </p>

                {characters.length > 0 ?
                    <>
                        <p className='comic-details__characters'>Personagens principais:</p>

                        <div className='comic-details__characters__list'>
                            {characters.map((item, index) => {
                                return (
                                    <CardCharacter
                                        card_character_image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                        card_character_name={item.name}
                                        key={index}
                                    />
                                )
                            })}
                        </div>
                    </>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default DetailsPage
