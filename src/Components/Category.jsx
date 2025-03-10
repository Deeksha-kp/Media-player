import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory } from '../Services/allApis';
import Categorylist from './Categorylist';


function Category() {
    const [show, setShow] = useState(false);
     const [category,setCategory]=useState({
      categoryId:"",title:"",videos:[]
     })
    //  cost[addresponse,setAddresponse]=useState("")
     const handleCategory=async()=>{
      console.log(category)
      const{categoryId,title}=category
      if(!categoryId || !title){
      toast.warning("enter valid inputs!!")
     
     }
     else{
      const result=await addCategory(category)
      console.log(result)
      if(result.status==201){
        toast.success("category added")
        handleClose()
        setCategory({
          categoryId:"",title:"",videos:[]
        })
        // setAddresponse(result)
      }
      else{
        toast.error("category adding failed")
      }
     }
     }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className='d-grid' >
    <Button variant="success" onClick={handleShow} style={{color:'black', fontFamily:'fantacy'}}>
            Add category
          </Button>
          <div className='border-3 border-white'>
            <Categorylist/>
          </div>
          
          </div>

<Modal  
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingId" label="Category ID"className="mb-3">
        <Form.Control type="number" onChange={(e)=>{setCategory({...category,categoryId:e.target.value})}} placeholder="1" />
      </FloatingLabel>
      <FloatingLabel controlId="vtitle" label="Category  Name" className='mb-3'>
        <Form.Control type="text" onChange={(e)=>{setCategory({...category,title:e.target.value})}} placeholder="title" />
      </FloatingLabel>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCategory}>Add</Button>
          
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Category