import { Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/Loading/Loadin'
import { BASE_URL } from '../../constants/url'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useRequestData } from '../../hooks/useRequestData'

import './styled.js'
import { RecipeContainer, RecipeImage, ScreenContainer } from './styled.js'

export const RecipeDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const recipe = useRequestData({}, `${BASE_URL}/recipe/${params.id}`)


    return (
        <ScreenContainer>
            {recipe ?
                <RecipeContainer>
                    <RecipeImage src={recipe.imageUrl} />
                    <Typography
                        gutterBottom
                        align={'center'}
                        variant={'h4'}
                        color={'primary'}
                    >
                        {recipe && recipe.title}
                    </Typography>

                    <Typography
                        align={'justify'}
                    >
                        {recipe && recipe.description}
                    </Typography>
                </RecipeContainer>
                :
                <Loading />    
            }
        </ScreenContainer>
    )
}