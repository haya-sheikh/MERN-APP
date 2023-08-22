import React from 'react';
import UserCards from '../Components/UserCards';

export default function Category() {
    const data = [
        {
            "_id": "64e377a432f8af0d76b187af",
            "CategoryName": "Cooked",
            "CategoryImage": "https://i.pinimg.com/564x/8c/38/7e/8c387e962839b00345a634e412275f44.jpg",
            "__v": 0
        },
        {
            "_id": "64e378d732f8af0d76b187b6",
            "CategoryName": "UnCooked",
            "CategoryImage": "https://i.pinimg.com/564x/d0/4e/15/d04e158059a8fd8b150469a9bab3c379.jpg",
            "__v": 0
        }
    ];

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2 className="category-title" style={{ color: 'orange' }}>Discover Our Categories and Brands</h2>
                <p className="category-description">You name it, we have it!</p>
            </div>

            <div className="row my-5 category-list">
                {data.map((val, key) => (
                    <div key={key} className="col-md-4 category-item">
                        {val.CategoryName && val.CategoryImage && (
                            <UserCards image={val.CategoryImage} name={val.CategoryName} />
                        )}
                        {val.BrandName && val.BrandImage && (
                            <UserCards image={val.BrandImage} name={val.BrandName} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
