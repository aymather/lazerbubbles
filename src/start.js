const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');

let mainWindow;

function createWindow(){
    mainWindow = new BrowserWindow({ width: 800, height: 600 });

    mainWindow.loadURL(
        process.env.ELECTRON_START_URL ||
            url.format({
                pathname: path.join(__dirname, '/../public/index.html'),
                protocol: 'file:',
                slashes: true
            })
    )

    mainWindow.on('closed', () => {
        mainWindow = null
    })

    installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS])
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on('activate', () => {
    if(mainWindow === null){
        createWindow();
    }
})