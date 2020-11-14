// In the Renderer process
const { ipcRenderer, shell } = require('electron')

const chromeClose = document.getElementById("closebutton");
const chromeMinimize = document.getElementById("minimizebutton")

chromeClose.addEventListener("click", () => {
    ipcRenderer.invoke("window-close");
})

chromeMinimize.addEventListener("click", () => {
    ipcRenderer.invoke("window-minimize");
})