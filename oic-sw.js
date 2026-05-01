{
  "name": "oic-task-manager",
  "version": "1.0.0",
  "description": "Officer In Charge Task Manager",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "build": "electron-builder --win --x64"
  },
  "build": {
    "appId": "com.oic.taskmanager",
    "productName": "OIC Task Manager",
    "win": {
      "target": "nsis",
      "icon": "icon.ico"
    },
    "nsis": {
      "oneClick": false,
      "allowToChangeInstallationDirectory": true,
      "createDesktopShortcut": true,
      "createStartMenuShortcut": true
    },
    "files": [
      "main.js",
      "index.html",
      "icon.ico"
    ]
  },
  "devDependencies": {
    "electron": "^29.0.0",
    "electron-builder": "^24.0.0"
  }
}
