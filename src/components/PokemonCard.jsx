import React from 'react'

const PokemonCard = ({ pokemon, text, onClick }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>
        <img src={pokemon?.sprites?.back_default} alt={pokemon?.id} />
      </div>
      <div>
        <p data-testid="pokemonName">{pokemon?.name}</p>
        <p>{pokemon?.id}</p>
      </div>
      <div style={{ paddingLeft: 30 }}>
        <button onClick={onClick}>{text}</button>
      </div>
    </div>
  )
}

export default PokemonCard
