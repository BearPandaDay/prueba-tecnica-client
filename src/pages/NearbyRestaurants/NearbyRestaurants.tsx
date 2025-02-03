import { FoodCard } from "../../components";
import imgrestaurantjpg from "../../assets/png/imgrestaurant.jpg";

import "./NearbyRestaurants.scss";

export function NearbyRestaurants() {
  return (
    <div className="father-content-nearbyrestants">
      <div className="father-content-nearbyrestants__header">
        <h2 style={{textAlign: "center"}}>Nearby Restaurants</h2>
      </div>
      <div className="father-content-nearbyrestants__body">
        <FoodCard
          image={imgrestaurantjpg}
          name="LA SERRATA"
          address="Calle 16B #15-24 Centro - Cartagena/Bolívar"
          foodType="Italiana"
        />
      </div>
    </div>
  )
}
