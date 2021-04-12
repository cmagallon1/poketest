import React, { useState, useEffect  } from 'react'
import PokemonCard from './PokemonCard'

const Dashboard = () => {
  const [state, setState] = useState('')
  const [party, setParty] = useState([])
  const [error, setError] = useState('test')
  const [pokemon, setPokemon] = useState(null)

  const handleChange = e => setState(e.target.value)

  const handleFindPokemon = async () => {
    try {
      if (state !== pokemon?.name) {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${state}`)
        const data = await pokemon.json()
        setPokemon(data)
      }
    } catch (e) {
      setError("The pokemon you're looking for doesn't exists")
      console.log(e, 'error')
    }
  }

  const handleCatchPokemon = e => {
    if (party.length < 6) {
      setParty(party => [...party, pokemon])
    }
  }

  const handleReleasePokemon = index => () => {
    const newParty = [...party]
    newParty.splice(index, 1)
    setParty(newParty)
  }

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError('')
      }, 4000)
    }
  }, [error])

  return (
    <>
      <div>
        <input data-testid="searchInput" type="text" onChange={handleChange} value={state} />
        <button onClick={handleFindPokemon}>Find</button>
        {error && <p>{error}</p>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          {pokemon && (
            <>
              <p>Found pokemon</p>
              <PokemonCard pokemon={pokemon} text="Catch" onClick={handleCatchPokemon} />
            </>
          )}
        </div>
      </div>
      <p>Party</p>
      <div style={{ display: 'grid', gridTemplateColumns: '20% 20%' }}>
        {party.map((pok, index) => (
          <PokemonCard key={index} pokemon={pok} text="Release" onClick={handleReleasePokemon(index)} />
        ))} 
      </div>
    </>
  )
}

export default Dashboard
