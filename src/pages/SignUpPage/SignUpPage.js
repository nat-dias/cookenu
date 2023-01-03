import React from 'react'
import { LogoImage, ScreenContaier } from './styled'
import logo from '../../assets/logo.jpg'
import { SignUpForm } from './SignUpForm'
import {useUnprotectedPage} from '../../hooks/useUnprotectedPage'

export const SignUpPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    
    return (
        <ScreenContaier>
            <LogoImage src={logo} />
            <SignUpForm setRightButtonText={setRightButtonText}/>
        </ScreenContaier>
    )
}