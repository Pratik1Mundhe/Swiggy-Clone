import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = () => {
    const params = useParams();
    const [restaurant, setRestaurant] = useState(null)

    // useEffect(() => {
    //     getRestaurantInfo();
    // },[])

    // async function getRestaurantInfo() {
    //     const data = fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=229")
    //     const json = data.json();
    //     setRestaurant(json.data)
    // }

    // return (
    //     // <div>
    //     //     <h1>Restaurant id: {params.id}</h1>
    //     //     <h2>{restaurant.name}</h2>
    //     //     <img src={IMG_CDN_URL + cloudinaryImageId} />
    //     // </div>
    // )
}

export default RestaurantMenu;