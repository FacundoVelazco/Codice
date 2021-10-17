const { app, BrowserWindow} = require('electron');
const path = require('path');
function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      // icon: path.join(__dirname,"/imagenes/icono.ico")
      icon: path.join("C:/Users/facun/Desktop/Sin nombre.ico")
    })
  
    win.loadFile('index.html')
  }
  app.whenReady().then(() => {
    createWindow()
  })
  
  