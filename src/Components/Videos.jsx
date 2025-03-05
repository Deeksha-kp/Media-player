import React, {useEffect,useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getVideos } from '../Services/allApis'


function Videos({add}) {
  const [videos,setVideos]=useState([])
  const[delResponse,setDelResponse]=useState("")

  useEffect(()=>{
    getData()
  },[add,delResponse])

  const getData=async()=>{
    const res=await getVideos()
    console.log(res)
    if(res.status==200){
      setVideos(res.data)
    }
    else{
      console.log(res)
    }
  }
  return (
    <>
    <div  className='border border-3 shadow p-5 md-3'>
      {
        videos.length>0?
        <Row>
          {
            videos.map(item=>(
            <Col>
              <VideoCard videos={item} response={setDelResponse}/>
              </Col>
              ))

          }
        
    </Row>
    :<h2 className='text-center text-danger'>no videos found</h2>
      }
    
    </div>
    </>
  )
}

export default Videos