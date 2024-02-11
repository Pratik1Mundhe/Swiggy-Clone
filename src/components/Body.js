import {RestaurantCard} from "./RestaurantCard"
import {restaurantList} from "../config"
import {useContext, useEffect, useState} from "react"
import { Shimmer } from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
    //avoid rendering component

    const [allRestaurants, setAllRestaurants] = useState(restaurantList);
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);
    //searchtext local state variable                      // returns = [variable name, function of variable] 
    const [searchText,setSearchText] = useState();         // to create state variable
    const {user , setUser} = useContext(UserContext);

    useEffect(() => {
        //api call
        getRestaurants();
    },[]);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }



    const online = useOnline();

    if(!online) {
        return <h1>Offline, please check your internet connection!!</h1>;
    }
    
    // setAllRestaurants(restaurantList);
    console.log("render");
    //conditional rendering 
    // if restaurant empty - shimer ui
    // q:why im always getting the shimmer cant get the other container?


    if(!allRestaurants) return null;

    if(filteredRestaurants?.length===0)
    return <h1>No Restaurant match your filter..</h1>
 
    return allRestaurants?.length === 0 ?(
        <Shimmer />
    ) : ( 
        <>

        <div className="search-container">
            <input type="text" placeholder="Search" className="search-input" value={searchText} onChange={(e) => {
                setSearchText(e?.target?.value);
            }}/>

            <button onClick={() => {
                
                //filter the data
            
                const data= filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
                
                }} className="btn fa fa-search"></button>
                
            {/* <input value={user.name} onChange={
                    e => setUser ({
                        ...user,
                        name: e.target.value
                    })
                 }/>
            <input value={user.email} onChange={
                    e => setUser ({
                        ...user,
                        email: e.target.value
                    })
                 }/> */}
            
        </div> 

         <div className='container'>
           {
            filteredRestaurants.map(restaurant => {
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            })
           }
         </div>
        </>
    )
}

export default Body;
