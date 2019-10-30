let spiralMatrix = function(R, C, r0, c0) {
  const DIRECTION = {
    UP: "up",
    DOWN: "down",
    LEFT: "left",
    RIGHT: "right"
  }

  let direction = DIRECTION.RIGHT
  let result = []
  let r = r0
  let c = c0

  let rightWall = c + 1
  let bottomWall = r + 1
  let leftWall = c - 1
  let topWall = r - 1

  while (result.length < R * C) {
    let insideGrid = c > -1 && c < C && (r > -1 && r < R)
    if (insideGrid) result.push([r, c])

    if (direction === DIRECTION.RIGHT) {
      let touchingRightWall = c === rightWall
      if (touchingRightWall) {
        rightWall++
        direction = DIRECTION.DOWN
      } else {
        c++
      }
    }
    if (direction === DIRECTION.DOWN) {
      let touchingBottomWall = r === bottomWall
      if (touchingBottomWall) {
        bottomWall++
        direction = DIRECTION.LEFT
      } else {
        r++
      }
    }
    if (direction === DIRECTION.LEFT) {
      let touchingLeftWall = c === leftWall
      if (touchingLeftWall) {
        leftWall--
        direction = DIRECTION.UP
      } else {
        c--
      }
    }
    if (direction === DIRECTION.UP) {
      let touchingTopWall = r === topWall
      if (touchingTopWall) {
        topWall--
        direction = DIRECTION.RIGHT
        c++ 
      } else {
        r--
      }
    }
  }
  return result
}
