import React, { useState } from 'react'
import { InputsContainer } from './styled'
import { Button, CircularProgress, TextField } from '@mui/material'
import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../services/user'

export const SignUpForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm({ name: '', email: '', password: '' })
    const navigate = useNavigate()
    const [isLoading, setIsloading] = useState(false)

    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log(form)
        signUp(form, clear, navigate, setRightButtonText,setIsloading)
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    label={"Nome"}
                    variant={'outlined'}
                    fullWidth
                    required
                    autoFocus
                    margin={'dense'}
                />

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
                >
                    {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Cadastrar</>}            
                </Button>
            </form>
        </InputsContainer>
    )
}