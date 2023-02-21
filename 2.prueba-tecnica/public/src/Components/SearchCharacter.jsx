import { useState, useEffect } from 'react'

const SearchCharacter = ({ setCharacters }) => {
  const [searchPeople, setSearchPeople] = useState('')

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?search=${searchPeople}`)
      .then(s => s.json())
      .then(r => {
        setCharacters(r.results)
      })
  }, [searchPeople])

  const searchCharacter = (e) => {
    e.preventDefault()
    const p = e.target[0].value
    setSearchPeople(p)
  }

  return (
    <form onSubmit={searchCharacter} className='flex justify-center items-center my-5 mx-auto gap-5'>
      <input className='border-2 border-violet-400 p-2' type='text' placeholder='search character' />
      <input className='border-2 border-violet-400 p-2 cursor-pointer hover:bg-violet-300' type='submit' value='Search' />
    </form>
  )
}

export default SearchCharacter
