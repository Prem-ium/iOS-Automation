// Purpose: Automate Goove comments and video uploads daily.
// You must have videos within the very first folder/photo album you wish to automate uploading.
// Random comments are generated every run.
// Comments and Uploads Videos-- Commenting on 'topics' is not fully guaranteed.

const { touchDown, touchMove, touchUp, usleep, appActivate, keyDown, keyUp, inputText } = at

let comments = ["Nice", "Awesome", "Woah", "cool", "interesting"];

appActivate("com.ihoment.GoVeeSensor");
usleep(1834951.00);

touchDown(6, 620.49, 2469.63);
usleep(90283.33);
touchUp(6, 620.49, 2469.63);
usleep(1014553.17);

touchDown(3, 366.29, 369.67);
usleep(82517.83);
touchUp(3, 366.29, 369.67);
usleep(1021875.96);

touchDown(4, 547.03, 785.82);
usleep(82641.21);
touchUp(4, 547.03, 785.82);
usleep(656178.88);

touchDown(4, 572.16, 793.53);
usleep(82459.29);
touchUp(4, 572.16, 793.53);
usleep(1137925.46);

touchDown(5, 1140.48, 1903.58);
usleep(107470.67);
touchUp(5, 1140.48, 1903.58);
usleep(1179639.58);

touchDown(6, 620.49, 2535.01);
usleep(107540.04);
touchUp(6, 620.49, 2535.01);
usleep(307540.04);

inputText(comments[Math.floor((Math.random()*comments.length))]);

touchDown(6, 1148.21, 1578.73);
usleep(98450.29);
touchUp(6, 1148.21, 1578.73);

touchDown(5, 1193.64, 657.03);
usleep(115858.25);
touchUp(5, 1193.64, 657.03);
usleep(689467.50);

touchDown(3, 112.10, 203.40);
usleep(91324.96);
touchUp(3, 112.10, 203.40);
usleep(1228688.54);

touchDown(6, 1154.98, 1740.17);
usleep(106849.08);
touchUp(6, 1154.98, 1740.17);
usleep(889662.92);

touchDown(2, 828.29, 2276.45);
usleep(82503.42);
touchUp(2, 828.29, 2276.45);
usleep(1129775.79);

touchDown(3, 123.70, 221.65);
usleep(98429.46);
touchUp(3, 123.70, 221.65);
usleep(756836.08);

touchDown(1, 650.45, 1379.77);
usleep(57564.25);
touchUp(1, 650.45, 1379.77);
usleep(872431.96);

touchDown(4, 300.57, 372.54);
usleep(74332.12);
touchUp(4, 300.57, 372.54);
usleep(772709.38);

touchDown(5, 725.84, 2465.78);
usleep(98400.71);
touchUp(5, 725.84, 2465.78);
usleep(3861987.08);

touchDown(6, 1105.68, 250.48);
usleep(140750.96);
touchUp(6, 1105.68, 250.48);
usleep(681300.62);

touchDown(6, 1103.75, 242.81);
usleep(140478.75);
touchUp(6, 1103.75, 242.81);
usleep(748093.92);

touchDown(6, 1075.72, 257.21);
usleep(165405.21);
touchUp(6, 1075.72, 257.21);
usleep(880137.12);

touchDown(6, 1040.93, 270.70);
usleep(157525.75);
touchUp(6, 1040.93, 270.70);
usleep(830712.12);

touchDown(6, 1044.79, 269.72);
usleep(149146.21);
touchUp(6, 1044.79, 269.72);
usleep(805626.29);

touchDown(6, 1040.93, 243.76);
usleep(166230.38);
touchUp(6, 1040.93, 243.76);
usleep(855579.25);

touchDown(6, 1035.13, 254.34);
usleep(174315.33);
touchUp(6, 1035.13, 254.34);

inputText(comments[Math.floor((Math.random()*comments.length))]);

touchDown(1, 1126.95, 1206.76);
usleep(165572.08);
touchUp(1, 1126.95, 1206.76);
