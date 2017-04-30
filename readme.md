# About Sharpify

Sharpify is a Chrome extension made for people who play guitar, but don't really like flat chords. It runs on the selected page and replaces flat chords with sharp chords. E.g 
Eb will be replaced with D#.

This script currently supports the following websites:

https://tabs.ultimate-guitar.com

http://tab4u.com/tabs

http://en.tab4u.com/tabs

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1. Clone this project and navigate to the main folder
```
git clone https://github.com/edento/sharpify.git
```
```
cd sharpify
```

Follow steps 2+3 if you want to <b> edit the design using scss instead of css:</b> (otherwise, skip to 'Running in browser')

2. Install sass
Follow the instructions in order to install sass on your machine:
http://sass-lang.com/install
 
Note: this step is required only if you wan't to change the scss file. It is not necessary for running the project without changes.

``
sass --watch popup/popup.scss:popup/popup.css --sourcemap=none
``

### Running in chrome

Open your chrome browser and make sure development mode is turned on:
1. Navigate to `chrome://extensions/`
2. Check the Developer mode checkbox
3. Click `Load unpacked extension...` and navigate to the folder you have just cloned.
4. After each change in the code, repeat stage 1 and then click `reload`

End with an example of getting some data out of the system or using it for a little demo

### Troubleshooting
If you encounter any problems running the code, try using chrome FAQ:
https://developer.chrome.com/extensions/faq#faq-dev-01

## Screenshots
Screenshot of chords were taken from 
https://tabs.ultimate-guitar.com

Extension popup options:

<img src="https://github.com/edento/sharpify/blob/master/img/screenshots/popup_enabled.png?raw=true" width="300">
<img src="https://github.com/edento/sharpify/blob/master/img/screenshots/popup_disabled.png?raw=true" width="300">

Example of chords before and after using the extension:
![Before-After screenshot](img/screenshots/screenshot1.png?raw=true "Chords before and after using the extension")

