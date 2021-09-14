import {
  SET_PLAYERS_OK,
  SET_PLAYER,
  SET_CATEGORY,
  SET_NUMBER_PLAYERS,
  SET_PLAYER_INDEX,
  SET_RAPPEL,
  SET_VALUE,
  SET_QUESTIONS,
  SET_QUESTION_INDEX,
} from "../Actions/playActions";
/*{
  dbname: "Aléatoire",
  image: 34,
  name: "Aléatoire",
}*/
// init state for game
const initState = {
  play: "hhhhhhh",
  numberPlayers: 0,
  playersok: {},
  player: {},
  category: {},
  playerindex: 0,
  value: 1,
  rappel: true,
  questions: {},
  questionindex: 0,
};

// the sign up reducer
const playReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PLAYERS_OK:
      return {
        ...state,
        play: "hihihihi",
        playersok: action.payload,
      };
    case SET_NUMBER_PLAYERS:
      return {
        ...state,
        numberPlayers: action.payload,
      };
    case SET_PLAYER:
      return {
        ...state,
        player: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case SET_PLAYER_INDEX:
      return {
        ...state,
        playerindex: action.payload,
      };
    case SET_RAPPEL:
      return {
        ...state,
        rappel: action.payload,
      };
    case SET_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case SET_QUESTION_INDEX:
      return {
        ...state,
        questionindex: action.payload,
      };

    default:
      return state;
  }
};

export default playReducer;
