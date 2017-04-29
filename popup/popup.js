var toggle = document.getElementById("isPluginOn");
var runPlugin = document.getElementById("runPlugin");

var storage = chrome.storage.local;

toggle.addEventListener("change", function (e) {
    // console.log("toggled: ", toggle.checked);
    save_options();
});

runPlugin.addEventListener('click', function (e){
    emitRunScript();
});

function emitRunScript () {
    var payload = {};
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, payload, function (response) {
            console.log(response.farewell);
        });
    });
}
restore_options();

function updateIcon(enabled) {
    if (enabled) {
        chrome.browserAction.setIcon({path: '../img/icon_38.png'});
    }
    else {
        chrome.browserAction.setIcon({path: '../img/icon-disabled_38.png'});
    }
}

function save_options() {
    var obj = {autoRun: toggle.checked};
    updateIcon(toggle.checked);
    storage.set(obj);
}

function restore_options() {
    storage.get('autoRun', function (result) {
        console.log(result);
        toggle.checked = result.autoRun;
    });
}


// document.addEventListener('DOMContentLoaded', restore_options);
// document.getElementById('save').addEventListener('click', save_options);