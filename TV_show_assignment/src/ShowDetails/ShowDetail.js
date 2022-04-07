import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Details from "./Details";
import "./ShowDetails.scss";

const ShowDetails = (props) => {
  const navigate = useNavigate();
  const showsList = useSelector((state) => state.shows.showsList);
  const { state: { showId = "" } = {} } = useLocation();
  const { name } = useParams();

  const selectedShow = showsList.filter((item) => item.id === +showId);

  const navigateToHome = () => {
    navigate(`/`);
  };

  return (
    <div className="show-details">
      <button onClick={navigateToHome}>Back</button>
      {selectedShow.map((item) => (
        <Details key={`${showId}_${name}`} selectedShow={item} />
      ))}
    </div>
  );
};

export default ShowDetails;
