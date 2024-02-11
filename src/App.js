import React , {lazy, Suspense, useState} from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { createBrowserRouter , RouterProvider, Outlet} from 'react-router-dom'
import Error from './components/Error'
import Contact from './components/Contact'
import RestaurantMenu from './components/RestaurantMenu'
import { Shimmer } from './components/Shimmer'
import UserContext from './utils/UserContext'
import {Provider} from 'react-redux'
import store  from './utils/store'
import Cart from "./components/Cart"

const Instamart = lazy(() => import("./components/Instamart"))
const About = lazy(() => import("./components/About"))
    
  const AppLayout = () => {

    const [user, setUser] = useState({
        name:'pratik',
        email:'support@pratik.com',
    })

      return (
        <Provider store = {store}>
          <UserContext.Provider value={{
            user:user,
            setUser: setUser,
          }}>
              <Header />
              <Outlet />
              <Footer />
          </UserContext.Provider>
        </Provider>
      )
  }
  //on demand loading

  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            
            {
                path: "/",
                element: <Body user={{
                    name: "pratik",
                    pass: "pm",
                }}/>
            },
            {
                path: "/about",
                element: (
                    <Suspense>
                        <About />
                    </Suspense>
                    )
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: (
                <Suspense fallback={<Shimmer />}>
                <Instamart />
                </Suspense>
                )
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],

    },
  ]);


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<RouterProvider router={appRouter} />);



// const card = {
//     name: "burger king",
//     image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/uq829j745uxlk0itqoqz",
//     cuisines: ["Burger" , "American"],
//     rating: "4.2",
// }
 
// const Title = () => (
//   <>
//     <img alt="logo" src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg" className='logo'/>
//   </>
// );



// const RestaurantCard = () => {
//     return (
//         <div className='card'>
//             <img src = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/uq829j745uxlk0itqoqz" />
//             <h2>burger king</h2>
//             <h3>burger, American</h3>
//             <h4>4.2 stars</h4>
//         </div>
//     )
// }

// const Title = () => (
//   <>
//    <a href="/">
//     <img alt="logo" src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg" className='logo'/>
//     </a>
//   </>
// );

// const Nav = () => (
//   <>
//       <ul className='navbar'>
//           <li>Home</li>
//           <li>Menu</li>
//           <li>About Us</li>
//           <li>Contact</li>
//       </ul>
//   </>
// );

// const Header = () => {
//   return (
//       <>
//     <div className='header'>
//       {Title()}
//       {Nav()}
//     </div>
      
//       </>
//   );
// }
