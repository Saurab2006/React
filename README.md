# Dad Joke Generator (React + Vite)

A simple workshop-friendly React app that fetches random dad jokes from the [icanhazdadjoke API](https://icanhazdadjoke.com/api).

## Run locally

```bash
npm install
npm run dev
```

## Project structure

```text
src/
	components/
		ActionButtons.jsx      # Buttons for fetching and copying jokes
		JokeCard.jsx           # UI card that displays the joke
	services/
		jokeService.js         # API request layer
	App.jsx                  # Main page composition
	App.css                  # Component/page styles
	index.css                # Global styles and theme variables
	main.jsx                 # App entry point
```

## Workshop talking points

1. Why split logic into `components`, `hooks`, and `services`.
2. Handling async data with loading and error states.
3. Basic UX improvements like disabled buttons and copy-to-clipboard.
