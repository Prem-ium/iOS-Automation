// Beta Script for v6.0.10+ app layouts.

// --------------------------------------
// Information of recording
// Resolution: 1242, 2688
// Front most app: SpringBoard
// Orientation of front most app: Portrait
// --------------------------------------

const { touchDown, touchMove, touchUp, usleep, appActivate, keyDown, keyUp, inputText } = at

let comments = ["Nice", "Awesome", "Woah", "cool","Nice", "Cool", "Woah", "Awesome", "Impressive", "Fantastic", "Wow", "Great", "Incredible", "Remarkable"];

appActivate("com.ihoment.GoVeeSensor");
usleep(1834951.00);

// Open Discover Tab
touchDown(1, 632.09, 2464.83);
usleep(140641.88);
touchUp(1, 632.09, 2464.83);
usleep(324448.21);

touchDown(1, 627.25, 2456.18);
usleep(115847.58);
touchUp(1, 627.25, 2456.18);
usleep(291474.88);

touchDown(1, 634.99, 2471.56);
usleep(98263.21);
touchUp(1, 634.99, 2471.56);

// Switch to video tab
touchDown(4, 255.14, 1746.90);
usleep(82935.04);
touchUp(4, 255.14, 1746.90);
usleep(731375.46);

touchDown(6, 277.37, 1596.00);
usleep(90687.38);
touchUp(6, 277.37, 1596.00);

touchDown(1, 566.36, 2260.12);
usleep(132129.04);
touchUp(1, 566.36, 2260.12);
usleep(855508.58);

usleep(1300000.00); 

// Click latest post, like video, & click comments
touchDown(5, 615.66, 1918.96);
usleep(140847.12);
touchUp(5, 615.66, 1918.96);
usleep(3232210.79);

touchDown(1, 1178.17, 1719.05);
usleep(148957.62);
touchUp(1, 1178.17, 1719.05);
usleep(2301232.62);

touchDown(6, 1158.84, 1900.66);
usleep(182493.33);
touchUp(6, 1158.84, 1900.66);
usleep(2375528.54);

touchDown(2, 300.57, 2478.29);
usleep(157894.79);
touchUp(2, 300.57, 2478.29);


// Type Comment
usleep(1614553.17);
inputText(comments[Math.floor((Math.random()*comments.length))]);
usleep(2014553.17);


// post comment
touchDown(4, 1145.31, 1577.75);
usleep(107844.58);
touchUp(4, 1145.31, 1577.75);
usleep(581600.58);


touchDown(6, 1123.08, 1553.71);
usleep(106952.25);
touchUp(6, 1123.08, 1553.71);
usleep(1379558.46);

touchDown(3, 1139.51, 655.10);
usleep(81788.42);
touchUp(3, 1139.51, 655.10);
usleep(732008.21);

touchDown(4, 69.57, 153.44);
usleep(49774.38);
touchMove(4, 82.14, 164.96);
usleep(8454.42);
touchMove(4, 87.93, 164.96);
usleep(8164.42);
touchMove(4, 95.67, 165.91);
usleep(7438.33);
touchUp(4, 111.13, 177.47);
usleep(615924.50);


// Upload your own video
touchDown(5, 108.23, 179.36);
usleep(140434.00);
touchUp(5, 108.23, 179.36);
usleep(1794765.08);

touchDown(2, 1128.88, 1958.33);
usleep(131961.79);
touchUp(2, 1128.88, 1958.33);
usleep(2535363.50);

touchDown(3, 728.74, 201.47);
usleep(107362.33);
touchUp(3, 728.74, 201.47);
usleep(2310816.25);

touchDown(6, 605.02, 1014.56);
usleep(124066.29);
touchUp(6, 605.02, 1014.56);
usleep(2202354.54);

touchDown(1, 736.47, 2242.82);
usleep(116325.71);
touchUp(1, 736.47, 2242.82);
usleep(1728168.21);

touchDown(5, 114.03, 190.93);
usleep(215961.46);
touchUp(5, 114.03, 190.93);
usleep(1654156.88);

touchDown(4, 719.07, 1385.55);
usleep(90976.54);
touchUp(4, 719.07, 1385.55);
usleep(1039002.83);

touchDown(2, 281.24, 382.18);
usleep(106973.38);
touchUp(2, 281.24, 382.18);
usleep(1838015.71);

touchDown(3, 726.81, 2459.05);
usleep(90731.79);
touchUp(3, 726.81, 2459.05);
usleep(5758734.58);

touchDown(6, 1113.41, 217.83);
usleep(123414.67);
touchUp(6, 1113.41, 217.83);
usleep(706901.33);

touchDown(6, 1102.78, 210.12);
usleep(107905.00);
touchUp(6, 1102.78, 210.12);
usleep(731221.38);

touchDown(6, 1071.85, 215.91);
usleep(123693.75);
touchUp(6, 1071.85, 215.91);
usleep(400255.92);

touchDown(6, 1054.46, 223.58);
usleep(107435.33);
touchUp(6, 1054.46, 223.58);
usleep(324127.75);

touchDown(6, 1054.46, 219.76);
usleep(115237.96);
touchUp(6, 1054.46, 219.76);
usleep(292321.92);

touchDown(6, 1037.06, 225.50);
usleep(98322.50);
touchUp(6, 1037.06, 225.50);
usleep(333479.29);

touchDown(6, 1047.69, 210.12);
usleep(115955.83);
touchUp(6, 1047.69, 210.12);
usleep(249522.58);

touchDown(6, 1044.79, 207.25);
usleep(107559.58);
touchUp(6, 1044.79, 207.25);
usleep(332702.71);

touchDown(6, 1040.93, 212.05);
usleep(115299.54);
touchUp(6, 1040.93, 212.05);
usleep(159111.71);

touchDown(6, 1037.06, 213.04);
usleep(114982.33);
touchUp(6, 1037.06, 213.04);
usleep(217196.29);

touchDown(6, 1059.29, 203.40);
usleep(115892.62);
touchUp(6, 1059.29, 203.40);

touchDown(6, 369.19, 1448.96);
usleep(99441.50);
touchUp(6, 369.19, 1448.96); 


// spam cancel delete video button
touchDown(5, 392.39, 1423.04);
usleep(90877.21);
touchUp(5, 392.39, 1423.04);
usleep(91655.29);

touchDown(5, 385.62, 1424.92);
usleep(74620.29);
touchUp(5, 385.62, 1424.92);
usleep(99921.50);

touchDown(5, 370.16, 1434.56);
usleep(66000.21);
touchUp(5, 370.16, 1434.56);
usleep(116927.04);

touchDown(5, 366.29, 1439.36);
usleep(64976.67);
touchUp(5, 366.29, 1439.36);
usleep(84562.42);

touchDown(5, 368.23, 1441.29);
usleep(82408.58);
touchUp(5, 368.23, 1441.29);



// Topic Support to be included. 


touchDown(5, 324.73, 559.99);
usleep(99188.29);
touchUp(5, 324.73, 559.99);
usleep(107747.96);

touchDown(5, 321.83, 558.06);
usleep(66871.17);
touchUp(5, 321.83, 558.06);
usleep(166279.42);

touchDown(5, 307.34, 564.79);
usleep(66101.50);
touchUp(5, 307.34, 564.79);
usleep(132953.50);

touchDown(5, 315.07, 564.79);
usleep(66712.54);
touchUp(5, 315.07, 564.79);
usleep(132565.96);

touchDown(5, 306.37, 565.73);
usleep(83284.75);
touchUp(5, 306.37, 565.73);
usleep(99673.58);

touchDown(5, 317.00, 572.46);
usleep(91386.17);
touchUp(5, 317.00, 572.46);
usleep(108262.88);

touchDown(5, 301.54, 576.31);
usleep(91131.62);
touchUp(5, 301.54, 576.31);
usleep(133051.17);

touchDown(5, 298.64, 575.37);
usleep(74675.79);
touchUp(5, 298.64, 575.37);
usleep(150061.79);

touchDown(5, 300.57, 572.46);
usleep(74401.67);
touchUp(5, 300.57, 572.46);
usleep(1363075.04);

touchDown(3, 850.52, 941.51);
usleep(140699.67);
touchUp(3, 850.52, 941.51);
usleep(2692558.79);

touchDown(2, 292.84, 2507.12);
usleep(115089.00);
touchUp(2, 292.84, 2507.12);

// submit
touchDown(5, 1120.18, 1219.27);
usleep(182187.50);
touchUp(5, 1120.18, 1219.27);