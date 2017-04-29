function init() {
    var storage = chrome.storage.local;

    storage.get('autoRun', function (result) {
        if (result.autoRun) {
            console.log("Script is running automatically");
            script();
        }
        else {
            console.log('script is not running automatically');
        }
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            script();
            // console.log(sender.tab ?
            //     "from a content script:" + sender.tab.url :
            //     "from the extension");
            // if (request.greeting == "hello")
            //     sendResponse({farewell: "goodbye"});
        });
}

function script() {

    var url = document.URL;
    var selector;
    var run = function () {
        if (url.indexOf('tabs.ultimate-guitar') != -1) {
            selector = '.js-tab-content >span';
        } else if (url.indexOf('tab4u.com/tabs') != -1) {
            selector = '.chords span';
        } else {
            return;
        }

        var replaced = 0;
        var spans = document.querySelectorAll(selector);
        var CHORDS = {
            'Ab': 'G#',
            'Bb': 'A#',
            'Db': 'C#',
            'Eb': 'D#',
            'Gb': 'F#',
        };
        var fixedChords = {};

        var saveForTest = function (key, value) {
            fixedChords[key] = value;
            replaced++;
        };

        var fixChords = function () {
            for (var i = 0; i < spans.length; i++) {
                var current = spans[i].innerText;
                if (CHORDS.hasOwnProperty(current)) {
                    spans[i].innerText = CHORDS[current];
                    saveForTest(current, CHORDS[current]);
                } else {
                    for (var bad in CHORDS) {
                        if (current.indexOf(bad) === 0) {
                            var fixed = current.replace(bad, CHORDS[bad]);
                            spans[i].innerText = fixed;
                            saveForTest(current, fixed);
                        }
                    }
                }
            }
            console.log("### Chord Fixer: Replaced " + replaced + " bad chords with good ones!", fixedChords);
        };

        if (document.readyState === 'complete') {
            fixChords();
        } else {
            var interval = setInterval(function () {
                if (document.readyState === 'complete') {
                    clearInterval(interval);
                    fixChords();
                }
            }, 100);
        }
    };
    run();

}

init();