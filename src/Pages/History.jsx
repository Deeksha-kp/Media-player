import React,{useState,useEffect} from 'react'
import { deleteHistory, getHistory } from '../Services/allApis'


function History() {
  const[history , setHistory]=useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData=async()=>{
    const result=await getHistory()
    if(result.status==200){
      console.log(result.data);
      setHistory(result.data)
    }
    else{
      console.log(result);
    }
  }
  const delHistory=async(id)=>{
    const result=await deleteHistory(id)
    console.log(result);
    if(result.status=200){
      getData()
    }
  }
  return (
<>
 <div className='p-5'>
 <h2>Wtch History</h2>
 {
 history.length>0?
 <table className="table table-bordered">
  <thead>
    <tr>
      <th>Video ID</th>
      <th> Title</th>
      <th> Video URL</th>
      <th> Date and Time</th>
    </tr>
  </thead>
  <tbody>
    {
history.map(item=>(
    <tr>
      <td>{item.videoId}</td>
      <td>{item.title}</td>
      <td>{item.url}</td>
      <td>{item.datetime}</td>
      <td>
      <button className='btn' onClick={()=>{delHistory(item.id)}}>
      <i className="fa-solid fa-trash" style={{color: "#99b5e5",}} />
      </button>
      </td>
    </tr>
    ))}
  </tbody>
 </table>
 :
 <h2>No history available</h2>
 }
 </div>
</>
  )
}

export default History