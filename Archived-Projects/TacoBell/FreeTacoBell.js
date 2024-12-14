
const { touchDown, touchMove, touchUp, usleep, appActivate, keyDown, keyUp , inputText} = at
// Random words to use for fake email address
let words = ["shake", "new", "rest", "penguin", "gotham", "arkham", "knight", "gamer", "another", "email",
             "turnove", "random", "terms", "hast", "ensure", "betfru", "flix", "speak", "understanddd", "more",
            "enjoy", "bubble_tea", "spice"];
let email =
            words[Math.floor(Math.random() * words.length)] +
            words[Math.floor(Math.random() * words.length)] +
            words[Math.floor(Math.random() * words.length)] +
            Math.floor(Math.random() * 999) +
            "@gmail.com";

// First and Last Name
let firstName = "AK";
let lastName = "Lee";

appActivate("com.tacobell.ARgame");

function nextInput() {
  touchDown(6, 212.62, 1590.26);
  usleep(162469.62);
  touchUp(6, 212.62, 1590.26);
  usleep(100000);
}

touchDown(1, 809.93, 2534.03);
usleep(107481.92);
touchUp(1, 809.93, 2534.03);
usleep(423742.42);

touchDown(1, 810.89, 2514.79);
usleep(99177.79);
touchUp(1, 810.89, 2514.79);
usleep(116345.5);

touchDown(1, 792.53, 2483.09);
usleep(107688.88);
touchUp(1, 792.53, 2483.09);
usleep(140786.92);

touchDown(1, 794.46, 2499.45);
usleep(66228.21);
touchUp(1, 794.46, 2499.45);
usleep(175542.71);

touchDown(1, 790.6, 2516.72);
usleep(81232.96);
touchUp(1, 790.6, 2516.72);
usleep(109063.5);

touchDown(1, 790.6, 2517.7);
usleep(74560.38);
touchUp(1, 790.6, 2517.7);
usleep(133343.08);

touchDown(1, 781.9, 2497.52);
usleep(74525.42);
touchUp(1, 781.9, 2497.52);
usleep(365682.38);

touchDown(1, 815.73, 2507.12);
usleep(90943.46);
touchUp(1, 815.73, 2507.12);
usleep(133098.29);

touchDown(1, 799.29, 2493.67);
usleep(82712.5);
touchUp(1, 799.29, 2493.67);
usleep(116361.38);

touchDown(1, 791.56, 2486.94);
usleep(83011.08);
touchUp(1, 791.56, 2486.94);
usleep(116352.08);

touchDown(1, 790.6, 2482.14);
usleep(82895.75);
touchUp(1, 790.6, 2482.14);
usleep(124962.25);

touchDown(1, 776.1, 2485.96);
usleep(66238.29);
touchUp(1, 776.1, 2485.96);
usleep(107865.0);

touchDown(1, 783.83, 2485.01);
usleep(91557.08);
touchUp(1, 783.83, 2485.01);
usleep(100043.21);

touchDown(1, 779.96, 2476.36);
usleep(89953.83);
touchUp(1, 779.96, 2476.36);
usleep(1587453.29);

touchDown(1, 749.04, 2498.47);
usleep(98328.17);
touchUp(1, 749.04, 2498.47);
usleep(541135.54);

touchDown(2, 438.78, 2211.11);
usleep(91080.79);
touchUp(2, 438.78, 2211.11);
usleep(1660819.79);

touchDown(3, 558.63, 1884.34);
usleep(115412.58);
touchUp(3, 558.63, 1884.34);

usleep(100000);
inputText(email);
usleep(100000);

// First Name
nextInput();
nextInput();
touchDown(3, 225.18, 1596.0);
usleep(157314.75);
touchUp(3, 225.18, 1596.0);

usleep(1100000);
inputText(firstName);
usleep(1100000);

// Last Name
nextInput();

usleep(1100000);
inputText(lastName);
usleep(1100000);

nextInput();
// birthday, not implemented

// password
nextInput();

usleep(100000);
inputText(words[Math.floor(Math.random() * words.length)] + "Failsafe!739383");
usleep(100000);

// close keyboard
touchDown(6, 1121.15, 1607.57);
usleep(172977.04);
touchUp(6, 1121.15, 1607.57);
usleep(1146780.54);

// create account
touchDown(1, 942.34, 2482.14);
usleep(173953.88);
touchUp(1, 942.34, 2482.14);
