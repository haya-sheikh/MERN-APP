import React, { useEffect, useState } from 'react'
import UserCards from '../Components/UserCards'
import axios from 'axios'
import {AppRoute} from '../../App'

export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(`${AppRoute}api/get-all-products`)
            .then(json => setProducts(json.data.products))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2  style={{ color: 'orange' }}>Products</h2>
                <small className="text-secondary">Fresh K-Ramen, curated just for you!</small>
            </div>

            <div className="row my-5">
                {
                    products.map((val, key) => <UserCards key={key} image={val.thumbnail} name={val.productName} url={`/products/${val._id}`} />)
                }

            </div>
        </div>
    )
}