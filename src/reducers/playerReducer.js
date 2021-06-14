const PLAYER_INITIAL_STATE = {
  playerGravatar: '',
  playerName: '',
  playerScore: 0,
 };

function playerReducer(state = PLAYER_INITIAL_STATE, action) {
  switch (action.type) {
    case 'PLAYER':
    return {
      ...state,
      playerName: action.payload.name,
    };
    case 'GRAVATAR':
      return {
        ...state,
        playerGravatar: action.payload.email,
      }
    case 'SCORE':
      return {
        ...state,
        playerScore: action.payload.score,
      }
    default:
      return state;
  }
 }

 export default playerReducer;