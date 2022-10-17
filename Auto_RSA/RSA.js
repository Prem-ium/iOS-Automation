const { touchDown, touchMove, touchUp, usleep, appActivate, keyDown, keyUp, inputText } = at

function robinhood(nameInput){
    appActivate("com.robinhood.release.Robinhood");
    // Literally takes lines 6-35 to ensure search bar is active...
    touchDown(2, 1003.23, 203.40);
    usleep(597650.50);
    touchMove(2, 994.53, 195.73);
    usleep(490523.21);
    touchMove(2, 994.53, 196.67);
    usleep(41322.29);
    touchMove(2, 994.53, 197.65);
    usleep(58068.71);
    touchMove(2, 994.53, 198.60);
    usleep(33252.88);
    touchMove(2, 994.53, 199.58);
    usleep(24818.79);
    touchMove(2, 994.53, 200.53);
    usleep(24324.67);
    touchUp(2, 994.53, 206.31);
    usleep(1977283.38);

    touchDown(2, 979.07, 213.04);
    usleep(490530.75);
    touchMove(2, 977.14, 207.25);
    usleep(24815.00);
    touchMove(2, 977.14, 208.20);
    usleep(24855.12);
    touchMove(2, 977.14, 209.18);
    usleep(16577.83);
    touchMove(2, 977.14, 210.12);
    usleep(8562.46);
    touchMove(2, 977.14, 211.11);
    usleep(7813.29);
    touchUp(2, 971.34, 217.83);

    inputText(nameInput.value);
    usleep(1900000);
    touchDown(2, 135.29, 653.17);
    usleep(540718.62);
    touchUp(2, 135.29, 653.17);
    usleep(7964773.12);

    touchDown(6, 858.25, 2317.79);
    usleep(165717.67);
    touchUp(6, 858.25, 2317.79);
    usleep(3603844.21);

    touchDown(4, 210.68, 1917.97);
    usleep(207691.00);
    touchUp(4, 210.68, 1917.97);
    usleep(2474692.29);

    touchDown(3, 788.66, 1705.59);
    usleep(174623.67);
    touchUp(3, 788.66, 1705.59);

    alert("Hey there sexy, time to manually buy the stock. Make sure it's correct and buy it. Pat yourself on the back, we did it. Automating RSA.");
    usleep(23900000);
}
const label = { type: CONTROLLER_TYPE.LABEL, text: "Please input the following information:" }
const nameInput = { type: CONTROLLER_TYPE.INPUT, title: "Ticker:", key: "Ticker", value: "" }
//const positionPicker = { type: CONTROLLER_TYPE.PICKER, title: "Position:", key: "Position", value: "CEO", options: ["CEO", "CTO", "CFO", "CXO"] }
const public = { type: CONTROLLER_TYPE.SWITCH, title: "Use Public?:", key: "PublicBuy", value: 1 }
const sofi = { type: CONTROLLER_TYPE.SWITCH, title: "Use SOFI?:", key: "SofiBuy", value: 1 }
const hood = { type: CONTROLLER_TYPE.SWITCH, title: "Use Robinhood?:", key: "RobinBuy", value: 1 }


// It's an option for users to determine weather the inputs should be remembered, if you use this control in the dialog.
//const remember = { type: CONTROLLER_TYPE.REMEMBER, on: false }

/*
Define buttons:
type = CONTROLLER_TYPE.BUTTON
title = Button text
color = Button background color, it's optional, the default value is 0x428BCA
width = Button width upon percentage of the dialog width, it's optional, the default value is 0.5, max value is 1.0.
flag = Integer type of button flag for identifying which button is tapped.
collectInputs = Boolean type specifying wheather the dialog should collect the inputs while this button is tapped.
*/

const submitBtn = { type: CONTROLLER_TYPE.BUTTON, title: "START", width: 1.0, flag: 1, collectInputs: true }
const cancelBtn = { type: CONTROLLER_TYPE.BUTTON, title: "STOP", width: 1.0, flag: 2, collectInputs: true }

const controls = [label, nameInput, public, sofi, hood, submitBtn, cancelBtn]

// Pop up the dialog. After popping, the script will suspend waiting for user input until any button is tapped, then returns the flag of tapped button.

// What orientations the dialog could be, it's optional
const orientations = [INTERFACE_ORIENTATION_TYPE.PORTRAIT];

const result = at.dialog({ controls, orientations });

if (result == 1) {
    //alert("name:%s, birthday:%s, gender:%d", nameInput.value, positionPicker.value, developerSwitch.value)
    alert("Starting the script.");
    usleep(3903428.46);
    if (hood.value == 1) {
        robinhood(nameInput)
    }
    /*
    if (sofi.value == 1) {
        sofi(nameInput)
    }
    if (public.value == 1) {
        public(nameInput)
    }*/
} else if (result == 2) {
    alert("You canceled the script.");
}
