const ipCheck = require('./modules/ipCheck')
const http = require('http')
const ws = require('ws')
const port = 7070
const {spawn} = require('child_process')
let piip;

function forward() {spawn('python', ['./assets/scripts/forward.py'])}
function forwardStop() {spawn('python', ['./assets/scripts/forward-stop.py'])}
function reverse() {spawn('python', ['./assets/scripts/reverse.py'])}
function reverseStop() {spawn('python', ['./assets/scripts/reverse-stop.py'])}
function left() {spawn('python', ['./assets/scripts/left.py'])}
function leftStop() {spawn('python', ['./assets/scripts/left-stop.py'])}
function right() {spawn('python', ['.assets//scripts/right.py'])}
function rightStop() {spawn('python', ['./assets/scripts/right-stop.py'])}
function weapon1(direction) {
  if(direction === 'down'){
    spawn('python', ['./assets/scripts/weapon1-down.py'])}
  else{spawn('python', ['./assets/scripts/weapon1-up.py'])}
  }

const wss = new ws.Server({noServer: true})

function accept(req, res) {
  // all incoming requests must be websockets
  if (!req.headers.upgrade || req.headers.upgrade.toLowerCase() != 'websocket') {
    res.end()
    return
  }

  // can be Connection: keep-alive, Upgrade
  if (!req.headers.connection.match(/\bupgrade\b/i)) {
    res.end()
    return
  }

  wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect)
}

function onConnect(ws) {
  ws.on('message', function (message) {
    ws.send(message)
    console.log(message)
    switch(message) {
      case 'keydown @ 87':
        forward()
        break
      case 'keyup @ 87':
        forwardStop()
        break
      case 'keydown @ 83':
        reverse()
        break
      case 'keyup @ 83':
        reverseStop()
        break
      case 'keydown @ 65':
        left()
        break
      case 'keyup @ 65':
        leftStop()
        break
      case 'keydown @ 68':
        right()
        break
      case 'keyup @ 68':
        rightStop()
        break
      case 'down-weapon1':
        weapon1('down')
        break
      case 'up-weapon1':
        weapon1('up')
        break
      default:
        console.log('weird shit in the switch statement')
    }
  })
}

if (!module.parent) {
  http.createServer(accept).listen(7070);
  console.log(`\nWebSocket server running on port ${port}\n`)
  piip = ipCheck()
  console.log(piip)
} else {
  exports.accept = accept
  console.log('WebSocket server failed')
}