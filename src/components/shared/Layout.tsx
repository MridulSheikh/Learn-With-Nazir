import React from 'react'
import Navigation from './Navigation'

function Layout({children}: any) {
  return (
    <div>
        <Navigation />
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout