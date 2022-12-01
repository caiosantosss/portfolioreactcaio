import { useState } from "react";
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery({ minWidth: 1060 });

  return <div className="app bg-deep-blue">
    <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
  </div>
}

export default App;
