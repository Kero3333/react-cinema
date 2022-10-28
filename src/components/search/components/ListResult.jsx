import { Link } from "react-router-dom";

export const ListResult = ({ results }) => {
  return (
    <div className="results">
      {results.map((el, index) => {
        return (
          <div className="result" key={index}>
            <Link to={`/result/${el.show.name}`}>
              <h2>{el.show.name}</h2>
              <img src={el.show.image.medium} alt={el.show.name} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
