// reducers/actorsReducer.js
const initialState = {
   actors: [],
   loading: false,
   error: null,
 };
 
 const actorsReducer = (state = initialState, action) => {
   switch (action.type) {
     case 'FETCH_ACTORS_REQUEST':
       return {
         ...state,
         loading: true,
       };
     case 'FETCH_ACTORS_SUCCESS':
       return {
         ...state,
         loading: false,
         actors: action.payload, // Assuming payload is an array of actors
       };
     case 'FETCH_ACTORS_FAILURE':
       return {
         ...state,
         loading: false,
         error: action.payload, // Assuming payload is an error message
       };
     default:
       return state;
   }
 };
 
 export default actorsReducer;
 