import { NavLink } from "react-router-dom";
import Rating from "./Rating";
import FoodAndDrinkList from "./FoodAndDrinkList";
import AdminButton from "./AdminButton";
import { useNavigate } from "react-router-dom";
import { formatDistance } from "../services/Utils";
const Venue = ({ venue, admin }) => {
  var navigate = useNavigate();
  const performClick = (evt) => {
    // Eğer güncelleme butonuna basılırsa navigate et ve venue id değerini gönder
    if (evt.target.name === "Güncelle")
      return navigate("/admin/addupdate", { state: { venue } });
  };
  return (
    <div className="list-group">
      <div className="col-xs-12 col-sm-12">
        <div className="col-xs-12 list-group-item">
          <h4>
            <NavLink to={`/venue/${venue.id}`} state={{ id: venue.id }}>
              {venue.name}{" "}
            </NavLink>
            <Rating rating={venue.rating} />
          </h4>
          <span className="span badge pull-right badge-default">
            {!admin ? formatDistance(venue.distance) : ""}
          </span>
          {admin ? (
            <AdminButton type="primary" name="Sil" onClick={performClick} />
          ) : (
            ""
          )}
          {admin ? (
            <AdminButton type="info" name="Güncelle" onClick={performClick} />
          ) : (
            ""
          )}
          <p className="address"> {venue.address}</p>
          <p>
            <FoodAndDrinkList foodAndDrinkList={venue.foodanddrink} />
          </p>
        </div>
      </div>
    </div>
  );
};
export default Venue;
