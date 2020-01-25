// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
 
// Maze Runner
// Task
//  	You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
 
// The Maze array will look like

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]
// ..with the following key

//  	0 = Safe place to walk
// 1 = Wall
// 2 = Start Point
// 3 = Finish Point
 
//   direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
// Rules
//  	1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
// 2. The start and finish positions will change for the final tests.
// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
// </td>
 
// Good luck, and stay safe!

function mazeRunner(maze, directions) {
    let startLocation;
    let currentLocation;
  
    maze.forEach((arr, i) => {
      if(arr.indexOf(2) !== -1) {
        startLocation = [i, arr.indexOf(2)];
      }
    })
    
    currentLocation = startLocation.slice();
  
    for(let i = 0; i < directions.length; i++) {
      let lastMovement = false;
      
      decideMovement(directions[i]);
      
      if(i === directions.length - 1) {
         lastMovement = true;
      }
      
      if(currentLocation[0] < 0 || currentLocation[0] > maze[0].length -1 ||
         currentLocation[1] < 0 || currentLocation > maze.length -1) {
            return 'Dead'
        }
     
      if(decideFate(maze[currentLocation[0]][currentLocation[1]]) === 'Dead') {
        return 'Dead';
      } else if (decideFate(maze[currentLocation[0]][currentLocation[1]]) === 'Finish') {
        return 'Finish';
      }  else if (decideFate(maze[currentLocation[0]][currentLocation[1]], lastMovement) === 'Lost') {
        return 'Lost';
      }
    }
    
    function decideMovement(direction) {
     switch(direction) {
        case 'N':
          return currentLocation[0] = currentLocation[0] - 1;
        case 'S':
          return currentLocation[0] = currentLocation[0] + 1;
        case 'E':
          return currentLocation[1] = currentLocation[1] + 1;
        case 'W':
          return currentLocation[1] = currentLocation[1] - 1;
      }
    }
    
    function decideFate(newBlock, lastMovement) {
      switch(newBlock) {
        case 0:
          if(lastMovement === true) {
            return 'Lost'
          }
          break;
        case 1:
          return 'Dead';
        case 2: 
          if(lastMovement === true) {
            return 'Lost'
          }
          break;
        case 3:
          return 'Finish';
        case undefined:
          return 'Dead';
      }
    }
    
  }