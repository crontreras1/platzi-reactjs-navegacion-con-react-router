import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../auth'

const Menu = () => {
    const auth = useAuth()

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
                { routes.map(route => {
                    if (route.private && !auth.user) return null
                    if (route.text === 'Login' && auth.user) return null

                    return (
                        <li
                            key={ route.to }
                        >
                            <NavLink
                                style={({ isActive }) => ({
                                    color: isActive ? 'yellow' : 'black'
                                })}
                                to={ route.to }
                            >
                                { route.text }
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

const routes = []

routes.push({
    to: '/',
    text: 'Home',
    private: false
})

routes.push({
    to: '/blog',
    text: 'Blog',
    private: false
})

routes.push({
    to: '/profile',
    text: 'Profile',
    private: true
})

routes.push({
    to: '/login',
    text: 'Login',
    private: false
})

routes.push({
    to: '/logout',
    text: 'Logout',
    private: true
})

export { Menu }