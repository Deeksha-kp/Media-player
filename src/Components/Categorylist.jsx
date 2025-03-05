import React, {useEffect,useState} from 'react'
// import { getCategories } from '../Services/allApis'
import { getCategories,deleteCategory } from '../Services/allApis'
import { updateCategory } from '../Services/allApis'
import {toast} from 'react-toastify'
import VideoCard from './VideoCard'
//import Category from './Category'

function Categorylist() {
    const [categoryList,setCategoryList]=useState([])
    useEffect(()=>{
        getData()
    },[categoryList])
    const getData=async()=>{
        const result=await getCategories()
        // console.log(result)
        if(result.status==200){
            setCategoryList(result.data)
        }
    }
    const deleteCat=async(id)=>{
        const res=await deleteCategory(id)
        // console.log(res)
        if(res.status==200){
            getData()
        }

    }
    const dragHandler = async (e, category) => {
        console.log("dropped");
        const vid = JSON.parse(e.dataTransfer.getData("video"));
        category.videos.push(vid)
        const result = await updateCategory(category.id, category);
        console.log(result);
        if(result.status==200){
            toast.success(`${vid.title} video added to ${category.title}`)
            getData()
        }else{
            toast.error("video-category adding failed")
        }
    
    }
    
        const dragOverhandler = (e) => {
            console.log("dragging over");
            e.preventDefault()
    
    
        }
  return (
    <>
    <div  className='container-fluid border border-3 border-light p-2 mt-3'>
        {
        categoryList.length>0?
        <div>{
            categoryList.map(item=>(
                <div className='border m-1'>
                    <div className='m-2 p-3 mb-3 border d-flex justify-content-between' onDragOver={(e)=>{dragOverhandler(e)}} onDrop={(e)=>{dragHandler(e,item)}}>
                        <h3>{item.title}</h3>
                        <button className='btn' onClick={()=>{deleteCat(item.id)}}>
                        <i className="fa-solid fa-trash" style={{color: "#99b5e5",}} />
                        </button>
    
                        </div>
                        <div className='border border-light'>
                {
                    item?.videos?.length>0 &&
                    <>
                    {item?.videos?.map(vid=>(
                        <VideoCard videos={vid} cat={true}/>
                    ))}
                    </>
                }

             </div>
                </div>
                    
            ))}
    </div>
    :
    <h5>no categories</h5>
            }
            </div>
    </>
  )
}

export default Categorylist