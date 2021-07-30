import React, {useState} from 'react'
import AddProduct from './AddProduct';

const Products = () => {

    const [listProducts, setListProducts] = useState([
        {id: 1, name: 'iphone', price: 1200},
        {id: 1, name: 'huwawy', price: 200},
        {id: 1, name: 'samsung', price: 100}

    ]);

    return (
        <div>

            <AddProduct/>
              <table class="table">
      <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
      </thead>
      <tbody>
          {listProducts.map(products =>(
            <tr key= {products.id}>
                <td>{products.id}</td>
                <td>{products.name}</td>
                <td>{products.price}</td>
            </tr>
            ) )};
      </tbody>
    </table>
        </div>
    )
}

export default Products
