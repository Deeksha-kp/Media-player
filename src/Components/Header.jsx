import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {
  const nav=useNavigate()
  const lgout=()=>{
    nav('/')
    sessionStorage.removeItem('userData')
  }
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-play fa-bounce"  style={{color: "#9d12c4",}} ></i>
            {' '}
            Media Player
          </Navbar.Brand>
        </Container>
        <button className='btn btn-danger' onClick={lgout}>Logout</button>
      </Navbar>
      </>
  )
}

export default Header