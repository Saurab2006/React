const JokeStatus = ({ metaText, errorMessage }) => (
  <section aria-live="polite">
    <p className="meta-text">{metaText}</p>
    {errorMessage ? <p className="error-text">{errorMessage}</p> : null}
  </section>
)

export default JokeStatus
