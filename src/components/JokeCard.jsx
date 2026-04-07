const JokeCard = ({ joke, isLoading }) => {
  const displayedJoke = joke || 'Tap Generate Joke to get started.'

  return (
    <article className="joke-card" aria-live="polite">
      <h2 className="joke-card-title">Your Dad Joke</h2>
      {isLoading ? (
        <p className="joke-text loading-text">Summoning a dad from the thermostat...</p>
      ) : (
        <p className="joke-text">{displayedJoke}</p>
      )}
    </article>
  )
}

export default JokeCard
