//codewars.com coding challenge
//https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript

var maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

function mazeRunner(maze, directions) {
  //Function to find start and end spot
  const findSpot = (arr, find) => {
    let index1 = arr.findIndex((arr2) => {
      return arr2.find((item) => item === find);
    });

    if (index1 === undefined) {
      return [-1, -1];
    }

    const index2 = arr[index1].findIndex((item) => item === find);

    return [index1, index2];
  };

  //find start and end spot
  const start = findSpot(maze, 2);
  const end = findSpot(maze, 3);

  //object to determine n,s,w,e
  const moves = {
    N: [-1, 0],
    E: [0, +1],
    W: [0, -1],
    S: [+1, 0],
  };

  for (let x = 0; x < directions.length; x++) {
    //Move the piece
    const move = directions[x];
    start[0] += moves[move][0];
    start[1] += moves[move][1];

    console.log(start);
    if (start[0] < 0 || start[0] >= maze.length) {
      return "Dead";
    }
    if (start[1] < 0 || start[1] > maze[0].length) {
      return "Dead";
    }

    console.log(start);
    console.log(maze[start[0]][start[1]]);
    switch (maze[start[0]][start[1]]) {
      case 0:
        break;
      case 1:
        return "Dead";
        break;
      case 3:
        return "Finish";
        break;
      default:
        "that's not right?";
        break;
    }
    console.log(x, directions.length);
    if (x === directions.length - 1) {
      return "Lost";
    }
  }
}

//   console.log(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]))
//   console.log(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]))
//   console.log(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"]))
//   console.log(mazeRunner(maze,["N","N","N","W","W"]))
console.log(
  mazeRunner(maze, [
    "N",
    "N",
    "N",
    "N",
    "N",
    "E",
    "E",
    "S",
    "S",
    "S",
    "S",
    "S",
    "S",
  ])
);
