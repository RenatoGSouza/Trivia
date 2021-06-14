export default async function triviaAPI() {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const trivia = await response.json();
  return trivia;
}
