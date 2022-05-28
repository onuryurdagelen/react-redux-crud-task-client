import { Modal, Button, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { handleModalFunc, updateProduct } from "../redux/actions";
import {withRouter} from 'react-router-dom'

const EditModal = (props) => {
    
  // console.log("SHOW: "+Boolean(props.isModalOpen));
    // console.log(props.product);
    // console.log(props);


    const [formValues,setFormValues] = useState({
        categoryId : "",
        description: "",
        name: "",
        price: ""
    
  });
  const data = {
    description: "",
    name: "",
    price: 0,
    categoryId: 0,
  }

  if (props.product) {
      const {product} = props;
      data.categoryId = product.categoryId;
      data.name = product.name;
      data.price = product.price;
      data.description = product.description;
      
    //   console.log("GIRDI!!");
  }
//   console.log(data);

    useEffect(()=>{
        
        setFormValues({
        categoryId: data.categoryId,
        description: data.description,
        name: data.name,
        price: data.price
    })    
    },[props.product])
    
    useEffect(()=>{
        
            
    },[props.product])  
 

  const resetValues = () => {
    setFormValues({
      description: "",
      name: "",
      price: 0,
      categoryId: 0,
    })
  }

  
  const handleChange = (event) => {

    setFormValues(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
}

  const submitValues = (e) =>{
    e.preventDefault();

    if (isNaN(formValues.price) || 
    formValues.name === '' || 
    formValues.description === '' || 
    isNaN(formValues.categoryId)) return;

    // console.log(formValues);
    // console.log("girdi!");

    props.updateProduct(props.product.id,formValues);
    console.log(props.product);
    console.log(props.products);
    resetValues();
  }


  return (
    <>
     {props.product &&  <Modal
        show={props.isModalOpen}
        onHide={() => props.handleModal(props.isModalOpen)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Id</Form.Label>
              <Form.Control value={props.product?.id} onChange={handleChange} readOnly type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={handleChange} name="name" value={formValues.name} type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control onChange={handleChange} name="price"  value={formValues.price} type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category Id</Form.Label>
              <Form.Control onChange={handleChange} name="categoryId"  type="text"  value={formValues.categoryId}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control value={formValues.description}  name="description" onChange={handleChange}  type="text" />
            </Form.Group>
            <Form.Group>
            <Button
            variant="secondary"
            onClick={() => props.handleModal(props.isModalOpen)}
          >
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={submitValues}>
            Save Changes
          </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>}
    </>
  );
};
//   render(<EditModal/>)

const mapStateToProps = (state,ownParams) => {
  return {
    isModalOpen: state.isModalOpen,
    product: state.product,
    products: state.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleModal: (state) => {
      dispatch(handleModalFunc(state));
    },
    updateProduct: (id,data) => {
        dispatch(updateProduct(id,data))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditModal)
