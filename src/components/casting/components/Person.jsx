export const Person = ({ person }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="person-infos" onClick={handleClick}>
        <h3>{person.person.name}</h3>
        <div className="main-infos">
          <span>Birthday : {person.person.birthday}</span>
          <div className="nationality">
            <span>Nationality : {person.person.country.name}</span>
            <img
              src={`https://countryflagsapi.com/png/${person.person?.country.code}`}
            />
          </div>
        </div>
        <div className="character">
          <span>Character played : {person.character.name}</span>
          <a href={person.character.url}>
            <img
              src={person.character.image?.medium}
              alt={person.character.name}
            />
          </a>
        </div>
      </div>
    </>
  );
};
