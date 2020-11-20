import React from 'react'
import styled from 'styled-components'
import { pizzaRed } from '../styles/colors'
import {Title} from '../styles/title'

const NavbarStyled = styled.div`
    background-color: ${pizzaRed};
    padding: 10px;
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