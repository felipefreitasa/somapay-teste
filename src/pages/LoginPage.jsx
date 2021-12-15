import React from 'react'
import '../styles/LoginPage.scss'
import { firebase } from '../services/firebase'
import LoginBanner from '../assets/login-banner.jpg'
import MarvelLogo from '../assets/marvel-logo.png'
import { BsGoogle } from 'react-icons/bs';

const Login = () => {

    const SignInWithGoogle = () => {
        var google_provider = new firebase.auth.GoogleAuthProvider()

        try {
            firebase.auth().signInWithPopup(google_provider)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='login'>
            <img
                className='login-banner'
                src={LoginBanner}
                alt="Spider man reading a comic book"
            />

            <div className='login-content'>
                <img
                    className='login-content__logo'
                    src={MarvelLogo}
                    alt="Marvel Logo"
                />

                <h1 className='login-content__title'>
                    Olá, seja bem-vindo(a)
                </h1>

                <p className='login-content__paragraph'>
                    Faça seu login para continuar
                </p>

                <button
                    className='login-content__button'
                    onClick={SignInWithGoogle}
                >
                    <BsGoogle /> Entrar com Google
                </button>
            </div>

        </div>
    )
}

export default Login
