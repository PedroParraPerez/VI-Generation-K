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
    matrix = array.map(x => {
      return Array(sideSize).fill(0);
    });
    return matrix;
  };
  CreateMatrix();

  const añadir1 = () => {
    matrix[0][0] = 1;
    matrix[3][0] = 1;
    matrix[1][1] = 1;
    matrix[5][1] = 1;
    matrix[4][2] = 1;
    matrix[0][3] = 1;
    matrix[3][3] = 1;
    matrix[2][4] = 1;
    matrix[5][4] = 1;
    return matrix;
  };
  let matrix0 = añadir1();

  let matrix90 = matrix0[0].map((val, index) =>
    matrix.map(row => row[index]).reverse()
  );
  let matrix180 = matrix0.reverse();
  let matrix270 = matrix90.reverse();
  console.log(matrix0);
  console.log(matrix90);
  console.log(matrix180);
  console.log(matrix270);

  // const decryptedMessage = decrypt(encriptedMessage, gridPosBase);
  // console.log(decryptedMessage);
};

//MIRAR MAS ADELANTE PARA REFACTORIZAR EL CODIGO.
// Posibles opciones a la funcion de añadir1 => con esto sacamos un listado de todos los valores de gridPosBase, puede que podamos trabajar con esto.

// for(i = 0; i < gridPosBase.length; i++){
//   for(v of gridPosBase[i]){
//     console.log(v-1)
//   }
//   }
