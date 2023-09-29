import React from 'react'
import Header from '../components/Header/Header'

export default function Layout({ children }) {
    return (
        <div className='space-y-10'>
            <Header />
            {children}
        </div>
    )
}

// props children