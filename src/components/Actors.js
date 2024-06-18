import { useEffect, useState } from "react";

export default function Actors({ setHeader }) {
  const [peoples, setPeoples] = useState([]);
  const [loading, setLoading] = useState(true);

  setHeader("Actors Details");

  useEffect(() => {
    async function getDetails() {
      const res = await fetch("https://swapi.dev/api/people");
      const data = await res.json();

      const updatedData = await Promise.all(
        data.results.map(async (person) => {
          const movies = await Promise.all(
            person.films.map(async (filmUrl) => {
              const filmRes = await fetch(filmUrl);
              const filmData = await filmRes.json();
              return filmData.title;
            })
          );
          return {
            ...person,
            filmsName: movies,
          };
        })
      );

      setPeoples(updatedData);
      setLoading(false);
    }

    getDetails();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {peoples.map((person) => (
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
      )}
    </>
  );
}
