import { useEffect, useState } from 'react'
import ActionButtons from './components/ActionButtons'
import JokeCard from './components/JokeCard'
import JokeStatus from './components/JokeStatus'
import PageHeader from './components/PageHeader'
import { fetchDadJoke } from './services/jokeService'
import './App.css'

const App = () => {
  const [joke, setJoke] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [copied, setCopied] = useState(false)

  const hasJoke = Boolean(joke)
  const jokeMetaText = hasJoke
    ? `${joke.length} characters of pure cringe.`
    : 'Waiting for a joke...'

  const fetchNewJoke = async () => {
    setErrorMessage('')
    setCopied(false)
    setIsLoading(true)

    try {
      const nextJoke = await fetchDadJoke()
      setJoke(nextJoke)
    } catch (err) {
      setErrorMessage(err?.message || 'Something went wrong while fetching a joke.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    void fetchNewJoke()
  }, [])

  const handleGenerateJoke = async () => {
    await fetchNewJoke()
  }

  const handleCopyToClipboard = async () => {
    if (!joke) return

    try {
      await navigator.clipboard.writeText(joke)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="layout-wrapper">
      <PageHeader />

      <main className="app-shell">
        <JokeCard joke={joke} isLoading={isLoading} />

        <ActionButtons
          onGenerateJoke={handleGenerateJoke}
          onCopyToClipboard={handleCopyToClipboard}
          isLoading={isLoading}
          hasJoke={hasJoke}
          copied={copied}
        />

        <JokeStatus metaText={jokeMetaText} errorMessage={errorMessage} />
      </main>
    </div>
  )
}

export default App
