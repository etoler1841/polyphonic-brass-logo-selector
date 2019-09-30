import React from 'react'

const Selector = ({ options, selected, setSelected }) => {
  return (
    <div>
      <select
        value={selected}
        onChange={e => setSelected(parseInt(e.target.value))}
        style={{
          fontSize: '1.05rem',
          width: '100%',
          padding: '.5em',
          borderRadius: 5,
          margin: '.5em 0',
          fontFamily: 'Helvetica, Arial, sans-serif'
        }}
      >
        {options
          .sort((a, b) => {
            if (a.text.toUpperCase() < b.text.toUpperCase()) return -1
            if (a.text.toUpperCase() > b.text.toUpperCase()) return 1
            return 0
          })
          .map(opt => (
            <option key={opt.id} value={opt.id}>
              {opt.text}
            </option>
          ))}
      </select>
    </div>
  )
}

export default Selector
