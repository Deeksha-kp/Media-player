import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
    <div className='container-fluid mb-5 d-flex align-items-center' style={{height:'80vh'}}>
      <Row>
        <Col className='p-5' sm={12} md={6}> 
        <h2>
        <i className="fa-solid fa-play "  style={{color: "#9d12c4",}} ></i>
          Media Player 2024
        </h2>
        <p style={{textAlign:'justify'}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit minus, ab ut nesciunt repellendus ipsum? Ducimus, 
          placeat tenetur blanditiis commodi debitis magni distinctio earum aliquid expedita corrupti dolorum molestias quibusdam!
        </p>
        <div className='d-grid'>
          <Link to={'/home'} className='btn btn-success'> Let's Go</Link>

        </div>
        </Col>
        <Col className='py-4' sm={12} md={6}>
         <img src="https://i.pinimg.com/originals/60/a6/37/60a6370c7eb20418d83e930fd3dc19d7.gif" style={{height:'350px', width:'500px'}} className='img-fluid rounded' alt="" />
        </Col>
      </Row>

    </div>

    <div className='container-fluid mt-5'>
   <h3 className='my-3 text-center'>Features</h3>
   <div className='p-4 d-flex justify-content-around'>
  
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.lordicon.com/icons/wired/gradient/2547-logo-youtube.gif" />
      <Card.Body>
        <Card.Title>Upload Youtube Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn-icons-gif.flaticon.com/6416/6416353.gif" />
      <Card.Body>
        <Card.Title>Add Categories</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.gifer.com/origin/e0/e0ea055299e92297b2ec0ef1c80696bf_w200.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>
   </div>
    </div>
    <div className='p-5'>
<Row>
  <Col sm={12} md={7}>
    <h4>Simple And Faster</h4>
    <p style={{textAlign:'justify'}}>
    Discover a media player designed with you in mind. Our intuitive interface makes it effortless to navigate through your favorite songs,
     videos, and playlists without any hassle. Experience lightning-fast loading times and smooth playback that keeps up with your lifestyle
     . Whether you're streaming, downloading, or organizing your media library, our app ensures a seamless and efficient performance every time.
      Enjoy powerful 
    features without the complexity—everything you need is right at your fingertips, making your entertainment experience both simple and swift.
    </p>
  </Col>
  <Col sm={12} md={5}>
  <iframe width="500" height="360" src="https://www.youtube.com/embed/nfs8NYg7yQM?si=mMnruWlIi-S_i86E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </Col>
</Row>
    </div>

    </>
  )
}

export default Landing