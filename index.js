const { app, BrowserWindow} = require('electron');

const path = require('path');

function createWindow () {
    const win = new BrowserWindow({
      show:false,
      // width: 1366,
      // height: 768, 
      frame: true,
      titleBarStyle: 'hidden',
      titleBarOverlay: {
        color: '#2f3241',
        symbolColor: '#74b1be'
      },
      icon: path.join(__dirname,"/imagenes/icono.ico")
      // icon: path.join("C:/Users/facun/Desktop/Sin nombre.ico")
    })
  
    win.loadFile('index.html')

    win.once('ready-to-show', () => {
      win.show();
    })
    return win;
  } 
  app.whenReady().then(() => {
    let win = createWindow();

    win.on('closed', () => {
      win=null;
      app.quit();
    })
  })
  
  