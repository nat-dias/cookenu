import React from 'react'
import { AddRecipeFormContainer, InputsContainer } from './styled'
import { Button, TextField } from '@mui/material'
import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { createRecipe } from '../../services/recipe'


export const AddRecipesForm = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({title: '', description: '', imageUrl: ''})

    const onSubmitForm = (e) => {
        e.preventDefault()
        createRecipe(form, clear, navigate)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <AddRecipeFormContainer>
                <InputsContainer>
                    <TextField
                        name={'title'}
                        value={form.title}
                        onChange={onChange}
                        label={"Título"}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        autoFocus
                    />

                    <TextField
                        name={'description'}
                        value={form.description}
                        onChange={onChange}
                        label={"Descrição"}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        autoFocus
                    />

                    <TextField
                        name={'imageUrl'}
                        value={form.imagrUrl}
                        onChange={onChange}
                        label={"Url da imagem"}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        autoFocus
                    />

                    <Button
                        type={'submit'}
                        fullWidth
                        variant={'contained'}
                        color={'primary'}
                        margin={'20px'}
                    >
                        Adicionar receita
                    </Button>
                </InputsContainer>
            </AddRecipeFormContainer>
        </form>
    )
}