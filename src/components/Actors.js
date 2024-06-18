import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchActors } from '../redux/actions/actorsActions';

const Actors = ({ setHeader }) => {
  const dispatch = useDispatch();
  const actorsState = useSelector(state => state.actors);

  useEffect(() => {
    setHeader("Actors Details");
    if (!actorsState.actors.length) { // Check if actors are already loaded
      dispatch(fetchActors());
    }
  }, [dispatch, setHeader, actorsState.actors.length]); // Dependency array includes actorsState.actors.length

  if (actorsState.loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul>
        {actorsState.actors.map((person) => (
          <li key={person.name}>
            <div>
              <h2>{person.name}</h2>
              <h5>Gender : {person.gender}</h5>
              <h5>Birth Year : {person.birth_year}</h5>
              <h5>Eye Colour : {person.eye_color}</h5>
            </div>
            <div>
              <ul>
                {person.filmsName.map((film, index) => (
                  <li key={index}>{film}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Actors;
