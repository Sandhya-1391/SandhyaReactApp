import React, { useEffect, useState } from 'react'
import SingleCardProduct from './SingleCardProduct'
import axios from 'axios'

const Product = () => {
    const [products, setProduct] = useState()
    const [load, setLoad] = useState(true)
    const [Catagerie,setCatageries]= useState([])
    const [currentCat,setCurrentCat]=useState("")
     const getProduct = async () => {

    //     // let res = await fetch('https://dummyjson.com/products')
    //     // let jsonProductData = await res.json()
    //     // let { products } = jsonProductData
    //     // console.log(products)
    //     // setProduct(products)
    //     // setLoad(false)
    let {data} = await axios.get('https://dummyjson.com/products')

        console.log(data)
        let {products}=data
        setProduct(products)
        setLoad(false)
     }
    const getCatagere = async () => {
        setLoad(true)
        try {
            const { data } = await axios.get('https://dummyjson.com/products/categories');
            setCatageries(data)
        }
        catch (err) {
        }


    }
const getProductByCat = async() =>{

}
    const fetchProduct = async (category) => {
        setCurrentCat(category)
        setLoad(true)
        try {
            const { data } = await axios.get(`https://dummyjson.com/products/category/${category}`);
            setProduct(data.products)
        }
        catch (err) {
        }
        setLoad(false)
    }
    console.log(currentCat)

    useEffect(() => {
        getProduct()
        getCatagere()
    }, [])
    return (
        <>
            <h2>Product</h2>
            {Catagerie.map((category, index) => {
                return <button className={`${category==currentCat ? "btnactive" : ""}`} onClick={()=>fetchProduct(category)} key={index}>{category}</button>
            })}
            {
                load ?
                    < h2 > loading..... </h2 > :
                    <div className="productContainer">
                        {products.map((product, index) => {
                             return <SingleCardProduct product={product} key={index}/>
                        })}


                    </div>
            }

        </>

    )
}

export default Product