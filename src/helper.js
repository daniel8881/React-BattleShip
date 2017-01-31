export const calculateWinScore = data => {
  let total = 0;
  let ships = data.shipTypes;
  for(let prop in ships) {
    total += ships[prop].size;
  }
  return total;
}

export const generateBoard = () => {
  let board = [];
  for(let i = 0; i < 10; i++) {
   board.push(Array(10).fill(null));
  }
  return board;
}

export const setUpBoard = (board, data) => {
  let ships = data.layout;
  ships.forEach(ship => {
    ship.positions.forEach(item => {
      let x = item[0];
      let y = item[1];
      board[x][y] = ship.ship;
    });
  });
  return board;
}

export const generateShipSize = data => {
  let ships = data.shipTypes;
  let shipscore = {};
  for(let prop in ships) {
    shipscore[prop] = ships[prop].size;
  }

  return shipscore;
}