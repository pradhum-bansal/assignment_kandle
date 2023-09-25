"use client"
import Image from "next/image";
import DataTable from "react-data-table-component";
import './table.scss';


const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
      border: "none", // override the row height
      color: "#CFD8DF",
      fontFamily: "Montserrat",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20.386px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      color: "#B5BEC6",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "600",
      opacity: "0.85",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      color: "#CFD8DF",
      fontFamily: "Montserrat",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20.386px",
    },
  },
};
const columns = [
  {
    id: "rank",
    name: "Global Rank",
    selector: (row) => (
      <div>
        <Image src="/rank.svg" width={31} height={35} alt="rank" />
      </div>
    ),
    width: "128px",
  },
  {
    id: "name",
    name: "Player Name",
    selector: (row) => (
      <div className="player_name">
        <Image src="/name.png" width={44} height={44} alt="name" />
        {row?.name}
      </div>
    ),
    grow: 2,
    center: true,
  },
  {
    id: "amount",
    name: "Amount Won",
    selector: (row) => row.amount,
  },
  {
    id: "rank",
    name: "Games Played",
    selector: (row) => row.games_played,
  },
  {
    id: "rank",
    name: "Win Rate",
    selector: (row) => row.win_rate,
  },
  {
    id: "rank",
    name: "Favorite Coins",
    selector: (row) => (
      <div>
        <div className="coins_container">
          {row.favourite_coins.map((item, index) => (
            <div key={index} className="coins_wrapper">
              <Image
                src={coins[item.toLowerCase()]}
                width={24}
                height={24}
                alt="ic"
              />
              <div className="coin_name">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    grow: 2,
  },
  {
    id: "rank",
    name: "Favorite Game",
    selector: (row) => row.favourite_game,
  },
];
const data = [
  {
    rank: "1",
    name: "Parteek Garg",
    amount: "USDT 1000",
    games_played: "2000",
    win_rate: "85%",
    favourite_coins: ["BNB", "APT", "NEO", "MANA", "DASH"],
    favourite_game: "Coin League",
  },
  {
    rank: "1",
    name: "Parteek Garg",
    amount: "USDT 1000",
    games_played: "2000",
    win_rate: "85%",
    favourite_coins: ["BNB", "APT", "NEO", "MANA", "DASH"],
    favourite_game: "Coin League",
  },
  {
    rank: "1",
    name: "Parteek Garg",
    amount: "USDT 1000",
    games_played: "2000",
    win_rate: "85%",
    favourite_coins: ["BNB", "APT", "NEO", "MANA", "DASH"],
    favourite_game: "Coin League",
  },
  {
    rank: "1",
    name: "Parteek Garg",
    amount: "USDT 1000",
    games_played: "2000",
    win_rate: "85%",
    favourite_coins: ["BNB", "APT", "NEO", "MANA", "DASH"],
    favourite_game: "Coin League",
  },
  {
    rank: "1",
    name: "Parteek Garg",
    amount: "USDT 1000",
    games_played: "2000",
    win_rate: "85%",
    favourite_coins: ["BNB", "APT", "NEO", "MANA", "DASH"],
    favourite_game: "Coin League",
  },
  {
    rank: "1",
    name: "Parteek Garg",
    amount: "USDT 1000",
    games_played: "2000",
    win_rate: "85%",
    favourite_coins: ["BNB", "APT", "NEO", "MANA", "DASH"],
    favourite_game: "Coin League",
  },
];

const coins = {
  apt: '/apt.png',
  bnb: '/bnb.png',
  dash: '/dash.png',
  mana: '/mana.png',
  neo: '/neo.png'
}

export const Table = () => {
    return (
      <DataTable
        columns={columns}
        data={data}
        theme="dark"
        striped
        customStyles={customStyles}
        className="table"
      />
    );
}