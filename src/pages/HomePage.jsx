import React, { useEffect, useState, useCallback } from 'react'
import marvelApi from '../services/marvelApi'
import '../styles/HomePage.scss'
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { selectComic } from '../redux/selectComicActions'
import CardComic from '../components/CardComic'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Spinner from '../components/Spinner';

const HomePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comics, setComics] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        marvelApi.get('./comics')
            .then((res) => {
                setComics(res.data.data.results)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    const loadMoreComics = useCallback(async () => {
        try {
            const offset = comics.length

            const res = await marvelApi.get('/comics', {
                params: { offset }
            })

            setComics([...comics, ...res.data.data.results])
        } catch (err) {
            console.log(err);
        }
    }, [comics])


    function goToDetails(comic) {
        dispatch(selectComic(comic));
        history.push('/details')
    }

    return (
        <div className='container'>
            {loading === true ? <Spinner /> : null}

            <div className='container-cards'>
                {
                    comics.map(comic => {
                        return (
                            <CardComic
                                key={comic.id}
                                onClick={() => goToDetails(comic)}
                                card_image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                card_image_alt={comic.title}
                            />
                        )
                    })
                }
            </div>

            {loading === false ?
                <button
                    onClick={loadMoreComics}
                    className='container-button'
                >
                    <AiOutlinePlusCircle size='25px' /> Ver mais...
                </button>
                :
                null
            }
        </div>
    )
}

export default HomePage
