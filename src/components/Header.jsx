import React from 'react'
import '../styles/Header.scss'
import MarvelLogo from '../assets/marvel-logo.png'
import { useHistory } from 'react-router-dom'
import { firebase } from '../services/firebase'
import SignOutIcon from '../assets/logout-icon.png'

const Header = ({ userName, userEmail }) => {
    const history = useHistory()

    const SignOut = () => {
        firebase.auth().signOut()
    }

    return (
        <header className='header'>
            <img
                className='marvel-logo'
                src={MarvelLogo}
                alt="Marvel Logo"
                onClick={() => history.push('/')}
            />

            {userName ? (
                <div className='header__content'>

                    <div className='header__content__user__info'>
                        <p className='header__content__username'>
                            {userName}
                        </p>

                        <p className='header__content__userEmail'>
                            {userEmail}
                        </p>
                    </div>

                    <button
                        className='button-sign-out'
                        onClick={SignOut}
                    >
                        <img
                            className='button-sign-out__icon'
                            src={SignOutIcon}
                            alt="Sign Out Icon"
                        />
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
