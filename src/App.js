import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import Logo from './components/Logo'
import FullName from './components/FullName'
import Selector from './components/Selector'

function App() {
  const [selectedColor, setSelectedColor] = useState(1)
  const [selectedFont, setSelectedFont] = useState(2)
  const [bgColor, setBgColor] = useState('#000')
  const [fontColor, setFontColor] = useState('#fff')
  const [fontFace, setFontFace] = useState('blackjack')

  const colorOptions = [
    {
      id: 1,
      text: 'White on Black',
      bgColor: '#000',
      fontColor: '#fff'
    },
    {
      id: 2,
      text: 'White on Medium Blue',
      bgColor: '#0052a4',
      fontColor: '#fff'
    },
    {
      id: 3,
      text: 'White on Medium Red',
      bgColor: '#9c2020',
      fontColor: '#fff'
    },
    {
      id: 4,
      text: 'White on Dark Blue',
      bgColor: '#002e5d',
      fontColor: '#fff'
    },
    {
      id: 5,
      text: 'White on Dark Green',
      bgColor: '#224022',
      fontColor: '#fff'
    },
    {
      id: 6,
      text: 'White on Dark Purple',
      bgColor: '#402859',
      fontColor: '#fff'
    },
    {
      id: 7,
      text: 'Light Blue on Medium Blue',
      bgColor: '#0052a4',
      fontColor: '#99ccff'
    }
  ]

  const fontOptions = [
    {
      id: 1,
      text: 'Milkshake',
      fontFace: 'milkshake'
    },
    {
      id: 2,
      text: 'Black Jack',
      fontFace: 'blackjack'
    },
    {
      id: 3,
      text: 'Fabfelt Script',
      fontFace: 'fabfelt'
    }
  ]

  useEffect(() => {
    const _selected = colorOptions.find(opt => opt.id === selectedColor)
    setBgColor(_selected.bgColor)
    setFontColor(_selected.fontColor)
  }, [selectedColor, colorOptions])

  useEffect(() => {
    const _selected = fontOptions.find(opt => opt.id === selectedFont)
    setFontFace(_selected.fontFace)
  }, [selectedFont, fontOptions])

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
