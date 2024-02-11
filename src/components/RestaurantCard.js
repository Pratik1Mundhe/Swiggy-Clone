import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config"
import { addItem } from "../utils/cartSlice";
export const RestaurantCard = ({name,cuisines,cloudinaryImageId, lastMileTravelString,user}) => {
    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem({name})); 
    }
    return (
        <div className='card'>
            <img src = {IMG_CDN_URL + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
            {/* <h4>{user.name}</h4> */}
            <button className="addItem" onClick={handleAddItem()}>Add Item</button>
        </div>
    )
  }