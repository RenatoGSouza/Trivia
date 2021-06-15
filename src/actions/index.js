export const PLAYER = 'PLAYER';
export const GRAVATAR = 'GRAVATAR';
export const SCORE = 'SCORE';

export function playerAction(name) {
  return {
    type: PLAYER,
    payload: {
      name,
    },
  };
}

export function gravatarAction(email) {
  return {
    type: GRAVATAR,
    payload: {
      email,
    },
  };
}

export function scoreAction(score) {
  return {
    type: SCORE,
    payload: {
      score,
    },
  };
}
