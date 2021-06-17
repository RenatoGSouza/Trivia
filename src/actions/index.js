export const PLAYER = 'PLAYER';
export const GRAVATAR = 'GRAVATAR';
export const SCORE = 'SCORE';
export const ASSERTIONS = 'ASSERTIONS';

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

export function assertionsAction() {
  return {
    type: ASSERTIONS,
    amount: 1,
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
