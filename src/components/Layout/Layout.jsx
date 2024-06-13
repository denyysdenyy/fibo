import React from 'react'
import Container from '../container/Container'

const Layout = ({children}) => {
  return (
    <main>
        <Container>{children}</Container>
    </main>
  )
}

export default Layout