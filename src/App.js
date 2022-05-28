import logo from './logo.svg';
import './App.css';
import AddProductForm from './components/AddProductForm';
// import ProductList from './components/product/ProductList';
import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux/es/exports';
import ProductList from './components/product/ProductList';
import { getAllProducts } from './redux/actions';
import EditModal from './modal/EditModal';

function App(props) {

  
  useEffect(()=>{
    props.getAllProducts();
    console.log("APP RE-RENDERED!!!");
    
},[props.products.length,props.product])


  return (
    <div className='container my-4'>
     <div className="row">
        <div className="col-md-4">
          <AddProductForm/>
        </div>
        <div className="col-md-8">
          <ProductList product={props.product} products={props.products}/>
        </div>
        <EditModal/>
      </div>

      
    </div>
  );
}

const mapStateToProps =(state) =>{
  return {
    products: state.products,
    product:state.product
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => {
      dispatch(getAllProducts());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

