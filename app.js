    import React from 'react';
    import ReactDOM from 'react-dom/client';

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
    const{resName,cusines}=props;
    return(
        <div className="res-card" style={{ backgroundColor: "#f0f0f0", borderRadius: "5px" }}>
            <img className='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/6872a1fc-f7e6-4433-b8c7-6f085567689a_900503.JPG" alt="Restaurant" />
            <h3>{resName}</h3>
            <h4>Cuisines: {cusines}</h4>
            <h4>Rating: 4.5</h4>
            <h4>Delivery Time: 30-45 mins</h4>
            <h4>Cost for Two: $20</h4>            
            
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
               <RestaurantCard resName="Pizza Place" cusines="Italian, Chinese" rating={4.5} deliveryTime="30-45 mins" costForTwo="$20" />
               <RestaurantCard resName="Burger King" cusines="American, Fast Food" rating={4.0} deliveryTime="20-30 mins" costForTwo="$15" />
               <RestaurantCard resName="Sushi Master" cusines="Japanese, Sushi" rating={4.8} deliveryTime="40-50 mins" costForTwo="$25" />
               <RestaurantCard resName="Taco Bell" cusines="Mexican, Fast Food" rating={4.2} deliveryTime="15-25 mins" costForTwo="$12" />
                 
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