import React from 'react'
import { InputsContainer } from './styled'
import { Button, TextField } from '@mui/material'
import { useForm } from '../../hooks/useForm'

export const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: '', password: '' })

    const onSubmitForm = (e) => {
        e.preventDefault()
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
                    margin={'normal'}
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
                    margin={'normal'}
                    required
                    type={'password'}
                />

                <Button
                    type={'submit'}
                    fullWidth
                    variant={'contained'}
                    color={'primary'}
                    margin={'normal'}
                >
                    Fazer login
                </Button>
            </form>
        </InputsContainer>
    )
}