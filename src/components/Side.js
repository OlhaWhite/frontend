import './Side.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Side = ({show, click}) => {
    const sideClass = ["side"];

    if (show) {
        sideClass.push("show");
    }

    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    return (
        <div className={sideClass.join(" ")}>
<ul className='side__links' onClick={click}> 
<li>
    <Link to="/cart">
    <i className='fas fa-shopping-cart'></i>
    <span>
        Cart <span className='side__cartbadge'>{getCartCount()}</span>
    </span>
    </Link>
</li>
<li>
    <Link to="/buy">Shop</Link>
</li>
<li>
<Link to="/">Home</Link>
</li>
</ul>
        </div>
    )
}

export default Side;