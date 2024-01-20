import React from 'react'

function Cart(props) {
    var total = 0;

    props.data.map((product) => {
        return (
            total = total + product.data.price
        )
    })

    console.log(props.data)
    return (
        <div className="row" style={{ margin: "2%" }}>
            {
                props.data.map((cartItem) => {
                    return (
                        <div className="col-sm-4" key={cartItem.data.id}>
                            <div className="card" style={{ margin: "2%" }}>
                                <div className="card-body">
                                    <img src={cartItem.data.img} alt={cartItem.data.name} style={{height:"180px"}}/>
                                    <h5 className="card-title">{cartItem.data.name}</h5>
                                    <p className="card-text">{cartItem.data.desc}</p>
                                    <p className="card-text">&#8377; {cartItem.data.price}/-</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div>
                Total Price : &#8377; {total}/-
            </div>
        </div>
    )
}

export default Cart