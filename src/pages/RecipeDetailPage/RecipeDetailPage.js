import React from 'react'
import {useProtectedPage} from '../../hooks/useProtectedPage'

import './styled.css'

export const RecipeDetailPage= () => {
    useProtectedPage()
    return (
        <h1>RecipeDetailPage</h1>
    )
}