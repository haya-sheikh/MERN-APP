import React from 'react';
import UserCards from '../Components/userCards';


export default function Category() {
    const data = [
        {
            "_id": "64b9220ffd82e7fc615b134a",
            "BrandName": "Makeup City",
            "BrandImage": "https://www.makeupcityshop.com/cdn/shop/files/MUC-Logo-new-01-footer.png?v=1624558798",
            "__v": 0
        },
        {
            "_id": "64c0f917e95a2a452eace38e",
            "BrandName": "Sana Safinaz",
            "BrandImage": "https://www.sanasafinaz.com/static/version1688385473/frontend/RLTSquare/SanaSafinaz/en_US/images/S-SBlack.png",
            "__v": 0
        },
    ];

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2 className="category-title">Discover Our Categories</h2>
                <p className="category-description">You name it, we have it!</p>
            </div>

            <div className="row my-5 category-list">
                {data.map((val, key) => (
                    <div key={key} className="col-md-4 category-item">
                        <UserCards image={val.BrandImage} name={val.BrandName} />
                    </div>
                ))}
            </div>
        </div>
    );
}
