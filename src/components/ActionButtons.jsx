import Button from './Button'

const ActionButtons = ({
  onGenerateJoke,
  onCopyToClipboard,
  isLoading,
  hasJoke,
  copied,
}) => (
  <div className="button-row">
    <Button
      className="primary-btn"
      onClick={onGenerateJoke}
      disabled={isLoading}
    >
      {isLoading ? 'Fetching...' : 'Generate Joke'}
    </Button>

    <Button
      className="secondary-btn"
      onClick={onCopyToClipboard}
      disabled={!hasJoke || isLoading}
    >
      {copied ? 'Joke Copied!' : 'Copy to Clipboard'}
    </Button>
  </div>
)

export default ActionButtons
