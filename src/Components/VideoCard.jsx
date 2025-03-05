import React from 'react'

import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addHistory, deleteVideo } from '../Services/allApis';
import { toast } from 'react-toastify';


function VideoCard({videos,response}) {
    const [show, setShow] = useState(false);

    const handleDelete=async()=>{
      const res=await deleteVideo(videos.id)
      console.log(res)
      if(res.status==200){
        toast.success("Video deleted")
        response(res)
      }
      else{
        toast.error("Deletion failed")
      }
    }
    

  const handleClose = () => setShow(false);
  const handleShow = async()=>{
    setShow(true)
    const dt=new Date()
    const data={videoId:videos.videoId,title:videos.title,url:videos.videoUrl,datetime:dt}
    console.log(data)
    const result=await addHistory(data)
    console.log(result);

  }
  const dragHandler=(e)=>{
    console.log(e);
    console.log(videos);
    e.dataTransfer.setData("video",JSON.stringify(videos))
  }
  return (
<>
<Card style={{ width: '18rem' }} onDragStart={(e)=>{dragHandler(e)}} draggable>
      <Card.Img style={{ cursor:'pointer'}} onClick={handleShow} variant="top" src={videos?.imageUrl} />
      <Card.Body>
        <Card.Title > {videos?.title}</Card.Title>
        
        <Button variant="btn" onClick={handleDelete}><i className="fa-solid fa-trash" style={{color: "#99b5e5",}} /></Button>
      </Card.Body>
    </Card>
    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{videos?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={videos.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary ' onClick={handleClose}>Save changes</Button>
          
        </Modal.Footer>
      </Modal>


</>
  )
}

export default VideoCard