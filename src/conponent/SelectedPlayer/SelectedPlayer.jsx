import React from "react";
import SelectedPlayerCard from "./SelectedPlayerCard";
import Players from "../home/Players/Players";

const SelectedPlayer = ({
  selectionPlayer,
  setSelectionPlayer,
  setCoin,
  coin,
}) => {
  if (selectionPlayer.length === 0) {
    return (
      <div className="text-center py-12 bg-base-100 rounded-xl">
        <p className="text-gray-500 text-lg">No players selected yet</p>
        <p className="text-gray-400 text-sm mt-2">
          👈 Go to Available Players and build your dream team!
        </p>
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
    </div>
  );
};

export default SelectedPlayer;
