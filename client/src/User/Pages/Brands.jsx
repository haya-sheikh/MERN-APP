import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Brands() {
    const [brand, setBrand] = useState([]);

    useEffect(() => {
        axios.get('/api/get-all-brands')
            .then(json => setBrand(json.data.Brand))
            .catch(err => alert(err.message));
    }, []);

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2 className="mb-2"style={{ color: 'orange' }}>Discover Our Brands</h2>
                <p className="lead text-muted mb-5">Reintroducing our new brands with high-quality products. Get 20% off on your first purchase!</p>
            </div>

            <div className="row">
                {brand.map((val, key) => (
                    <div key={key} className="col-md-4 mb-4">
                        <div className="card border-0 shadow-sm rounded overflow-hidden">
                            <div className="brand-image" style={{ backgroundColor: 'khaki' }}>
                                <img src={val.BrandImage} className="card-img-top p-3" alt={val.BrandName} />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">{val.BrandName}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
