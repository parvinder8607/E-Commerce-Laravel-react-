import { useNavigate } from "react-router-dom";
import {useCart} from "../Context/CartContext"

const Card = ({anime}) =>{
    const cardStyle = {
        card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        margin: '10px',
        cursor: 'pointer',
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
            fontFamily: 'sans-serif',
            fontWeight: '300',
            color: '#979797'
        },

    };

    const navigator = useNavigate();
    const { addItem } = useCart();

    const handleLink = () => {
        navigator('/detail', { state: { anime } });
    }


    const addCard = () => {
        addItem(anime);
       
    }
    
    return(
        <>
        <div className="card"  style={cardStyle.card}>
            <img onClick={handleLink} style={cardStyle.image} src={anime.image} alt={anime.title} />
            <h2 style={cardStyle.title}>{anime.title}</h2>
            <p style={cardStyle.description}>{anime.description.split('').slice(0,100).join('')}...</p>
            {/* .split(' ').slice(0, 20).join(' ')}{anime.despcription.split(' ').length > 50 ? '...' : '' */}
         
            <p style={{ color: 'green' }}>Price: ${anime.price}</p>
            <button onClick={handleLink}>View Details</button>
            <button onClick={addCard}>Add to Cart</button>
        </div>
        </>
    )
}

export default Card;


