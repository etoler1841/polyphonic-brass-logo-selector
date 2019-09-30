import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import Logo from './components/Logo'
import FullName from './components/FullName'
import Selector from './components/Selector'

import colorOptions from './static/colors.json'
import fontOptions from './static/fonts.json'

function App() {
  const [selectedColor, setSelectedColor] = useState(1)
  const [selectedFont, setSelectedFont] = useState(2)
  const [bgColor, setBgColor] = useState('#000')
  const [fontColor, setFontColor] = useState('#fff')
  const [fontFace, setFontFace] = useState('blackjack')

  useEffect(() => {
    const color = Math.ceil(Math.random() * colorOptions.length)
    const font = Math.ceil(Math.random() * fontOptions.length)
    setSelectedColor(color)
    setSelectedFont(font)
  }, [])

  useEffect(() => {
    const _selected = colorOptions.find(opt => opt.id === selectedColor)
    setBgColor(_selected.bgColor)
    setFontColor(_selected.fontColor)
  }, [selectedColor])

  useEffect(() => {
    const _selected = fontOptions.find(opt => opt.id === selectedFont)
    setFontFace(_selected.fontFace)
  }, [selectedFont])

  return (
    <div
      style={{
        width: '100%'
      }}
    >
      <Card
        style={{
          width: 400,
          margin: '25px auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Logo bgColor={bgColor} fontFace={fontFace} fontColor={fontColor} />
        <FullName fontFace={fontFace} />
        <div style={{ width: '100%' }}>
          <Selector
            options={colorOptions}
            selected={selectedColor}
            setSelected={setSelectedColor}
          />
          <Selector
            options={fontOptions}
            selected={selectedFont}
            setSelected={setSelectedFont}
          />
        </div>
      </Card>
    </div>
  )
}

export default App
