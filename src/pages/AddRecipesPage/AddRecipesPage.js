import { Typography } from '@mui/material'
import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { AddRecipesForm } from './AddRecipesForm'
import { RecipeContainer, ScreenContainer } from './styled.js'

export const AddRecipesPage = () => {
    useProtectedPage()
    return (
        <ScreenContainer>
                <RecipeContainer>
                    <Typography
                        gutterBottom
                        align={'center'}
                        variant={'h4'}
                        color={'textPrimary'}
                    >
                       Adicionar nova receita
                    </Typography>

                   <AddRecipesForm />
                </RecipeContainer>
        </ScreenContainer>
    )
}