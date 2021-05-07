import "./Doctorlist.css";
import { Link } from "react-router-dom";

const Doctorlist = ({ imageUrl, description, price, name, doctorlistId, experience, hospital }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">${price}</p>

        <Link to={`/Booking`} className="info__button">
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default Doctorlist;
