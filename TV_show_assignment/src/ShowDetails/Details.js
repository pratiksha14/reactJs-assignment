import { Fragment } from "react";
import noImage from "../asset/No_Image_Available.jpg";

const Details = (props) => {
  const {
    season,
    airdate,
    runtime,
    rating,
    summary,
    name,
    image,
    _embedded
  } = props.selectedShow;
  const {
    show: {
      type,
      language,
      genres = [],
      webChannel: { name: WebChannelName } = {},
      officialSite,
      schedule: { time, days } = {},
      summary: showSummary
    }
  } = _embedded;

  const getArrayData = (item) => {
    let genresString = "";
    item.map((val, ind) => {
      genresString += `${val}`;
      if (ind !== genres.length - 1) {
        genresString += ", ";
      }
      return genresString;
    });
    return genresString;
  };

  const displayImg = image && image.original ? image.original : noImage;

  return (
    <Fragment>
      <h2>{name}</h2>
      <div
        className="sub-heading"
        dangerouslySetInnerHTML={{ __html: summary }}
      />
      <form className="content">
        <img src={displayImg} alt={name} />
        <div className="info">
          <p>Season: {season}</p>
          <p>Premiered Date: {airdate}</p>
          <p>Duration: {runtime} mins</p>
          {rating.average && (
            <p>
              Rating: <span className="fa fa-star checked" />
              <span>{rating.average}</span>
            </p>
          )}
          <p>Type: {type}</p>
          <p>Language: {language}</p>
          <p>
            Official Site:{" "}
            <a href={officialSite} target="_blank" rel={name}>
              Click here
            </a>
          </p>
          <p>Genres: {getArrayData(genres)}</p>
          {time && <p>Telecast Time: {time}</p>}
          {!!days.length && <p>Telecast Day: {getArrayData(days)}</p>}
          <p>Web Channel: {WebChannelName}</p>
        </div>
      </form>
      <div
        className="summary"
        dangerouslySetInnerHTML={{ __html: showSummary }}
      />
    </Fragment>
  );
};

export default Details;
