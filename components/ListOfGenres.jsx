import React from 'react'

function ListOfGenres({ listGenres }) {
    return (
        <ul className='list-of-genres flex flex-col md:flex-row md:items-center gap-2'>
            {
                listGenres.map((genre, idx) => <span key={idx} className='py-1 px-2 border rounded-md'>{genre.name}</span>)
            }
        </ul>
    )
}

export default ListOfGenres;