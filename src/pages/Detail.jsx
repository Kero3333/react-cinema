import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Casting } from "../components/casting/Casting";

export const Detail = () => {
  const { name } = useParams();
  const [infos, setInfos] = useState({});

  useEffect(() => {
    fetch(`https://api.tvmaze.com/singlesearch/shows?q=${name}&embed=cast`)
      .then((res) => res.json())
      .then((data) => setInfos(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(infos);
  return (
    <div className="detail">
      <h1>{infos.name}</h1>
      <div className="note">
        <h2>Note</h2>
        <span> : {infos.rating?.average} / 10</span>
      </div>
      <img src={infos.image?.original} alt={infos.name} />
      <div className="summary">
        <h2>Summary</h2>
        <p>{infos.summary?.split("<p>")[1].split("<")[0]}</p>
      </div>
      <Casting persons={infos._embedded?.cast} />
    </div>
  );
};
