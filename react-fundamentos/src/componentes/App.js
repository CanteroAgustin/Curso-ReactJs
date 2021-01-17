import React from 'react';
import TarjetaFruta from './TarjetaFruta';

const App = () => (
    <div>
        <TarjetaFruta name="Sandia" price={3.00} />
        <TarjetaFruta name="Naranja" price={2.00} />
        <TarjetaFruta name="Kiwi" price={4.00} />
    </div>
)

export default App