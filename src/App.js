
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Component/Cart/Cart';
import Header from './Component/Header/Header';
import Player from './Component/Player Info/Player';
import playerData from './Fake Data/playerData';

function App() {
  const player10 = playerData;
  const [player, setPlayer] = useState(player10);

  const [cart, setCart] = useState([]);


  const handleAddPlayer = (player) => {
    const exist = cart.find(x => x.id === player.id);
    if (exist) {
      setCart(cart.map((x) => x.id === player.id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCart([...cart, { ...player, qty: 1 }]);
    }
  };


  useEffect(() => {
    setPlayer(playerData)
  }, [])

  return (

    <div className="App">
      <Header></Header>


      <div className="main-container">
        <div>
          {
            player.map(pr =>
              <Player
                player={pr} handleAddPlayer={handleAddPlayer} key={player.id} >

              </Player>)
          }
        </div>
        <div>
          <Cart cart={cart}></Cart>
        </div>

      </div>
    </div>
  );
}

export default App;
