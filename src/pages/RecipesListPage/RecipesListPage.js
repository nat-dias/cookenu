import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { RecipeCard } from '../../components/RecipeCard.js/RecipeCard'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'
import { AddRecipeButton, RecipesListContainer } from './styled'
import { Add } from '@mui/icons-material'
import { goToAddRecipes } from '../../routes/cordinator'
import { useNavigate } from 'react-router-dom'

export const RecipesListPage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    const recipes = useRequestData([], `${BASE_URL}/recipe/all`)
    console.log(recipes)

    const onclickCard = () => {

    }

    const recipesCards = recipes.map((recipe) => {
        return (
            <RecipeCard
                key={recipe.id}
                title={recipe.title}
                image={recipe.imageUrl}
                onClick={() => null}
            />
        )
    })
    return (
        <RecipesListContainer>
            {recipesCards}
            <AddRecipeButton
                color={'primary'}
                onClick={() => goToAddRecipes(navigate)}
            >
                <Add />
            </AddRecipeButton>
        </RecipesListContainer>

    )
}