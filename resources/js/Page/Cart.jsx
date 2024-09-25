// CartComponent.js
import React from 'react';
import { useCart } from '../Context/CartContext';
import { useSearch } from '../Context/SearchContext';

const Cart = () => {

    const {searchTerm} = useSearch();
    const { cartItem, removeItem, clearCart } = useCart();

    const style= {
        ul: {
            display: 'flex',
            flexWrap: 'wrap',
            listStyleType: 'none',
            margin: 0,
            padding: 0,
        },
        li:{
            display: 'flex',
            justifyContent:'space-between',
            alignItems: 'center',
            margin: '10px 0',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
        },
        img: {
            width: '100px',
            height: '100px',
            objectFit: 'cover',
        },
        button: {
            backgroundColor: '#ccc',
            color: '#fff',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
        },
    }

    const filterCart = cartItem.items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItem.items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul style={style.ul}>
                    {filterCart.map((item) => (
                        <li key={item.id} style={style.li}>
                            <img style={style.img} src={item.image} alt={item.title} />
                            {item.title} <button style={item.button} onClick={() => removeItem(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;
