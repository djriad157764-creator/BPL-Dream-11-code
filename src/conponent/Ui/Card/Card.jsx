import React, { useState } from "react";
import { FaRegFlag, FaUser } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

const Card = ({
  player,
  setCoin,
  coin,
  setSelectionPlayer,
  selectionPlayer,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const isAlreadySelected = selectionPlayer.some(
    (p) => p.playerName === player.playerName,
  );

  const handleSelectedBtn = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isAlreadySelected) return alert("Player already Selected");

    if (coin >= player.playerPrice) {
      setIsSelected(true);
      alert(`${player.playerName} selected`);
      setCoin(coin - player.playerPrice);
      setSelectionPlayer([...selectionPlayer, player]);
    } else {
      alert(`Not enough Coin! Need $${player.playerPrice - coin} more.`);
    }
  };

  // disabled btn
  const isButtonDisabled = isSelected || isAlreadySelected;

  return (
    <div className="card bg-base-200 shadow-sm p-6">
      <figure className="px-4 pt-4">
        <img
          className="w-[376px]
              h-60 object-contain rounded-lg"
          src={player.playerImage}
          alt={player.playerName}
        />
      </figure>

      <div className="flex items-center gap-3 mb-2">
        <FaUser className="text-gray-500" />
        <h2 className="font-bold text-lg">{player.playerName}</h2>
      </div>

      {/* type and playerCountry */}
      <div className="flex justify-between items-center">
        <span className="text-gray-600 flex items-center gap-3">
          <FaRegFlag /> {player.playerCountry}
        </span>
        <span className="badge badge-outline">{player.playerType}</span>
      </div>

      <div className="divider my-4"></div>

      {/* Ratting */}

      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm">Rating:</span>
        <span className="font-semibold">{player.playerRating}</span>
        <FcRating />
      </div>

      {/* battingStyle and bollingStyle */}
      <div className="flex justify-between items-center mb-3">
        <span className="badge badge-ghost">{player.battingStyle}</span>
        <span className="badge badge-ghost">{player.bollingStyle}</span>
      </div>
      <div className="flex justify-between items-center ">
        <p>${player.playerPrice}</p>
        <button
          disabled={isButtonDisabled}
          type="button"
          onClick={handleSelectedBtn}
          className={`btn btn-sm ${
            isSelected ? "btn-success"
            : coin >= player.playerPrice ? "btn-primary"
            : "btn-secondary opacity-50 cursor-not-allowed"
          }`}
        >
          {isSelected ? "Selected ✓" : "Choose Player"}
        </button>
      </div>
      {!isSelected && !isAlreadySelected && coin < player.playerPrice && (
        <div className="text-xs text-red-500 mt-2 text-center">
          Need ${player.playerPrice - coin} more coins!
        </div>
      )}
    </div>
  );
};

export default Card;
