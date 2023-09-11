import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { blogData } from './blogData'

function BlogPost () {
    const navigate = useNavigate()
    const { slug } = useParams()

    const blogPost = blogData.find(post => post.slug === slug)

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
        </>
    )
}

export { BlogPost }