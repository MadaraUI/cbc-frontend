import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Madara Perera</h1>
      <ProductCard name="Apple ipad" price="$499" image="https://www.apple.com/assets-www/en_WW/ipad/product_tile/xlarge/ipad_pro_1df5448cd_2x.png"/>
      <ProductCard name="Macbook Pro" price="$1499" image="https://www.apple.com/v/macbook-pro/as/images/overview/contrast/product_tile_mbp_14_16__f759zoojn1qy_large_2x.png"/>
      
    </>
  )
}

export default App
