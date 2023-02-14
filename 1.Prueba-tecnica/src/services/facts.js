const FACTS_API = 'https://catfact.ninja/fact'

export const randomFact = async () => {
  const res = await fetch(FACTS_API)
  const data = await res.json()
  const { fact } = data
  return fact
}
