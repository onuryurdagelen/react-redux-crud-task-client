import React, { useEffect } from 'react'
import Moment from 'react-moment';
import { connect } from 'react-redux/es/exports';
import { DeleteProduct, getAllProducts, getSingleProduct, handleModalFunc } from '../../redux/actions';
import {Link} from 'react-router-dom'
const ProductItem = (props) => {


  useEffect(()=>{
    console.log("RE-RENDERED!!!");
  },[props.product])

  // console.log(props.isModalOpen);
  // console.log(props.product.category.name);
  return (
    <tr key={props.product.id}>
        <th scope="row">{props.product.id}</th>
        <td>{props.product.name}</td>
        <td>{parseFloat(props.product.price).toFixed(2)}</td>
        <td>{props.product.description}</td>
        <td>{props.product.category?.name}</td>
        <td>
        <Moment format="YYYY/MM/DD">
                {props.product.createdDate}
            </Moment>
        </td>
        <td>
          <button className="btn btn-danger m-1" onClick={() => props.deleteProduct(props.product.id)}>Delete</button>
          <button className="btn btn-warning" onClick={() => {
            props.handleModal(props.isModalOpen)
            props.getSingleProduct(props.product.id)
     
          }}>Edit</button>
        </td>
      </tr>
  )
}



const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: (id) => {
      dispatch(DeleteProduct(id));
    },
    handleModal: (state) => {
      dispatch(handleModalFunc(state))
    },
    getSingleProduct: (id) => {
      dispatch(getSingleProduct(id))
    },
    getAllProducts: () =>{
      dispatch(getAllProducts())
    }
  };
};

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.isModalOpen
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem);
