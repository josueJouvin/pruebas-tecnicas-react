import React, { useEffect, useState } from 'react'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [idCharacter, setIdCharacters] = useState()
  const [s, setS] = useState(false)
  const [searchPeople, setSearchPeople] = useState()
  const [numberPage, setNumberPage] = useState(1)

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${numberPage}`)
      .then(res => res.json())
      .then(people => {
        setCharacters(people.results)
      })
  }, [numberPage])

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
  const handleClick = (char) => {
    const id = char.url.split('/').slice(5, 6).join(' ')
    setIdCharacters(id)
    setS(!s)
  }
  const previousPage = () => {
    if (numberPage <= 1) return
    setNumberPage(numberPage - 1)
  }

  const nextPage = () => {
    if (numberPage >= 9) return
    setNumberPage(numberPage + 1)
  }

  return (
    <main className='w-9/12 mx-auto'>
      <h1 className='text-center text-5xl my-10'>Star Wars</h1>
      <div className='flex justify-around items-center mb-2'>
        <button onClick={previousPage} id='previous' className='p-2 border-2 border-yellow-400 hover:bg-yellow-400'>Previous</button>
        <button onClick={nextPage} className='p-2 border-2 border-yellow-400 hover:bg-yellow-400'>Next</button>
      </div>
      <form onSubmit={searchCharacter} className='flex justify-center items-center my-5 mx-auto gap-5'>
        <input className='border-2 border-violet-400 p-2' type='text' placeholder='search character' />
        <input className='border-2 border-violet-400 p-2 cursor-pointer hover:bg-violet-300' type='submit' value='Search' />
      </form>
      <div className=' grid grid-cols-responsive content-center justify-center gap-4'>
        {characters.map((char) => (
          <div className='border-2 border-violet-600' key={char.url.split('/').slice(5, 6).join(' ')}>
            <div className='flex flex-col items-center justify-center'>
              <img className='w-11/12 object-contain my-3 mx-auto' src='https://mdbootstrap.com/img/new/standard/city/010.jpg' alt={char.name + 'Picture'} />
              <p className='text-2xl text-slate-900 font-semibold'>{char.name}</p>
              <button onClick={() => handleClick(char)} className='text-violet-600 hover:text-violet-800 p-2 border-2 border-current text my-3 ml-auto mr-4'>See Details</button>
            </div>
            {
              char.url.split('/').slice(5, 6).join(' ') === idCharacter && s !== false
                ? <section className='flex flex-col gap-1 w-11/12 my-2 mx-auto'>
                  <p className='text-center font-semibold text-xl'>Details</p>
                  <span><span className='font-bold'>Name:</span> {char.name}</span>
                  <span><span className='font-bold'>Eye color:</span> {char.eye_color}</span>
                  <span><span className='font-bold'>Height:</span> {char.height} cm</span>
                </section>
                : ''
            }
          </div>
        )
        )}
      </div>
    </main>
  )
}

export default App
