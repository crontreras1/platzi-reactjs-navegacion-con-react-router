import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { blogData } from './blogData'
import { useAuth } from './auth'

function BlogPost () {
    const navigate = useNavigate()
    const { slug } = useParams()

    const auth = useAuth()

    const blogPost = blogData.find(post => post.slug === slug)

    const canDelete = auth.user?.isAdmin || blogPost.author === auth.user?.username

    const returnToBlog = () => {
        navigate('/blog')
    }

    return (
        <>
            <h2>{ blogPost.title }</h2>

            <p>{ blogPost.author }</p>
            
            <p>{ blogPost.content }</p>

            <button
                onClick={ returnToBlog }
            >
                Atras
            </button>

            { canDelete && (
                <button>Editar Post</button>
            )}
        </>
    )
}

export { BlogPost }