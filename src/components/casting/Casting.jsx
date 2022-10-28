import { useEffect, useState } from "react";
import { Person } from "./components/Person";

export const Casting = ({ persons }) => {
  // see more of the casting
  const [buttonIsClicked, setButtonIsClicked] = useState(false);
  const [maxCast, setMaxCast] = useState(3);

  const handleClick = (e) => {
    buttonIsClicked ? setButtonIsClicked(false) : setButtonIsClicked(true);
    setMaxCast(buttonIsClicked ? persons.length : 3);
  };

  // more informations about a person
  const [rootIsClicked, setRootIsClicked] = useState(false);
  const [personToDisplay, setPersonToDisplay] = useState({});

  const displayPerson = (e, person) => {
    e.stopPropagation();
    setPersonToDisplay(person);
  };

  const refreshRootIsClicked = (e) => {
    if (document.querySelector(".person-infos") !== null && rootIsClicked) {
      setRootIsClicked(false);
      setPersonToDisplay({});
    } else if (
      document.querySelector(".person-infos") == null &&
      !rootIsClicked
    ) {
      setRootIsClicked(true);
    } else {
      rootIsClicked ? setRootIsClicked(false) : setRootIsClicked(true);
    }
    document
      .querySelector("#root")
      .removeEventListener("click", refreshRootIsClicked);
  };

  useEffect(() => {
    document
      .querySelector("#root")
      .removeEventListener("click", refreshRootIsClicked);
    document
      .querySelector("#root")
      .addEventListener("click", refreshRootIsClicked);
  }, [rootIsClicked]);

  return (
    <div className="casting">
      <h2>Casting</h2>
      <div className="persons">
        {persons?.map((person, index) => {
          if (index < maxCast) {
            return (
              <div
                className="person"
                key={index}
                onClick={(e) => displayPerson(e, person)}
              >
                <h3>{person.person.name}</h3>
                <img src={person.person.image.medium} />
              </div>
            );
          } else {
            return false;
          }
        })}
        {Object.keys(personToDisplay).length > 1 ? (
          <Person person={personToDisplay} />
        ) : (
          ""
        )}
      </div>
      <button onClick={handleClick}>
        {buttonIsClicked ? "See less" : "See more"}
      </button>
    </div>
  );
};
