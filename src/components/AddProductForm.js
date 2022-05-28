import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addProduct } from '../redux/actions';

const AddProductForm = (props) => {
  console.log(props);

  // console.log(props.products);

  const [formValues,setFormValues] = useState({
    description: "SILGI 5 DESC",
    name: "SILGI 5",
    price: 46,
    categoryId: 6,
    
  });

  const handleChange = (event) => {

    setFormValues(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));

  
    // console.log(formValues);
  }
  const resetValues = () => {
    setFormValues({
      description: "",
      name: "",
      price: 0,
      categoryId: 0,
    })
  }
  const submitValues = (e) =>{
    e.preventDefault();

    if (isNaN(formValues.price) || 
    formValues.name === '' || 
    formValues.description === '' || 
    isNaN(formValues.categoryId)) return;

    console.log(formValues);
    console.log("girdi!");

    props.onAddProduct(formValues);
    resetValues();
  }
  return (
    <>
    <h3>Add Product</h3>
    <form onSubmit={submitValues}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
        <input
        name="name"
        onChange={handleChange}
        value={formValues.name}
        type="text" 
        className="form-control" 
        id="exampleFormControlInput1" 
        placeholder="name@example.com"/>


      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
        <input 
        type="text"
        name='description'
        value={formValues.description}
        onChange={handleChange}
        className="form-control" 
        id="exampleFormControlInput1" 
        placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
        <input 
        type="text"
        name='price' 
        onChange={handleChange}
        className="form-control"
        value={formValues.price}
        id="exampleFormControlInput1"
         placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Category Id</label>
        <input 
        type="text" 
        name='categoryId'
        onChange={handleChange}
        value={formValues.categoryId}
        className="form-control" 
        id="exampleFormControlInput1" 
        placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <button  type="submit" className='btn btn-primary'>{'Add Product'}</button>
      </div>
    </form>
    </>
  )
}

function mapStateToProps(state) {
  return {
    products: state.productReducer
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onAddProduct: product => {
      dispatch(addProduct(product));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductForm);