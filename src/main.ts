"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}

Object.defineProperty(exports, '__esModule', { value: true });

var { app, BrowserWindow } = require('electron');

var path = __importStar(require('path'));
var url = __importStar(require('url'));

var win;

function createWindow() {

    win = new BrowserWindow({ width: 800, height: 600 });

    win.loadURL(url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.webContents.openDevTools();

    win.on('closed', function () {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
