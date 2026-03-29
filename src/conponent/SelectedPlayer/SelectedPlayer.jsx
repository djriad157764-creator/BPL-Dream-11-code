import React, { useEffect } from "react";
import SelectedPlayerCard from "./SelectedPlayerCard";
import Players from "../home/Players/Players";
import { toast } from "react-toastify";

const SelectedPlayer = ({
  selectionPlayer,
  setSelectionPlayer,
  setCoin,
  coin,
  clickedBtn,
  setClickedBtn,
}) => {
  useEffect(() => {
    if (selectionPlayer.length === 0) {
      toast.info("Cart is Empty! Please Add Player", {
        position: "bottom-center",
        autoClose: 2000,
      });
    }
  }, [selectionPlayer.length]);
  if (selectionPlayer.length === 0) {
    return (
      <div className="">
        <div className="text-center py-12 bg-base-100 rounded-xl">
          <p className="text-gray-500 text-lg">No players selected yet</p>
          <p className="text-gray-400 text-sm mt-2">
            👈 Go to Available Players and build your dream team!
          </p>
        </div>
        <button
          onClick={() => setClickedBtn("available")}
          className="text-[#131313] rounded-lg btn mx-auto justify-center flex bg-[#E7FE29] mt-5"
        >
          Add More Player
        </button>
      </div>
    );
  }
  return (
    <div>
      {selectionPlayer.map((player, index) => (
        <SelectedPlayerCard
          setCoin={setCoin}
          coin={coin}
          setSelectionPlayer={setSelectionPlayer}
          selectionPlayer={selectionPlayer}
          key={index}
          player={player}
        ></SelectedPlayerCard>
      ))}
      <div>
        <button
          onClick={() => setClickedBtn("available")}
          className="text-[#131313] rounded-lg btn bg-[#E7FE29] mt-5"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayer;
