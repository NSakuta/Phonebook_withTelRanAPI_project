import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from './../store/app';

export default function Navigation() {

    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Nav>
                <HeaderLink>
                    <NavLink to='/' exact>Home</NavLink>
                </HeaderLink>
                <HeaderLink>
                    <NavLink to='/contacts'>My contacts</NavLink>
                </HeaderLink>
                <HeaderLink>
                    <NavLink to='/contacts/add'>Add contact</NavLink>
                </HeaderLink>
                <HeaderLinkLogin>
                    <NavLink to='/login'>Login</NavLink>
                </HeaderLinkLogin>
                <HeaderLink>
                    <NavLink to='/' onClick={() => dispatch(logout())}>Logout</NavLink>
                </HeaderLink>
            </Nav>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 15px;
    background-color: #1aa;
    display: flex;
    margin-bottom: 30px;
`

const Nav = styled.ul`
    list-style: none;
    display: flex;
    margin-left: auto;
`

const HeaderLink = styled.li`
    & a {
        text-decoration: none;
        margin-left: 20px;
        color: white;
    }
    &:hover {
        cursor: pointer;
        color: #777;
        font-weight: bold;
    }
`

const HeaderLinkLogin = styled(HeaderLink) `
& a {
    color: red;
}     
`