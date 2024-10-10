//circle 1
let circleColor1;
let targetColor1;
let circleRadius1 = 250; // at 60 cm distance perfect
let targetRadius1 = 250;

//circle 2
let circleColor2;
let targetColor2;
let circleRadius2 = 250; 
let targetRadius2 = 250;

//circle 3
let circleColor3;
let targetColor3;
let circleRadius3 = 250; 
let targetRadius3 = 250;

//circle 4 
let circleColor4;
let targetColor4;
let circleRadius4 = 250; 
let targetRadius4 = 250;

//big circle 1
let circleColorBig1;
let targetColorBig1;
let circleRadiusBig1 = 525; 
let targetRadiusBig1 = 525;

let lerpAmount = 0.5;
let previousKey = null;
let keyStates = {};

let currentMode = 1;

function setup() {
  createCanvas(1120, 865);

  canvas.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    keyStates[3] = true;
    handleKeyPress();
  });

  canvas.addEventListener('mouseup', (e) => {
    if (e.button === 2) {
      keyStates[3] = false;
    }
  });

  circleColor1 = color(255);
  targetColor1 = color(255)

  circleColor2 = color(255);
  targetColor2 = color(255)

  circleColor3 = color(255);
  targetColor3 = color(255)

  circleColor4 = color(255);
  targetColor4 = color(255)

  circleColorBig1 = color(255);
  targetColorBig1 = color(255)
}

function draw() {
  handleKeyPress()
  background(0);

  circleColor1 = lerpColor(circleColor1, targetColor1, lerpAmount);
  circleRadius1 = lerp(circleRadius1, targetRadius1, lerpAmount);
  circleColor2 = lerpColor(circleColor2, targetColor2, lerpAmount);
  circleRadius2 = lerp(circleRadius2, targetRadius2, lerpAmount);
  circleColor3 = lerpColor(circleColor3, targetColor3, lerpAmount);
  circleRadius3 = lerp(circleRadius3, targetRadius3, lerpAmount);
  circleColor4 = lerpColor(circleColor4, targetColor4, lerpAmount);
  circleRadius4 = lerp(circleRadius4, targetRadius4, lerpAmount);

  circleColorBig1 = lerpColor(circleColorBig1, targetColorBig1, lerpAmount);
  circleRadiusBig1 = lerp(circleRadiusBig1, targetRadiusBig1, lerpAmount);

 if (currentMode === 1) { // only one circle
  fill(circleColor1);
  ellipse(width / 2, height / 2, circleRadius1, circleRadius1);
 }

 else if (currentMode === 2) { // four circles
  // fill(circleColor2);
  ellipse(width / 6.5, height / 4.75, circleRadius1, circleRadius1);
  ellipse(width / 6.5, (height / 4.75)*3.75  , circleRadius2, circleRadius2);
  ellipse((width / 6.5)*5.5, height / 4.75 , circleRadius4, circleRadius4);
  ellipse((width / 6.5)*5.5, (height / 4.75)*3.75, circleRadius3, circleRadius3);

  ellipse(width / 2, height / 2, circleRadiusBig1, circleRadiusBig1);

 }

 else if (currentMode === 3) {

  // fill(circleColor1)
  // ellipse(width / 8 * 7, height / 5, circleRadius1, circleRadius1);
  ellipse(width / 6.5 * 5.5, height / 4.75, circleRadius1, circleRadius1);
  ellipse(width / 2, height / 2, circleRadiusBig1, circleRadiusBig1);
 }

  textAlign(CENTER);
  textSize(16);
  text(`${key} : ${keyCode}`, 50, 50);
}

function handleKeyPress() {
  let currentKey = null;

  if (keyStates[49]) {
    currentMode = 1;
    console.log('Mode 1');
  } else if (keyStates[50]) {
    currentMode = 2;
    console.log('Mode 2');
  } else if (keyStates[51]) {
    currentMode = 3;
    console.log('Mode 3');
  }

    //FIRST PUNCHING BAG
    if (keyStates[65]) { // A (weak)
      currentKey = 'a';
      targetColor1 = color(238, 210, 2);
      targetRadius1 = 275;
    } 
    if (keyStates[83]) { // S (mid)
      currentKey = 's';
      targetColor1 = color(255, 102, 0);
      targetRadius1 = 325;
    } 
    if (keyStates[87]) { // W (strong)
      currentKey = 'w';
      targetColor1 = color(255, 0, 0);
      targetRadius1 = 375;
    }

    //SECOND PUNCHING BAG
    if (keyStates[70]) { // F (weak)
      currentKey = 'f';
      targetColor2 = color(238, 210, 2);
      targetRadius2 = 275;
    } 
    if (keyStates[71]) { // G (mid)
      currentKey = 'g';
      targetColor2 = color(255, 102, 0);
      targetRadius2 = 325;
    } 
    if (keyStates[68]) { // D (strong)
      currentKey = 'd';
      targetColor2 = color(255, 0, 0);
      targetRadius2 = 375;
    }

    //THIRD PUNCHING BAG
    if (keyStates[38]) { // arrow up (weak)
      currentKey = 'arrow up';
      targetColor3 = color(238, 210, 2);
      targetRadius3 = 275;
    } 
    if (keyStates[40]) { // arrow down (mid)
      currentKey = 'arrow down';
      targetColor3 = color(255, 102, 0);
      targetRadius3 = 325;
    } 
    if (keyStates[37]) { // arrow left (strong)
      currentKey = 'arrow left';
      targetColor3 = color(255, 0, 0);
      targetRadius3 = 375;
    }

    //FOURTH PUNCHING BAG
    if (keyStates[39]) { // arrow right(weak)
      currentKey = 'arrow right';
      targetColor4 = color(238, 210, 2);
      targetRadius4 = 275;
    } 
    if (keyStates[32]) { // spacebar (mid)
      currentKey = 'spacebar';
      targetColor4 = color(255, 102, 0);
      targetRadius4 = 325;
    } 
    if (keyStates[82]) { // R/mouse pressed (mid)
      currentKey = 'R/mouse pressed';
      targetColor4 = color(255, 0, 0);
      targetRadius4 = 375;
    }

    //MIDDLE PUNCHING BAG
    if (keyStates[3]) { // Right-click (simulated key code 3)
      currentKey = 'right-click';
      targetColorBig1 = color(255, 0, 0); 
      targetRadiusBig1 = 555;
    }

    if (!keyStates[65] && !keyStates[83] && !keyStates[87] &&! keyStates[70] && !keyStates[71] && !keyStates[68]  &&! keyStates[38] && !keyStates[40] && !keyStates[37] && !keyStates[39] && !keyStates[32] &&! keyStates[82] &&! keyStates[3]) { //set to white otherwise
      targetColor1 = color(255);
      targetRadius1 = 250;
      targetColor2 = color(255);
      targetRadius2 = 250;
      targetColor3 = color(255);
      targetRadius3 = 250;
      targetColor4 = color(255);
      targetRadius4 = 250;
      targetRadiusBig1 = 525;
      targetColorBig1 = color(255);
    }
  }


  //console.log messages
  if (currentMode === 1) { // once circle, colored
    if (currentKey !== previousKey) {
      if (currentKey === 'a') {
        console.log('A --> weak punch')
      } else if (currentKey === 's') {
        console.log('S --> mid punch')
      } else if (currentKey === 'w') {
        console.log('W --> strong punch')
      } else {
        console.log('------------------')
      }
      previousKey = currentKey;
    }
  }
  if (currentMode === 2) { // four circles, sized
    if (currentKey !== previousKey) {
      if (currentKey === 'a') {
        console.log('PunchThing 1 --> weak punch')
      } else if (currentKey === 's') {
        console.log('PunchThing 1 --> mid punch')
      } else if (currentKey === 'w') {
        console.log('PunchThing 1 --> strong punch')
      } else if (currentKey === 'f') {
        console.log('PunchThing 2 --> weak punch')
      } else if (currentKey === 'g') {
        console.log('PunchThing 2 --> mid punch')
      } else if (currentKey === 'd') {
        console.log('PunchThing 2 --> strong punch')
      } else if (currentKey === 'arrow up') {
        console.log('PunchThing 3 --> weak punch')
      } else if (currentKey === 'arrow down') {
        console.log('PunchThing 3 --> mid punch')
      } else if (currentKey === 'arrow left') {
        console.log('PunchThing 3 --> strong punch')
      } else if (currentKey === 'arrow right') {
        console.log('PunchThing 4 --> weak punch')
      } else if (currentKey === 'spacebar') {
        console.log('PunchThing 4 --> mid punch')
      } else if (currentKey === 'R/mouse pressed') {
        console.log('PunchThing 4 --> strong punch')
      } else if (currentKey === 'right-click') {
        console.log('PunchThing Middle --> punch')
      }
      else {
        console.log('------------------')
      }
      previousKey = currentKey;
    }
  }
  if (currentMode === 3) { // one big one small 
    if (currentKey !== previousKey) {
      if (currentKey === 'a') {
        console.log('PunchThing 1 --> weak punch')
      } else if (currentKey === 's') {
        console.log('PunchThing 1 --> mid punch')
      } else if (currentKey === 'w') {
        console.log('PunchThing 1 --> strong punch')
      } else if (currentKey === 'd') {
        console.log('PunchThing Big')
      }
      else {
        console.log('------------------')
      }
      previousKey = currentKey;
    }
  }

  // converting mouse to r
  function mousePressed() {
    if (mouseButton === LEFT) {
      keyStates[82] = true;
      handleKeyPress();
    }
  }
  function mouseReleased() {
    if (mouseButton === LEFT) {
      keyStates[82] = false;
    }
  }
  

  // checking which keys are pressed
  function keyPressed() {
    keyStates[keyCode] = true;
  }
  function keyReleased() {
    keyStates[keyCode] = false;
  }
