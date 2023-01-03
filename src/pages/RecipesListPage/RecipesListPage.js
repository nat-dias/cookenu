import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'

import './styled.css'

export const RecipesListPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>RecipesListPage</h1>
        </div>
    )
}