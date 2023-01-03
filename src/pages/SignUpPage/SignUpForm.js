import React from 'react'
import { InputsContainer } from './styled'
import { Button, TextField } from '@mui/material'
import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../services/user'

export const SignUpForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm({ name: '', email: '', password: '' })
    const navigate = useNavigate()

    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log(form)
        signUp(form, clear, navigate, setRightButtonText)
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
                    Cadastrar
                </Button>
            </form>
        </InputsContainer>
    )
}