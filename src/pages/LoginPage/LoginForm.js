import React, { useState } from 'react'
import { InputsContainer } from './styled'
import { Button, CircularProgress, TextField } from '@mui/material'
import { useForm } from '../../hooks/useForm'
import { login } from '../../services/user'
import { useNavigate } from 'react-router-dom'


export const LoginForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm({ email: '', password: '' })
    const navigate = useNavigate()
    const [isLoading, setIsloading] = useState(false)

    const onSubmitForm = (e) => {
        e.preventDefault()
        login(form, clear, navigate, setRightButtonText, setIsloading)
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={'outlined'}
                    fullWidth
                    margin={'dense'}
                    required
                    type={'email'}
                />

                <TextField
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={'outlined'}
                    fullWidth
                    margin={'dense'}
                    required
                    type={'password'}
                />

                <Button
                    type={'submit'}
                    fullWidth
                    variant={'contained'}
                    color={'primary'}
                    margin={'dense'}
                >
                    {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Fazer login</>}                    
                </Button>
            </form>
        </InputsContainer>
    )
}