# tickalltheboxes
Chrome/Chromium extension to tick all the boxes in Endpoint Manager's Unhealthy Endpoints admin page.

Anyone managing anti-virus endpoints in Microsoft's Endpoint Manager probably wants to be able send actions to unhealthy endpoints to kick them into performing a scan or downloading the latest updates. This is possible, but at the moment each machine has to be ticked individually before clicking the 'update signatures' button. Every. Single. One.

This small extension for Chrome/Chromium adds a button to the toolbar that ticks all the boxes on an page automatically. It only has effect on the 'Windows 10 unhealthy endpoints' page, and works by simulating a click of each checkbox/tickbox. ie It doesn't just set them to true, it fires a click event at each one.

The extension only ticks the boxes; it does not activate any of the actions.

You still need to switch pages manually if you have more than 20 unhealthy endpoints, but c'est la vie.

Disclaimer: Use at your own risk. I strongly encourage you to inspect the code and satisfy yourself that it is safe to use in your environment.

Additional disclaimer: I'm by no means an expert extension developer. I made this by cobbling together information I could find. There are probably much better ways to code this, especially the bit that hides the (unnecessary) popup. Pull requests welcome!

Installation:

Download the files / unzip the release
Enable Chrome/Chromium developer mode
Load the extension with 'Load unpacked'
Select the folder containing the extension
Click the jigsaw icon on the browser toolbar
Pin the 'Tick all the Boxes' extension (a blue tickbox will appear on the toolbar)

Use:

Browse to the Windows 10 unhealthy endpoints page in Endpoint Mangager
Tick the extension icon (all boxes should become ticked)
Click the action you require
Repeat for any additional pages of devices (currently 20 are shown per page)
