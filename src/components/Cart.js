import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector( store => store.cart.items)
    return (
        <h2>
            Cart Items - {cartItems.length}
        </h2>

    )
}

export default Cart;