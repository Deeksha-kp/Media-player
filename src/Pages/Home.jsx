import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Addvideos from '../Components/Addvideos'
import Videos from '../Components/Videos'
import Category from '../Components/Category'
import {Link} from 'react-router-dom'



function Home() {
  return (
    <>
    <div className='d-flex justify-content-between p-4'>
    <h1>videos </h1>
    <Link to={'/history' }>Watch History</Link>
    </div>
    <div className='container-fluid'>
      <Row>
        <Col sm={12} md={1}>
          <Addvideos/>
        </Col >
        <Col sm={12} md={8}>
          <Videos/>
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