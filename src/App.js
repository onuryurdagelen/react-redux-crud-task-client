import logo from './logo.svg';
import './App.css';
import AddProductForm from './components/AddProductForm';
// import ProductList from './components/product/ProductList';
import { useEffect } from 'react';
import { connect } from 'react-redux/es/exports';
import ProductList from './components/product/ProductList';
import { getAllProducts } from './redux/actions';
function App(props) {
//   const products = useSelector(store => store.product.products);

//   const dispatch = useDispatch();


  useEffect(()=>{
    props.getAllProducts();
    
},[])
  return (
    <div className='container my-4'>
      <div className="row">
        <div className="col-md-4">
          <AddProductForm/>
        </div>
        <div className="col-md-8">
          <ProductList products={props.products}/>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    products: state.productReducer
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

