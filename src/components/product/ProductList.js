
import { useEffect } from 'react';
import ProductItem from './ProductItem';

const ProductList = ({products}) => {
    // const productsArr = useSelector(store => store.product.products);
 
    // if (isLoading) {
    //     return <h3>Loading...</h3>
    // }

    

  return (
      <>
      <h1 className='text-center'>Products</h1>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Product Id</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Description</th>
        <th scope="col">Category Name</th>
        <th scope="col">Created Date</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      {products.map((product,index) => {
        // console.log(product);
          return <ProductItem index={index} key={product.id} product={product}/>
      })}
    </tbody>
  </table>
  </>
  )
}

export default ProductList;


