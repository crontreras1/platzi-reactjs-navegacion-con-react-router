import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        // <nav>
        //     <ul>
        //         <li>
        //             <Link to='/'>Home</Link>
        //         </li>

        //         <li>
        //             <Link to='/blog'>Blog</Link>
        //         </li>

        //         <li>
        //             <Link to='/profile'>Profile</Link>
        //         </li>
        //     </ul>
        // </nav>

        // <nav>
        //     <ul>
        //         <li>
        //             <NavLink
        //                 style={({ isActive }) => ({
        //                     color: isActive ? 'green' : 'black'
        //                 })}
        //                 to='/'
        //             >
        //                 Home
        //             </NavLink>
        //         </li>

        //         <li>
        //             <NavLink
        //                 style={({ isActive }) => ({
        //                     color: isActive ? 'green' : 'black'
        //                 })}
        //                 to='/blog'
        //             >
        //                     Blog
        //             </NavLink>
        //         </li>

        //         <li>
        //             <NavLink
        //                 style={({ isActive }) => ({
        //                     color: isActive ? 'green' : 'black'
        //                 })}
        //                 to='/profile'
        //             >
        //                 Profile
        //             </NavLink>
        //         </li>
        //     </ul>
        // </nav>

        <nav>
            <ul>
                { routes.map(route => (
                    <li>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? 'green' : 'black'
                            })}
                            to={ route.to }
                        >
                            { route.text }
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

const routes = []

routes.push({
    to: '/',
    text: 'Home'
})

routes.push({
    to: '/blog',
    text: 'Blog'
})

routes.push({
    to: '/profile',
    text: 'Profile'
})

export { Menu }