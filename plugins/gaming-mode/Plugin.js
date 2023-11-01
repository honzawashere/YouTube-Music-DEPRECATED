const {get, set} = require("../../scripts/database/PluginManager");
module.exports.plugin = {
    name: "Gamer Mode",
}

module.exports.handle = () => {
    if (get("gamer-mode") === false) {
        set("gamer-mode", true)
        const electron = require("electron")
        electron.dialog.showMessageBox({ title: "YouTube Music", message: "Relaunching of the app is recommended." })
        return
    }
    if (get("gamer-mode") === true) {
        set("gamer-mode", false)
        const electron = require("electron")
        electron.dialog.showMessageBox({ title: "YouTube Music", message: "Relaunching of the app is recommended." })
    }
}