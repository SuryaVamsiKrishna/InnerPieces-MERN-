import "./BookAppScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Doctorlist from "../components/Doctorlist";

//Actions
import { getDoctorlists as listProducts } from "../redux/actions/doctorlistActions";

const BookAppScreen = () => {
  const dispatch = useDispatch();

  const getDoctorlists = useSelector((state) => state.getDoctorlists);
  const { doctorlists, loading, error } = getDoctorlists;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Therepists and Psychologists</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          doctorlists.map((doctorlists) => (
            <Doctorlist
              key={doctorlists._id}
              name={doctorlists.name}
              description={doctorlists.description}
              price={doctorlists.price}
              imageUrl={doctorlists.imageUrl}
              doctorlistId={doctorlists._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BookAppScreen;
