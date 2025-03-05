import React from 'react'
import { useState,useEffect } from 'react'
import {Row,Col} from 'react-bootstrap'
import Addvideos from '../Components/Addvideos'
import Videos from '../Components/Videos'
import Category from '../Components/Category'
import {Link} from 'react-router-dom'



function Home() {
  const[addResponse,setAddResponse]=useState("")
  const[username,setUsername]=useState("")

  useEffect(()=>{
    const user=JSON.parse(sessionStorage.getItem('userData'))
    setUsername(user?.username)
  },[])
  return (
    <>
    <div className='d-flex justify-content-between p-4'>
    <h1>videos </h1>
    <Link to={'/history' }>Watch History</Link>
    </div>
    <div className='container-fluid'>
      <Row>
        <Col sm={12} md={1}>
          <Addvideos response={setAddResponse}/>
        </Col >
        <Col sm={12} md={8}>
          <Videos add={addResponse}/>
        </Col>
        <Col sm={12} md={3}>
          <Category/>
        </Col>
          </Row>
    </div>
    </>
  )
}

export default Home