import React from 'react'
import { useAuth } from '../auth'

function ProfilePage () {
    const auth = useAuth()

    return (
        <h1>Welcome, { auth.user.username }</h1>
    )
}

export { ProfilePage }