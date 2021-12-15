import React from 'react'
import '../styles/Header.scss'
import MarvelLogo from '../assets/marvel-logo.png'
import { useHistory } from 'react-router-dom'
import { firebase } from '../services/firebase'
import { BiLogOut } from 'react-icons/bi';

const Header = ({ userName, userEmail }) => {
    const history = useHistory()

    const SignOut = () => {
        firebase.auth().signOut()
    }

    return (
        <header className='header'>
            <img
                className='header-logo'
                src={MarvelLogo}
                alt="Marvel Logo"
                onClick={() => history.push('/')}
            />

            {userName ? (
                <div className='header-content'>

                    <div className='header-content__user__info'>
                        <p className='header-content__username'>
                            {userName}
                        </p>

                        <p className='header-content__userEmail'>
                            {userEmail}
                        </p>
                    </div>

                    <button
                        className='header-content__button'
                        onClick={SignOut}
                    >
                        <BiLogOut size='25px'/>
                    </button>
                </div>
            )
                :
                null
            }

        </header>
    )
}

export default Header
