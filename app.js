    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import resList from "./data.json";

/***
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search-
 *  -RestaurantContainer
 *      -RestaurantCard
 *          -Img
 *          -Name of Res, stars Rating, cusines, delivery time, cost for two
 * Footer
 *  -copyright
 *  -link
 *  -Address
 *  -Contact
 * 
 * 
*/
const Header=()=>{
    return(
        <div className="header">
            <div className="logo">
                <img src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png"
                 alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>                  
                    <li>Contact</li>
                      <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard=(props)=>{  
    console.log(props);
    const{resData}=props;
    const{cloudinaryImageId,name, avgRating,cuisines,costForTwo, deliveryTime }=resData?.data || {};
    return(
        <div className="res-card" style={{ backgroundColor: "#f0f0f0", borderRadius: "5px" }}>
            <img className='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/6872a1fc-f7e6-4433-b8c7-6f085567689a_900503.JPG" alt="Restaurant" />
             {/* <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resData.data.cloudinaryImageId
        }
      /> */}
            <h3>{name}</h3>
            <h4>Cuisines: {cuisines.join(", ")}</h4>
            <h4>Rating: {avgRating}</h4>
            <h4>Cost for Two: ${costForTwo/100} </h4>  
            <h4>Delivery Time: {resData.data.deliveryTime} mins</h4>
                      
            
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                  {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
              
             
              
            </div>
        </div>
    )
}

 const AppLayout=()=>{
    return(
        <div className='app'>  
            <Header />
            <Body />
        </div>
    )
}   
    

    const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(<AppLayout/>);