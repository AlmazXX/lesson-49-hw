const getChessBoard = (squares = 8) => {
    let board: string = '';
    for (let i = 0; i < squares; ++i) {
      for (let j = 0; j < squares; ++j) {
        if (i % 2 === j % 2) {
            board += '██';
        } else {
            board += '  ';
        }
      }
      board += '\n';
    }
    console.log(board);
  };

getChessBoard();