export async function triviaAPI() {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const trivia = await response.json();
  return trivia;
}

export async function triviaPerguntas() {
  const { token } = await triviaAPI();
  const response = await fetch(`https://opentdb.com/api.php?amount=10&category=15&token=${token}`);
  const perguntas = await response.json();
  return perguntas;
}
