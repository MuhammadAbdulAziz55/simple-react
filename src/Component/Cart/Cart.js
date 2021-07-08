import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const cart = props.cart;

    let transferMoney = cart.reduce((transferMoney, player) => transferMoney + +player.salary, 0);

    const TotalTransferCost = transferMoney.toFixed(2);

    return (
        <div className=" cart-info cart">
            <h2 className="h2">My Team</h2>
            <div>
                {cart.length === 0 && <div>Cart Is Empty</div>}
            </div>

            {cart.map((player) => (
                <div key={player.id}>
                    <div className="d-flex">
                        <p>PlayerName: {player.name}</p>
                        <br />
                        <p>Transfer Money: ${player.salary}</p>

                    </div>


                </div>
            ))}
            <>
                <hr></hr>

                <div>
                    <strong>TotalTransferCost: ${TotalTransferCost}</strong>
                </div>
            </>
        </div>

    );
};

export default Cart;