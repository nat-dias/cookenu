import React from 'react'
import { LogoImage, ScreenContaier, SignUpButtonContainer } from './styled'
import logo from '../../assets/logo.jpg'
import { Button } from '@mui/material'
import { LoginForm } from './LoginForm'
import { useNavigate } from 'react-router-dom'
import { goToSignUp } from '../../routes/cordinator'

export const LoginPage = () => {
    const navigate = useNavigate()
    
    return (
        <ScreenContaier>
            <LogoImage src={logo} />
            <LoginForm />
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUp(navigate)}
                    type={'submit'}
                    fullWidth
                    variant={'text'}
                    color={'primary'}
                    margin={'normal'}
                >
                    Não possui conta? Cadastre-se!
                </Button>
            </SignUpButtonContainer>

        </ScreenContaier>
    )
}