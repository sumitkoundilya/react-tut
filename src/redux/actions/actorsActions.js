// actions/actorsActions.js
import axios from 'axios';

export const fetchActorsRequest = () => ({
  type: 'FETCH_ACTORS_REQUEST',
});

export const fetchActorsSuccess = (actors) => ({
  type: 'FETCH_ACTORS_SUCCESS',
  payload: actors,
});

export const fetchActorsFailure = (error) => ({
  type: 'FETCH_ACTORS_FAILURE',
  payload: error,
});

export const fetchActors = () => async (dispatch) => {
  dispatch(fetchActorsRequest());
  try {
    const res = await axios.get("https://swapi.dev/api/people");
    const data = res.data;

    const updatedData = await Promise.all(
      data.results.map(async (person) => {
        const movies = await Promise.all(
          person.films.map(async (filmUrl) => {
            const filmRes = await axios.get(filmUrl);
            return filmRes.data.title;
          })
        );
        return {
          ...person,
          filmsName: movies,
        };
      })
    );

    dispatch(fetchActorsSuccess(updatedData));
  } catch (error) {
    dispatch(fetchActorsFailure(error.message));
  }
};
