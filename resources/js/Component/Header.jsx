import { Link } from "react-router-dom";
import Search from "./Search";
import { useCart } from "../Context/CartContext";

export default function Header({onSearch}) {

    const { cartItem } = useCart();


    const style ={
    cartBadge: {
        fontSize: '13px',
        position: 'absolute',
        padding: '4px',
        background: 'black',
        color: 'white',
        borderRadius: '50%',
        transform: 'translate(4px, -12px)',
    },
    // convert this in react


    }

    return(
        <>
        <header  >
           
        <Link to="/">  <h1> E-commerce </h1></Link>
            
            <nav>
                <ul className="nav">
                    <li>Home</li>
                    <li>Latest</li>
                    <li>Categories</li>
                    
                    <Link to="/addProduct"> <li>Add<span style={style.cartBadge}>{cartItem.items.length}</span></li></Link>
                    <Link to="/cart"> <li>Cart<span style={style.cartBadge}>{cartItem.items.length}</span></li></Link>
                </ul>
                
            </nav>
                <Search />
        </header>
        </>
    )

}