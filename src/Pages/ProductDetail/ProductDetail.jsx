import React, { useEffect, useState } from 'react'
import classes from './ProductDetail.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from "../../Components/Loder/Loder"

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setisLoading] = useState(false)
  const {productId} = useParams()
   console.log(productId)
  
  useEffect(() => {
    setisLoading(true)
axios.get(`${productUrl}/products/${productId}`)
.then((res)=>{
  console.log(res.data)
   setProduct(res.data);
   isLoading(false)
}).catch((err)=>{
  console.log(err)
  setisLoading(false)
})

}, [])

  
  
  
  return (
    
    <LayOut>
       {isLoading? (<Loader/>):(<ProductCard
        product={product}
        flex = {true}
        renderDesc={true}
      />)}
       
       
    </LayOut>
  )
}

export default ProductDetail
