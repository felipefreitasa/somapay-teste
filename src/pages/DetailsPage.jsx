import React, { useLayoutEffect, useState } from 'react'
import { useSelector } from "react-redux";
import marvelApi from '../services/marvelApi'
import { useHistory } from "react-router-dom";
import '../styles/DetailsPage.scss'
import CardCharacter from '../components/CardCharacter';

const DetailsPage = () => {
    const history = useHistory();
    const [selectedComic] = useSelector((state) => state.selectedComic);
    const [characters, setCharacters] = useState([]);

    useLayoutEffect(() => {
        if (!selectedComic) {
            history.push("/");
        } else {
            async function getCharacters() {
                const res = await marvelApi.get(`/comics/${selectedComic.id}/characters`);
                setCharacters(res.data.data.results);
            }
            getCharacters();
        }
    }, [history, selectedComic]);

    return (
        <div className='comic-details' >

            <img
                src={`${selectedComic?.thumbnail.path}.${selectedComic?.thumbnail.extension}`}
                alt={selectedComic?.title}
                className='comic-details__thumbnail'
            />

            <div className="comic-details__content">
                <p className='comic-details__title'>
                    {selectedComic?.title}
                </p>

                <p className='comic-details__description'>
                    {selectedComic?.description}
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
