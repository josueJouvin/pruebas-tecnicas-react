import React, { useEffect, useState } from 'react'
import Pager from './Components/Pager'
import SearchCharacter from './Components/SearchCharacter'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [idCharacter, setIdCharacters] = useState()
  const [showDetails, setShowDetails] = useState(false)
  const [numberPage, setNumberPage] = useState(1)

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${numberPage}`)
      .then(res => res.json())
      .then(peoples => {
        setCharacters(peoples.results)
      })
  }, [numberPage])

  const handleClick = (char) => {
    const id = char.url.split('/').slice(5, 6).join(' ')
    setIdCharacters(id)
    setShowDetails(!showDetails)
  }

  return (
    <main className='w-9/12 mx-auto'>
      <h1 className='text-center text-5xl my-10'>Star Wars</h1>
      <Pager numberPage={numberPage} setNumberPage={setNumberPage} />
      <SearchCharacter setCharacters={setCharacters} />
      <div className=' grid grid-cols-responsive content-center justify-center gap-4'>
        {characters.map((char) => (
          <div className='border-2 border-violet-600' key={char.url.split('/').slice(5, 6).join(' ')}>
            <div className='flex flex-col items-center justify-center'>
              <img className='w-11/12 object-contain my-3 mx-auto' src='https://mdbootstrap.com/img/new/standard/city/010.jpg' alt={char.name + 'Picture'} />
              <p className='text-2xl text-slate-900 font-semibold'>{char.name}</p>
              <button onClick={() => handleClick(char)} className='text-violet-600 hover:text-violet-800 p-2 border-2 border-current text my-3 ml-auto mr-4'>See Details</button>
            </div>
            {
              char.url.split('/').slice(5, 6).join(' ') === idCharacter && showDetails !== false
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
