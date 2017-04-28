var toggle = document.getElementById("isPluginOn");
var storage = chrome.storage.local;

toggle.addEventListener("change", function (e) {
    console.log("toggled: ", toggle.checked);
    save_options();
});

restore_options();

function updateIcon(enabled) {
    if (enabled) {
        chrome.browserAction.setIcon({path: 'img/icon_38.png'});
    }
    else {
        chrome.browserAction.setIcon({path: 'img/icon-disabled_38.png'});
    }
}

function save_options() {
    var obj = {enabled: toggle.checked};
    updateIcon(toggle.checked);
    storage.set(obj);
}

function restore_options() {
    storage.get('enabled', function (result) {
        console.log(result);
        toggle.checked = result.enabled;
    });
}


// document.addEventListener('DOMContentLoaded', restore_options);
// document.getElementById('save').addEventListener('click', save_options);