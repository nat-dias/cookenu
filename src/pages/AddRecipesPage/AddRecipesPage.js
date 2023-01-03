import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import './styled.css'

export const AddRecipesPage = () => {
    useProtectedPage()
    return (
        <h1>AddRecipesPage</h1>
    )
}