import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Title = () => (
  <>
   <a href="/">
    <img alt="logo" src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg" className='logo'/>
    </a>
  </>
);

const loggedInUser = () => {
  //conditions
  return false; 
}

const Nav = () => (
  <>
      
  </>
);

const Header = () => { 

  const cartItems = useSelector((store) => store.cart.items); 
  console.log({cartItems});
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const {user} = useContext(UserContext);

  return (
      <>
    <div className='header'>
      
      <Title />
      <ul className='navbar'>
      <Link to="/"> <li>Home</li> </Link>
      <Link to="/about"> <li>About</li> </Link>
      <Link to="/contact"> <li>Contact</li> </Link>
      <Link to="/instamart"> <li>Instamart</li> </Link>
      <Link to="/cart">  <li>Cart - {cartItems.length} items</li> </Link>
      </ul>
      
      {
        //js expressions no statements
        isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>
      }
    </div>
      
      </>
  );
}


export default Header;

