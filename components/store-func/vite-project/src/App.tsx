import './App.css'
import {ShopItemFunc} from "./components/ShopItemFunc.tsx";
import {ShopItemType} from "./components/types.ts";

function App() {
  const item: ShopItemType = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

  return (
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemFunc {...item}/>
        </div>
      </div>
  );
}

export default App
