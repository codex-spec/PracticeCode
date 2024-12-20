// Register Vanilla JS Shortcut Functions
function DQS(val) {return document.querySelector(val);}
function DQSA(val) {return document.querySelectorAll(val);}
function DID(val) {return document.getElementById(val);}
function DCN(val) {return document.getElementsByClassName(val);}
function DCE(val) {return document.createElement(val);}
function DCTN(val) {return document.createTextNode(val);}
function DPFS(val) {return new DOMParser().parseFromString(val, 'text/html');}

// Debug Mode
var debug_mode = true;
// JSON Database
var database = [];
// JSON Game Database
var game = [];
// JSON Moves Database
var moves = [];
// Register Pieces
const pieces = {
  black: {
    king: { pos: "D8", icon: "chess-king",},
    queen: { pos: "E8", icon: "chess-queen",},
    bishop_1: { pos: "C8", icon: "chess-bishop",},
    bishop_2: { pos: "F8", icon: "chess-bishop",},
    knight_1: { pos: "B8", icon: "chess-knight",},
    knight_2: { pos: "G8", icon: "chess-knight",},
    rook_1: { pos: "A8", icon: "chess-rook",},
    rook_2: { pos: "H8", icon: "chess-rook",},
    pawn_1: { pos: "A7", icon: "chess-pawn",},
    pawn_2: { pos: "B7", icon: "chess-pawn",},
    pawn_3: { pos: "C7", icon: "chess-pawn",},
    pawn_4: { pos: "D7", icon: "chess-pawn",},
    pawn_5: { pos: "E7", icon: "chess-pawn",},
    pawn_6: { pos: "F7", icon: "chess-pawn",},
    pawn_7: { pos: "G7", icon: "chess-pawn",},
    pawn_8: { pos: "H7", icon: "chess-pawn",},
  },
  white: {
    king: { pos: "D1", icon: "chess-king",},
    queen: { pos: "E1", icon: "chess-queen",},
    bishop_1: { pos: "C1", icon: "chess-bishop",},
    bishop_2: { pos: "F1", icon: "chess-bishop",},
    knight_1: { pos: "B1", icon: "chess-knight",},
    knight_2: { pos: "G1", icon: "chess-knight",},
    rook_1: { pos: "A1", icon: "chess-rook",},
    rook_2: { pos: "H1", icon: "chess-rook",},
    pawn_1: { pos: "A2", icon: "chess-pawn",},
    pawn_2: { pos: "B2", icon: "chess-pawn",},
    pawn_3: { pos: "C2", icon: "chess-pawn",},
    pawn_4: { pos: "D2", icon: "chess-pawn",},
    pawn_5: { pos: "E2", icon: "chess-pawn",},
    pawn_6: { pos: "F2", icon: "chess-pawn",},
    pawn_7: { pos: "G2", icon: "chess-pawn",},
    pawn_8: { pos: "H2", icon: "chess-pawn",},
  },
};

// Register Column Letters
const cols = ["H", "G", "F", "E", "D", "C", "B", "A"];

// Register Log
var log = {
  raw: [],
  listeners: {
    selectPieces: [],
    selectSquares: [],
  },
  actions: {
    createBoard: [],
    setPieces: [],
    mapPieces: [],
    clearPieceSelectors: [],
    clearSquareSelectors: [],
    clearCapturedSelectors: [],
    selectPiece: [],
    selectSquare: [],
    movePiece: [],
    recordBoard: [],
    recordMove: [],
    resetSelectors: [],
    takePiece: []
  }
}

// Register Event Listener Method Functions to Bind the Actions to the Event Triggering Elements
var listeners = {
  
  // Listen For When a Chess Piece is Clicked
  selectPieces: function() { actions.consoleLog("[LISTENER] Select Pieces");
    let pieces = document.querySelectorAll('.chess-piece');
    pieces.forEach((piece, index) => {
      if(!piece.classList.contains('init')) {
        piece.classList.add('init');
        piece.addEventListener('click', function(e) {
          actions.selectPiece(e);
          actions.consoleLog("<<<<<<<>>>>>>>", "", false);
        });
      }
    });
  },
  
  // Listen for When an Empty Chess Square is Clicked
  selectSquares: function() { actions.consoleLog("[LISTENER] Select Squares")
    let squares = document.querySelectorAll('.square');
    squares.forEach((square, index) => {
      if(!square.querySelector('.chess-piece') && !square.classList.contains('selected') && !square.classList.contains('init')) {
        square.classList.add('init');
        square.addEventListener('click', function(e) {
          e.preventDefault();
          actions.selectSquare(e);
          actions.consoleLog("<<<<<<>>>>>>>", "", false);
        });
      } else {
        square.addEventListener('click', function(e) {e.preventDefault();});
      }
    });
  },
  
  // Listen for Record Board Button
  // recordBoard: function() {
  //   let button = document.querySelector('#record-board');
  //   button.addEventListener('click', function(e) {
  //     actions.recordBoard(e);
  //   });
  // },
  
  // Listen for Clicking the Orange Square to Move a Piece
  // movePieces: function() {
  //   document.querySelectorAll('.square-selected').forEach((square, index) => {
  //     if(!square.classList.contains('init')) {
  //       square.classList.add('init');
  //       actions.movePiece(e);
  //     }
  //   });
  //}
};

// Register Action Method Functions
var actions = {
  
  consoleLog: function(arg1 = "", arg2 = "", lines = false) {
    if(debug_mode === true) {
      var d = new Date(); 
      let t = {
        year: d.getFullYear(), 
        month: d.getMonth(), 
        day: d.getDate(), 
        hours: d.getHours(),
        seconds: d.getSeconds(),
        milliseconds: d.getMilliseconds()
      };
      log.raw.push({stamp: d.toString().split(' ')[4], arg1: arg1, arg2: arg2, time: t});;
      console.log(log);
      //console.log(lines ? '-------' : '');
    }
  },
  
  // Create And/Or Clear the Chess Board
  createBoard: function() { actions.consoleLog("[ACTION] Create Board");
    let board = document.querySelector('#chess-board');
    for(i = 1; i <= 64; i++) {
      let row = Math.floor((64 - i) / 8) + 1;
      let col = (8 * (9 - row)) - i + 1;
      let color = "";
      if(row % 2 === 0) {
        color = i % 2 === 0 ? "black" : "white";
      } else {
        color = i % 2 === 0 ? "white" : "black";
      }
      //console.log({i: i, row: row, col: col, color: color});
      board.insertAdjacentHTML('beforeend', templates.square(color, i, row, col));
    }
  },
  
  // Set the Pieces on the Chess Board
  setPieces: function(pieces) { actions.consoleLog("[ACTION] Set Pieces");
    let b = pieces.black;
    let w = pieces.white;
    actions.mapPieces(b, "black");
    actions.mapPieces(w, "white");
  },
  
  // Map the Pieces on the Chess Board for a Single Player
  mapPieces: function(p, color) {
    for(key in p) {
      let pos = p.hasOwnProperty(key) ? p[key].pos : false;
      //console.log({pos: pos});
      let square = document.querySelector('.square[data-cell="'+pos+'"]');
      if(square) {
        square.insertAdjacentHTML('beforeend', templates.piece(key, p[key], color));
      }
    }
    actions.consoleLog("[ACTION] Map Pieces", {color: color, pieces: p});
  },
  
  // Deselect All Chess Piecees
  clearPieceSelectors: function() { actions.consoleLog("[ACTION] Clear Piece Selectors");
    document.querySelectorAll('.square').forEach((p, j) => {
      p.classList.remove('piece-selected');
    });
  },
  
  // Deselect All Chess Squares
  clearSquareSelectors: function() { actions.consoleLog("[ACTION] Clear Square Selectors");
    document.querySelectorAll('.square').forEach((x, j) => {
      x.classList.remove('square-selected');
    });
  },
  
  clearCapturedSelectors: function() { actions.consoleLog("[ACTION] Clear Captured Selectors");
    document.querySelectorAll('.square').forEach((x, j) => {
      x.classList.remove('capturable-selected');
    });
  },
  
  // Select a Chess Piece
  selectPiece: function(e) {
      let piece = e.target.classList.contains('fa') ? e.target.parentNode : e.target;
      // Originally Selected Piece Already Chosen Before Choosing this Piece
      let origin = !piece.parentNode.classList.contains('piece-selected') ? document.querySelector('.piece-selected') : false;
      if(!origin) {
        actions.clearPieceSelectors();
        piece.parentNode.classList.toggle('piece-selected');
      } else {
        let pieceColor = piece.getAttribute('data-color');
        let originColor = origin.querySelector('.chess-piece').getAttribute('data-color');
        if(pieceColor != originColor) {
          if(!piece.classList.contains('capturable-selected')) {
            piece.parentNode.classList.add('capturable-selected');
          } else {
            actions.movePiece(origin.querySelector('.chess-piece'));
          }
        }
      }
      actions.clearSquareSelectors();
      listeners.selectSquares();
      actions.consoleLog("[ACTION] Select Piece", {piece: piece, origin: origin});
  },
  
  // Select a Chess Square
  selectSquare: function(e) {
    
    let square = e.target;
    // let squarePiece = square.querySelector('.chess-piece').length > 0 ? square.querySelector('.chess-piece') : false;
    let spIsSelected = square.classList.contains('square-selected');
    let spIsCapturable = square.classList.contains('capturable-selected');
    
    //let square = e.target.classList.contains('chess-piece') ? e.target.parentNode : e.target;
    let selectedPiece = document.querySelector('.piece-selected').querySelector('.chess-piece');
    if(spIsSelected) {
      if(selectedPiece.getAttribute('data-position') !== square.getAttribute('data-cell')) {
        actions.movePiece(e);
        actions.clearSquareSelectors();
      }
    } else {
      actions.clearSquareSelectors();
      square.classList.toggle('square-selected');
    }
    actions.consoleLog("[ACTION] Select Square", {e: e, square: square, piece: selectedPiece});
  },
  
  // Move a Chess Piece from a Starting Square to an Ending Square
  movePiece: function(e) {
    e.preventDefault();
    let newSquare = document.querySelector('.square-selected') !== null ? document.querySelector('.square-selected') : (document.querySelector('.capturable-selected') !== null ? document.querySelector('.capturable-selected') : false);
    let oldSquare = document.querySelector('.piece-selected');
    let piece = oldSquare.querySelector('.chess-piece');
    let opponentPiece = newSquare.querySelector('.chess-piece') !== null ? newSquare.querySelector('.chess-piece') : false;
    if(opponentPiece) {
      actions.takePiece(opponentPiece);
      //newSquare.removeChild(newSquare.childNodes[0]);
    }
    newSquare.appendChild(piece);
    piece.setAttribute('data-position', newSquare.getAttribute('data-cell'));

    actions.recordMove(oldSquare, newSquare, piece);
    actions.clearPieceSelectors();
    actions.clearSquareSelectors();
    actions.clearCapturedSelectors();
    actions.consoleLog("[ACTION] Move Piece", {e: e, newSquare: newSquare, oldSquare: oldSquare, piece: piece, opponentPiece: opponentPiece});
  },
  
  // Record the Pieces on the Board into a JSON Object to Store
  recordBoard: function() {
    let record = {timestamp: Date.now(), board: []};
    document.querySelectorAll('.square').forEach((square, i) => {
      let blob = {};
      let piece = square.querySelector('.chess-piece');
      blob.squareColor = square.getAttribute('data-square-color');
      blob.squareCell = square.getAttribute('data-cell');
      if(piece) {
        blob.pieceColor = piece.getAttribute('data-color');
        blob.pieceKey = piece.getAttribute('data-piece');
      }
      blob.timestamp = Date.now();
      record.board.push(blob);
    });
    game.push(record);
    actions.consoleLog("[ACTION] Record Board", {game: game, record: record});
  },
  
  // Record A Chess Piece Move Once Completed
  recordMove: function(oldSquare, newSquare, piece) {
    let move = {timestamp: new Date().toString().split(' ')[4]};
    move.from = oldSquare.getAttribute('data-cell');
    move.to = newSquare.getAttribute('data-cell');
    move.piece = piece.getAttribute('data-piece');
    move.color = piece.getAttribute('data-color');
    moves.push(move);
    actions.recordBoard();
    actions.consoleLog("[ACTION] Record Move", {move: move, moves: moves});
  },
  
  // Reset Board and Chess Piece Selectors After a Piece Has Been Moved
  resetSelectors: function() {
    document.querySelectorAll('.square').forEach((square, i) => {
      let piece = square.querySelector('.chess-piece');
      if(piece.length > 0) {
        if(!piece.classList.contains('init')) {
          piece.addEventListener('click', function(e) {
            actions.selectPiece(e);
          });
        }
      } else {
        if(!square.classList.contains('init')) {
          square.addEventListener('click', function(e) {
            actions.selectSquare(e);
          });
        }
      }
    });
    actions.consoleLog("[ACTION] Reset Selectors");
  },
  
  // Take an Opponent's Piece on the Chess Board
  takePiece: function(opponentPiece) {
    actions.consoleLog("Take Piece", {opponentPiece: opponentPiece});
    let opponentColor = opponentPiece.getAttribute('data-color');
    let takerColor = opponentColor === "black" ? "white" : (opponentColor === "white" ? "black" : false);
    if(takerColor) {document.getElementById(takerColor+'-panel').querySelector('.taken-pieces').appendChild(opponentPiece);}
  }
};

// Register Reusable Markup Templates as Method Functions and Using Argument Interpolation
var templates = {
  // Chess Square
  square: function(color, i, row, col) {
    return `<div class="square ${color}" data-nth="${i}" data-row-num="${row}" data-square-color="${color}" data-col-letter="${cols[col - 1]}" data-col="${col}" data-cell="${cols[col - 1]}${row}"></div>`;
  },
  // Chess Piece
  piece: function(key, piece, color) {
    let pcolor = color === "black" ? "white" : (color === "white" ? "black" : "");
    return `<div class="chess-piece ${key}" data-piece="${key}" data-color="${pcolor}" data-piece-start="${piece.pos}" data-position="${piece.pos}"><i class="fa fa-${piece.icon} ${pcolor}" data-color="${pcolor}" data-piece="${piece.pos}"></i></div>`;
  }
};

// INIT ACTION: Create the Chess Board
actions.createBoard();
// INIT ACTION: Set the Chess Pieces on the Chess Board
actions.setPieces(pieces);
// INIT LISTENER: Select Pieces
listeners.selectPieces();
// INIT LISTENER: Select Squares
listeners.selectSquares();
// INIT LISTENER: Record Board
//listeners.recordBoard();\