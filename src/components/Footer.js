import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
    const {user} = useContext(UserContext)
    return (
        <>
        <h3>Footer</h3>
        <span>Site developed by {user.name}- 
        {user.email}</span>

        </>
    )
}


export default Footer;