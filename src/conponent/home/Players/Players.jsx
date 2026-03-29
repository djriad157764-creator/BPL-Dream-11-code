import React, { use, useEffect, useState } from "react";
import AvailablePlayers from "../../AvailablePlayers/AvailablePlayers";
import SelectedPlayer from "../../SelectedPlayer/SelectedPlayer";


const Players = ({ playersPromise, setCoin, coin }) => {
  const [allPlayersData, setAllPlayersData] = useState([]);
  const [clickedBtn, setClickedBtn] = useState("available");
  const [selectionPlayer, setSelectionPlayer] = useState([]);

  

  useEffect(() => {
    playersPromise.then((data) => {
      setAllPlayersData(data);
    });
  }, [playersPromise]);

  return (
    <div className="w-full max-w-[1320px] mx-auto mt-20">
      <div className="flex justify-between">
        <div className="ml-2 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#131313]">
          {clickedBtn === "available" ?
            <h1 className="">Available Players</h1>
          : <h1 className="">
              Selected Player({selectionPlayer.length}/{allPlayersData.length})
            </h1>
          }
        </div>
        <div className="mr-2">
          <button
            onClick={() => setClickedBtn("available")}
            className={`text-[#131313]  rounded-r-none btn ${clickedBtn === "available" ? " bg-[#E7FE29] " : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setClickedBtn("selected")}
            className={`text-[#131313] rounded-l-none btn ${clickedBtn === "selected" ? "bg-[#E7FE29]" : ""}`}
          >
            Selected <span>({selectionPlayer.length})</span>
          </button>
        </div>
      </div>
      <div className="">
        {clickedBtn === "available" ?
          <AvailablePlayers
            allPlayersData={allPlayersData}
            setCoin={setCoin}
            coin={coin}
            selectionPlayer={selectionPlayer}
            setSelectionPlayer={setSelectionPlayer}
          ></AvailablePlayers>
        : <SelectedPlayer
            setCoin={setCoin}
            coin={coin}
            setSelectionPlayer={setSelectionPlayer}
            selectionPlayer={selectionPlayer}
          ></SelectedPlayer>
        }
      </div>
    </div>
  );
};

export default Players;
