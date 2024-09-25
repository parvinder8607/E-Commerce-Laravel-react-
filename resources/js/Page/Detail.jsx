import { useLocation } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function Detail(){

    const cardStyle = {
        card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        margin: '10px',
        },
        image: {
            height: '200px',
            objectFit: 'cover',
            objectPosition: 'center',
        },
        title: {
            fontSize: '18px',
            marginBottom: '10px',

        },
        description: {
            fontSize: '16px',
        },

    };


    const { addItem } = useCart();


    const location = useLocation();
    const { anime } = location.state || {}; // Get the anime data

    if (!anime) {
        return <p>No anime data available.</p>;
    }

    const addToCart = () => {
        addItem(anime);
    };

    return (
        <>
        <h1>Detail Page</h1>
        <img style={cardStyle.image} src={anime.image} alt={anime.title} />
            <h2 style={cardStyle.title}>{anime.title}</h2>
            <p style={cardStyle.description}>{anime.description}</p>

            <br />
            <button onClick={addToCart}>Add to Cart</button>
        </>
    )
}