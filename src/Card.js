import React from 'react'

function Card(props) {
    return (
        <div className="row" style={{ margin: "2%" }}>
            {
                props.data.map((product) => {
                    return (

                        <div className="col-sm-4" >
                            <div className="card" style={{ margin: "2%" }}>
                                <div className="card-body" >
                                    <img src={product.img} alt={product.name} style={{height:"180px"}}/>
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.desc}</p>
                                    <h5 className="card-title">&#8377; {product.price}/-</h5>
                                    <p className="btn btn-primary" onClick={() => props.handleCartData(product)}>Add to Cart</p>
                                </div>
                            </div>
                        </div>

                    )
                })
            }

        </div >
    )
}

export default Card