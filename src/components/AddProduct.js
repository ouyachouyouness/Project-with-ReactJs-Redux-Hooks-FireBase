import React from 'react'

function AddProduct() {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for=""></label>
                    <input placeholder= "name of products" name="name" type="text" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for=""></label>
                    <input placeholder= "price of products" name="price" type="text" class="form-control"/>
                </div>
                <button class="btn btn-block btn-primary">new Product</button>
            </form>
            
        </div>
    )
}

export default AddProduct
