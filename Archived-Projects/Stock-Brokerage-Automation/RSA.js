const { touchDown, touchMove, touchUp, usleep, appActivate, keyDown, keyUp, inputText } = at

function robinhood(nameInput){
    appActivate("com.robinhood.release.Robinhood");
    touchUp(4, 1054.46, 1024.16);
    usleep(3413110.54);

    touchDown(5, 1026.43, 226.49);
    usleep(115799.75);
    touchUp(5, 1026.43, 226.49);
    usleep(9000000);
    inputText(nameInput.value);
    usleep(1900000);

    touchDown(6, 261.91, 636.85);
    usleep(306766.88);
    touchUp(6, 261.91, 636.85);
    usleep(6320678.46);

    touchDown(2, 884.35, 2342.77);
    usleep(115287.25);
    touchUp(2, 884.35, 2342.77);
    usleep(1038961.75);

    touchDown(5, 877.58, 2170.75);
    usleep(248759.25);
    touchUp(5, 877.58, 2170.75);
    usleep(2034980.25);

    touchDown(3, 212.62, 1897.79);
    usleep(207430.08);
    touchUp(3, 212.62, 1897.79);
    usleep(1354136.58);

    touchDown(1, 692.01, 1705.59);
    usleep(231581.58);
    touchUp(1, 692.01, 1705.59);

    alert("Hey there sexy, time to manually buy the stock. Make sure it's correct and buy it. Pat yourself on the back, we did it. Automating RSA.");
    usleep(23900000);
}
function sofiInvest(nameInput){
    appActivate("com.sofi.mobile");
    usleep(7913110.54);
    // Click invest
    touchDown(4, 865.02, 2488.87);
    usleep(198817.83);
    touchUp(4, 865.02, 2488.87);
    // Search
    usleep(257156.50 + 157156.50);
    touchDown(1, 783.83, 1662.32);
    usleep(157156.50);
    touchUp(1, 783.83, 1662.32);
    usleep(3538421.58 + 157156.50);

    touchDown(4, 334.40, 370.62);
    usleep(124159.38);
    touchUp(4, 334.40, 370.62);
    usleep(257156.50);

    // Enter Ticker
    usleep(9000000);
    inputText(nameInput.value);
    usleep(1900000);

    // Click on Ticker and Input One Share
    touchDown(4, 577.96, 667.61);
    usleep(182090.50);
    touchUp(4, 577.96, 667.61);
    usleep(3904058.25);

    touchDown(3, 327.63, 2449.45);
    usleep(157480.83);
    touchUp(3, 327.63, 2449.45);
    usleep(5298242.50);

    touchDown(2, 223.25, 1858.38);
    usleep(181406.88);
    touchUp(2, 223.25, 1858.38);

    // Review
    touchDown(5, 1048.66, 1741.15);
    usleep(141128.46);
    touchUp(5, 1048.66, 1741.15);
    alert("Review the purchase and confirm it is correct before buying.");
    usleep(23900000);
}
function publicInvest(nameInput){
    appActivate("com.t3securities.matador");
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
    usleep(3903428.46);
    if (sofi.value == 1) {
        sofiInvest(nameInput)
    }
    if (hood.value == 1) {
        robinhood(nameInput)
    }
    if (public.value == 1) {
        publicInvest(nameInput)
    }

} else if (result == 2) {
    alert("Script was stopped by cancel button.");
}
