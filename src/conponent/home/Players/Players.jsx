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
    <div className="w-full mb-52 max-w-[1320px] mx-auto mt-20">
      <div className="flex justify-between">
        <div className="ml-2 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl ">
          {clickedBtn === "available" ?
            <h1 className="">Available Players</h1>
          : <h1 className="text-[14px]">
              Selected Player({selectionPlayer.length}/{allPlayersData.length})
            </h1>
          }
        </div>
        <div className="mr-2">
          <button
            onClick={() => setClickedBtn("available")}
            className={`  rounded-r-none btn ${clickedBtn === "available" ? " bg-[#e9fe29b6] " : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setClickedBtn("selected")}
            className={` rounded-l-none btn ${clickedBtn === "selected" ? "bg-[#e9fe29b6]" : ""}`}
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
            clickedBtn={clickedBtn}
            setClickedBtn={setClickedBtn}
            setSelectionPlayer={setSelectionPlayer}
            selectionPlayer={selectionPlayer}
          ></SelectedPlayer>
        }
      </div>
    </div>
  );
};

export default Players;
