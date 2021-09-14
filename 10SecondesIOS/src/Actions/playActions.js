export const SET_PLAYERS_OK = "SET_PLAYERS_OK";
export const SET_PLAYER = "SET_PLAYER";
export const SET_NUMBER_PLAYERS = "SET_NUMBER_PLAYERS";
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_PLAYER_INDEX = "SET_PLAYER_INDEX";
export const SET_RAPPEL = "SET_RAPPEL";
export const SET_VALUE = "SET_VALUE";
export const SET_QUESTIONS = "SET_QUESTIONS";
export const SET_QUESTION_INDEX = "SET_QUESTION_INDEX";

export const setPlayersOk = (data) => {
  return {
    type: SET_PLAYERS_OK,
    payload: data,
  };
};
export const setRappel = (bool) => {
  return {
    type: SET_RAPPEL,
    payload: bool,
  };
};
export const setValue = (value) => {
  return {
    type: SET_VALUE,
    payload: value,
  };
};
export const setPlayerIndex = (playerindex) => {
  return {
    type: SET_PLAYER_INDEX,
    payload: playerindex,
  };
};

export const setPlayer = (player) => {
  return {
    type: SET_PLAYER,
    payload: player,
  };
};
export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    payload: category,
  };
};
export const setNumberPlayers = (number) => {
  return {
    type: SET_NUMBER_PLAYERS,
    payload: number,
  };
};

export const setQuestions = (data) => {
  return {
    type: SET_QUESTIONS,
    payload: data,
  };
};

export const setQuestionIndex = (questionindex) => {
  return {
    type: SET_QUESTION_INDEX,
    payload: questionindex,
  };
};


export const setplayersok = (data) => {
  return (dispatch) => {
    dispatch(setPlayersOk(data));
  };
};

export const setnumberplayers = (number) => {
  return (dispatch) => {
    dispatch(setNumberPlayers(number));
  };
};

export const setplayer = (player) => {
  return (dispatch) => {
    dispatch(setPlayer(player));
  };
};

export const setvalue = (value) => {
  return (dispatch) => {
    dispatch(setValue(value));
  };
};
export const setcategory = (category) => {
  return (dispatch) => {
    dispatch(setCategory(category));
  };
};

export const setplayerindex = (playerindex) => {
  return (dispatch) => {
    dispatch(setPlayerIndex(playerindex));
  };
};
export const setrappel = (bool) => {
  return (dispatch) => {
    dispatch(setRappel(bool));
  }};
export const setquestions = (data) => {
  return (dispatch) => {
    dispatch(setQuestions(data));
  };
};
export const setquestionindex = (questionindex) => {
  return (dispatch) => {
    dispatch(setQuestionIndex(questionindex));
  };
};
