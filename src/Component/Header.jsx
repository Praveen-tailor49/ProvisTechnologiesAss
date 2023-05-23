import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartData = useSelector((state) => state.Cart.cartData)
    return (
        <Navbar style={{ background: '#39424e' }}>
            <Container>
                <Navbar.Brand href="#home" style={{ color: '#1ba94c' }}>InstaMart </Navbar.Brand>
                <span><p style={{ color: '#1ba94c', cursor:'pointer' }}>cart <span>{cartData.length}</span></p></span>
            </Container>
        </Navbar>
    )
}

export default Header


