const API_URL = 'https://icanhazdadjoke.com/'

export async function fetchDadJoke() {
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Could not fetch a dad joke right now.')
  }

  const data = await response.json()
  return data.joke
}
