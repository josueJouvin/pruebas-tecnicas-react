import React from 'react'

const Pager = ({ numberPage, setNumberPage }) => {
  const previousPage = () => {
    if (numberPage <= 1) return
    setNumberPage(numberPage - 1)
  }

  const nextPage = () => {
    if (numberPage >= 9) return
    setNumberPage(numberPage + 1)
  }

  return (
    <div className='flex justify-around items-center mb-2'>
      <button onClick={previousPage} id='previous' className='p-2 border-2 border-yellow-400 hover:bg-yellow-400'>Previous</button>
      <button onClick={nextPage} className='p-2 border-2 border-yellow-400 hover:bg-yellow-400'>Next</button>
    </div>
  )
}

export default Pager
