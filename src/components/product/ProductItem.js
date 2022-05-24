import React from 'react'
import Moment from 'react-moment'

const ProductItem = ({product,index}) => {
  return (
    <tr>
        <th scope="row">{product.id}</th>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.description}</td>
        <td>{product.categoryId}</td>
        <td>
        <Moment format="YYYY/MM/DD">
                {product.createdDate}
            </Moment>
        </td>
        <td>
          <button className="btn btn-danger mx-3">Delete</button>
          <button className="btn btn-warning">Edit</button>
        </td>
      </tr>
  )
}

export default ProductItem