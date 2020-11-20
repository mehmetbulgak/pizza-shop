import React from 'react'
import styled from 'styled-components'
import { pizzaRed } from '../styles/colors'
import { Title } from '../styles/title'

const NavbarStyled = styled.div`
    background-color: ${pizzaRed};
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 9999;
`

const Logo = styled(Title)`
    font-size: 20px;
    color: white;
`

export function Navbar() {
    return <NavbarStyled>
        <Logo>
            LoL kere LoL 🍕
        </Logo>
    </NavbarStyled>
}