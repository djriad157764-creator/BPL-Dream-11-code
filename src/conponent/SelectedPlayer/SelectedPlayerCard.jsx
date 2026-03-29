import React from "react";
import { FaUser } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const SelectedPlayerCard = ({
  player,
  selectionPlayer,
  setSelectionPlayer,
  setCoin,
  coin,
}) => {
  const removeCard = (player) => {
    const updatedPlayers = selectionPlayer.filter(
      (DPlayer) => DPlayer.playerName !== player.playerName,
    );
    setSelectionPlayer(updatedPlayers);
    setCoin(coin + player.playerPrice);
  };

  return (
    <div className="flex items-center px-5 justify-between border-2 p-6 w-full h-[128px] rounded-2xl border-neutral/10">
      <div className="flex items-center gap-4">
        <div className="bg-amber-200 rounded-2xl">
          <img
            className="w-20 h-20"
            src={player.playerImage}
            alt="player Image"
          />
        </div>

        <div className="">
          <div className="flex items-center gap-2.5">
            <FaUser></FaUser>
            <h1 className=" font-bold text-2xl">{player.playerName}</h1>
          </div>
          <p>{player.playerType}</p>
        </div>
      </div>

      <div className="">
        <button onClick={() => removeCard(player)} className="cursor-pointer">
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
