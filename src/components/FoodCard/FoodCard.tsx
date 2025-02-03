import "./FoodCard.scss";

export function FoodCard({ 
  image, 
  name, 
  address,
  foodType 
}) {
  return (
    <div className="content-target-foodcard">
      <div className="content-target-foodcard__image">
        <img src={image} alt="image" />
      </div>

      <div className="content-target-foodcard__body">
        <hr />
        <h2>{name}</h2>
        <div className="content-target-foodcard__body__content-data">
          <div className="content-foottype-address">
            <div className="title">
              <h4>Foot Type: </h4>
            </div>
            <div className="description">
              <h5>{foodType}</h5>
            </div>
          </div>

          <div className="content-foottype-address">
            <div className="title">
              <h4>Address: </h4>
            </div>
            <div className="description">
              <h5>{address}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
