import React from "react";

import Card from "../Ui/Card/Card";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const AvailablePlayers = ({
  allPlayersData,
  setCoin,
  coin,
  setSelectionPlayer, selectionPlayer}) => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 px-5 md:grid-cols-3 mt-8 gap-6">
      {allPlayersData.map((player, i) => (
        <Card key={i} setSelectionPlayer={setSelectionPlayer} selectionPlayer={selectionPlayer} player={player} setCoin={setCoin} coin={coin}></Card>
      ))}
    </div>
  );
};

export default AvailablePlayers;
