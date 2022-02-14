/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const sideSize = 6; // Grid de lado 6
  const gridPosBase = [
    [1, 1],
    [4, 1],
    [2, 2],
    [6, 2],
    [5, 3],
    [1, 4],
    [4, 4],
    [3, 5],
    [6, 5]
  ];
  const encriptedMessage = "lróaon. sg sdersoildsu.:.cc kiomamii";

  let matrix;
  let array = Array(sideSize).fill();
  const CreateMatrix = () => {
    matrix = array.map(function(x) {
      return Array(sideSize).fill(0);
    });
    return matrix;
  };
  CreateMatrix();

  matrix[0][0] = 1;
  matrix[3][0] = 1;
  matrix[1][1] = 1;
  matrix[1][5] = 1;
  matrix[2][4] = 1;
  matrix[0][3] = 1;
  matrix[3][3] = 1;
  matrix[4][2] = 1;
  matrix[4][5] = 1;

  // matrix90 = matrix[0].map((val, index) => matrix.map(row => row[index]).reverse())
  let matrix180 = matrix.reverse();
  // matrix270 = matrix180[0].map((val, index) => matrix.map(row => row[index]).reverse())

  console.log(matrix);
  // const decryptedMessage = decrypt(encriptedMessage, gridPosBase);
  // console.log(decryptedMessage);
};
