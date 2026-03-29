import { Suspense, useState } from "react";
import "./App.css";
import Players from "./conponent/home/Players/Players";
import Navbar from "./conponent/Navbar/Navbar";
import Footer from "./conponent/Footer/Footer";

const playersData = async () => {
  const res = await fetch("playerData.json");
  return await res.json();
};
const playersPromise = playersData();


function App() {
  const [coin, setCoin] = useState(5000);
  return (
    <>
      <Navbar coin={coin}></Navbar>
      {/* <Hero></Hero> */}
      <Suspense>
        <Players
          playersPromise={playersPromise}
          setCoin={setCoin}
          coin={coin}
        ></Players>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
