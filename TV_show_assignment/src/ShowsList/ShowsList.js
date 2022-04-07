import { Fragment, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./ShowsList.scss";

const ShowsList = () => {
  const showsList = useSelector((state) => state.shows.showsList);
  const navigate = useNavigate();
  const [showData, setShowData] = useState([]);
  const [isSearch, setSearch] = useState(false);
  const inputRef = useRef();

  const data = isSearch ? showData : showsList;

  const onSearchClick = () => {
    setSearch(true);
    let searchedShow;
    if (inputRef.current.value !== "") {
      searchedShow = showsList.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(inputRef.current.value.toLowerCase());
      });
      setShowData(searchedShow);
    } else {
      setSearch(false);
    }
  };

  const navigateToShowDetails = (id, name) => {
    navigate(`/${name}`, { state: { showId: id } });
  };

  return (
    <Fragment>
      <div className="search">
        <input type="text" ref={inputRef} />
        <button onClick={onSearchClick}>Search</button>
      </div>
      <div className="flex-container">
        {data.map((item) => (
          <div
            className="show-card"
            key={item.id}
            onClick={() => navigateToShowDetails(item.id, item.name)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ShowsList;
