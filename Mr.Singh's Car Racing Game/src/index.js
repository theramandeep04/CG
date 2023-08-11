import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';

let Clock = new THREE.Clock();
Clock.start();

let line, line_1;

let Int_x = 110.82591138044131;
let Int_z = 12.665289114923294;
let Fin_x = 90.78880565311941;
let Fin_z = -1075.7502907046955;

let Int_x_1 = -80.63649693493272;
let Int_z_1 = 58.242120169284505;
let Fin_x_1 = -17.196034426365273;
let Fin_z_1 = -1943.0554419096823;

let count = 1;
let count_1 = 1;

/*Line Helpers */
const points = [
new THREE.Vector3(110.82591138044131, 0, 12.665289114923294),new THREE.Vector3(90.78880565311941, 0, -1075.7502907046955),new THREE.Vector3(-58.182632720152384, 0, -1988.7533765177386),new THREE.Vector3(-406.6223658218586, 0, -2923.7793482065736),new THREE.Vector3(-266.24742719300684, 0, -3573.5390224308994),new THREE.Vector3(-253.418732293597, 0, -3585.4711214573854),new THREE.Vector3(19.546264430843916, 0, -3876.422091140726),new THREE.Vector3(452.3185199786414, 0, -4236.062059212488),new THREE.Vector3(468.7811086776081, 0, -4242.05652110065),new THREE.Vector3(1330.9234506694575, 0, -4284.582626494367),new THREE.Vector3(1728.056304569808, 0, -4254.954564697888),new THREE.Vector3(1998.329974083288, 0, -4239.098404097373),new THREE.Vector3(2380.4037179248994, 0, -3920.5918435062604),new THREE.Vector3(2245.8477095336484, 0, -3339.023363450991),new THREE.Vector3(2154.799576168481, 0, -2972.93648071233),new THREE.Vector3(2085.6605801570963, 0, -2026.798603558678),new THREE.Vector3(1880.8332309722007, 0, -568.5076192777772),new THREE.Vector3(1301.240941078837, 0, -532.1675816612347),new THREE.Vector3(1295.2903516015658, 0, -548.6433629163982),new THREE.Vector3(1347.8126218372774, 0, -1187.975438053953),new THREE.Vector3(1388.0943193649125, 0, -1635.8119358247027),new THREE.Vector3(1389.6953239290563, 0, -1656.1891383899615),new THREE.Vector3(1544.7586151777302, 0, -2398.5919755581863),new THREE.Vector3(1592.9205085233064, 0, -2973.6021752024444),new THREE.Vector3(1625.2599528411783, 0, -3379.311997680789),new THREE.Vector3(1628.023657402567, 0, -3396.6126432495926),new THREE.Vector3(1546.5496318063024, 0, -3782.12487103373),new THREE.Vector3(1024.9950933282735, 0, -3911.883962804777),new THREE.Vector3(1002.104441014002, 0, -3907.2248173222742),new THREE.Vector3(749.7381979932326, 0, -3823.1317490143338),new THREE.Vector3(540.8493569361193, 0, -3560.375889380147),new THREE.Vector3(484.07099269025866, 0, -3038.332666094534),new THREE.Vector3(486.8622476701406, 0, -3021.0364440897947),new THREE.Vector3(547.8173073136142, 0, -2790.8732468173903),new THREE.Vector3(653.3635554107104, 0, -2048.3777503159613),new THREE.Vector3(650.3994806550568, 0, -2031.1103051997047),new THREE.Vector3(638.0675200452649, 0, -1688.808259856251),new THREE.Vector3(640.4010291091661, 0, -1659.7016500322143),new THREE.Vector3(550.3368677554383, 0, -359.0147237129989),new THREE.Vector3(614.688569036539, 0, 199.8669953662489),new THREE.Vector3(1094.761543677383, 0, 594.1716254445291),
new THREE.Vector3(1526.9154811498413, 0, 1082.6686812560902),new THREE.Vector3(1526.0982626259295, 0, 1103.0882469444743),new THREE.Vector3(1300.0743607826087, 0, 2279.5166425448174),new THREE.Vector3(910.5625839426693, 0, 1390.203246216923),new THREE.Vector3(321.8275918087641, 0, 1379.8190233579303),new THREE.Vector3(317.91933835698313, 0, 1396.8949256196454),new THREE.Vector3(332.61953276497536, 0, 2137.0152625009196),new THREE.Vector3(-48.38183464640325, 0, 1529.0462923666703),new THREE.Vector3(-39.213402556689346, 0, 1108.7553851542427),new THREE.Vector3(110.82591138044131, 0, 12.665289114923294)];


const points_2 = [
new THREE.Vector3(-80.63649693493272, 0, 58.242120169284505),new THREE.Vector3(-17.196034426365273, 0, -1943.0554419096823),new THREE.Vector3(-176.64570651449858, 0, -2320.371012180431),new THREE.Vector3(-297.7593489138339, 0, -2579.700267415291),new THREE.Vector3(-411.9994596233227, 0, -2918.7550228031123),new THREE.Vector3(-416.7451102243694, 0, -2929.427473335807),new THREE.Vector3(-483.58696001944713, 0, -3213.502731413096),new THREE.Vector3(-353.32760127288293, 0, -3555.2921578786313),new THREE.Vector3(-106.96080515348204, 0, -3790.370292290352),new THREE.Vector3(168.2515014685185, 0, -4094.205365707294),new THREE.Vector3(484.1127126506378, 0, -4249.99827389554),new THREE.Vector3(1386.6178626595076, 0, -4305.347944328539),new THREE.Vector3(1401.1437581662603, 0, -4303.878808621091),new THREE.Vector3(2120.927060623796, 0, -4224.519747262838),new THREE.Vector3(2387.2820636474444, 0, -3837.2064528896776),new THREE.Vector3(2383.9076064486903, 0, -3814.097662111016),new THREE.Vector3(2309.492570452133, 0, -3365.496710243962),new THREE.Vector3(2305.989504777388, 0, -3277.9667809004573),new THREE.Vector3(2305.7559670657383, 0, -3272.131452277557),new THREE.Vector3(2305.6391982099135, 0, -3269.213787966107),new THREE.Vector3(2305.405660498264, 0, -3263.3784593432065),new THREE.Vector3(2305.172122786614, 0, -3257.543130720306),new THREE.Vector3(2304.9385850749645, 0, -3251.707802097406),new THREE.Vector3(2304.705047363315, 0, -3245.8724734745056),new THREE.Vector3(2304.471509651665, 0, -3240.0371448516053),new THREE.Vector3(2246.051879638632, 0, -2852.5981585549634),new THREE.Vector3(2175.4805470026095, 0, -2380.5617214287868),new THREE.Vector3(2162.618559264997, 0, -2065.768907473924),new THREE.Vector3(2111.1962263998007, 0, -1687.1399995972308),new THREE.Vector3(2062.3218475837066, 0, -1349.319391313393),new THREE.Vector3(2050.141183163967, 0, -1055.5815925621976),new THREE.Vector3(2047.52302708303, 0, -1038.2583232767577),new THREE.Vector3(1987.8670264347995, 0, -669.3277395748618),new THREE.Vector3(1907.488017955869, 0, -409.9029605978566),new THREE.Vector3(1552.3633020354848, 0, -201.1591781080189),new THREE.Vector3(1299.3721514293532, 0, -853.4290363096804),new THREE.Vector3(1384.6026464386996, 0, -1131.0144925504987),new THREE.Vector3(1410.7111793849092, 0, -1403.6385977224738),new THREE.Vector3(1438.332485330692, 0, -1942.601993583546),new THREE.Vector3(1650.7609309744432, 0, -2804.1888212754984),
new THREE.Vector3(1665.9966347944837, 0, -3084.901967375079),new THREE.Vector3(1663.5174006616578, 0, -3105.1910530645478),new THREE.Vector3(1592.9498880519407, 0, -3386.480986296835),new THREE.Vector3(1372.6527169457588, 0, -3672.605806433587),new THREE.Vector3(1054.8164798675668, 0, -3766.024151566186),new THREE.Vector3(733.7716669166821, 0, -3708.8462919492326),new THREE.Vector3(720.3287081897349, 0, -3703.150077358332),new THREE.Vector3(436.96005854667277, 0, -3464.5121317487774),new THREE.Vector3(358.97804266665383, 0, -3078.5207041254716),new THREE.Vector3(365.1498872336338, 0, -3062.123791774634),new THREE.Vector3(522.6353811875102, 0, -2721.710314509957),new THREE.Vector3(747.8656016751311, 0, -2111.3097350107982),new THREE.Vector3(689.4746338544434, 0, -1752.4344910413577),new THREE.Vector3(590.284175974789, 0, -1192.3098923110315),new THREE.Vector3(559.3450040260669, 0, -791.010081531909),new THREE.Vector3(558.8779286027672, 0, -779.3394242861089),new THREE.Vector3(578.3085530658759, 0, 42.712170219159134),new THREE.Vector3(709.1137292230298, 0, 311.23316346777773),new THREE.Vector3(913.7645911537704, 0, 517.0651318431511),new THREE.Vector3(929.2164919303948, 0, 525.3228047834745),new THREE.Vector3(1491.8153837633747, 0, 856.0786483744549),new THREE.Vector3(1616.809454626315, 0, 1235.000985231968),new THREE.Vector3(1557.4899885876716, 0, 1888.2933137111831),new THREE.Vector3(1473.8656969868096, 0, 2171.875421593194),new THREE.Vector3(1361.6932343513095, 0, 2455.1294325257054),new THREE.Vector3(1358.507081854329, 0, 2469.377535285933),new THREE.Vector3(1151.5335515379759, 0, 2803.898308073733),new THREE.Vector3(693.9253139214399, 0, 2400.2708705861164),new THREE.Vector3(848.4390911897456, 0, 2173.1141510399975),new THREE.Vector3(854.1031745916937, 0, 2159.6576225420613),new THREE.Vector3(896.8373571790341, 0, 1811.6118358761405),new THREE.Vector3(875.0296186664623, 0, 1726.7697322897247),new THREE.Vector3(873.5757694322908, 0, 1721.1135920506304),new THREE.Vector3(872.1219201981194, 0, 1715.457451811536),new THREE.Vector3(870.6680709639479, 0, 1709.8013115724416),new THREE.Vector3(838.367410486258, 0, 1395.8019729278496),new THREE.Vector3(258.87520400166574, 0, 1250.3449351400384),new THREE.Vector3(270.03330621579835, 0, 1704.496926971943),new THREE.Vector3(186.41065885446397, 0, 2145.187257753666),new THREE.Vector3(119.02102034848346, 0, 2450.371859532123),new THREE.Vector3(107.21176149793868, 0, 2470.527032699349),
new THREE.Vector3(-339.2909275624349, 0, 2169.679577608857),new THREE.Vector3(-158.32910313425387, 0, 1478.871444690874),new THREE.Vector3(-217.7270262205308, 0, 1162.2747793462822),new THREE.Vector3(-213.58146937844742, 0, 1136.3238109930787),new THREE.Vector3(-149.59387390828016, 0, 866.976392907253),new THREE.Vector3(-92.94139249334242, 0, 594.3920346307239),new THREE.Vector3(-92.52670101544253, 0, 579.7979251690897),new THREE.Vector3(-77.34899292430643, 0, 45.653518873279836)];
/*---------------------------------------------------------------------- */

/*Construct Lines ------------------------------------------------------ */
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const geometry = new THREE.BufferGeometry().setFromPoints(points);
line = new THREE.Line(geometry, material);

const material_1 = new THREE.LineBasicMaterial({ color: 0xff0000 });
const geometry_1 = new THREE.BufferGeometry().setFromPoints(points_2);
line_1 = new THREE.Line(geometry_1, material_1);
/*Construct Lines Complete -------------------------------------------- */

let CarPath = [
	[110.82591138044131, 0, 12.665289114923294],	[90.78880565311941, 0, -1075.7502907046955],	[-58.182632720152384, 0, -1988.7533765177386],	[-406.6223658218586, 0, -2923.7793482065736],	[-266.24742719300684, 0, -3573.5390224308994],	[-253.418732293597, 0, -3585.4711214573854],	[19.546264430843916, 0, -3876.422091140726],	[452.3185199786414, 0, -4236.062059212488],	[468.7811086776081, 0, -4242.05652110065],	[1330.9234506694575, 0, -4284.582626494367],	[1728.056304569808, 0, -4254.954564697888],	[1998.329974083288, 0, -4239.098404097373],	[2380.4037179248994, 0, -3920.5918435062604],	[2245.8477095336484, 0, -3339.023363450991],	[2154.799576168481, 0, -2972.93648071233],	[2085.6605801570963, 0, -2026.798603558678],	[1880.8332309722007, 0, -568.5076192777772],	[1301.240941078837, 0, -532.1675816612347],	[1295.2903516015658, 0, -548.6433629163982],	[1347.8126218372774, 0, -1187.975438053953],	[1388.0943193649125, 0, -1635.8119358247027],	[1389.6953239290563, 0, -1656.1891383899615],	[1544.7586151777302, 0, -2398.5919755581863],	[1592.9205085233064, 0, -2973.6021752024444],	[1625.2599528411783, 0, -3379.311997680789],	[1628.023657402567, 0, -3396.6126432495926],	[1546.5496318063024, 0, -3782.12487103373],	[1024.9950933282735, 0, -3911.883962804777],	[1002.104441014002, 0, -3907.2248173222742],	[749.7381979932326, 0, -3823.1317490143338],	[540.8493569361193, 0, -3560.375889380147],	[484.07099269025866, 0, -3038.332666094534],	[486.8622476701406, 0, -3021.0364440897947],	[547.8173073136142, 0, -2790.8732468173903],	[653.3635554107104, 0, -2048.3777503159613],	[650.3994806550568, 0, -2031.1103051997047],	[638.0675200452649, 0, -1688.808259856251],	[640.4010291091661, 0, -1659.7016500322143],	[550.3368677554383, 0, -359.0147237129989],	[614.688569036539, 0, 199.8669953662489],	[1094.761543677383, 0, 594.1716254445291],	[1526.9154811498413, 0, 1082.6686812560902],	[1526.0982626259295, 0, 1103.0882469444743],	[1300.0743607826087, 0, 2279.5166425448174],	[910.5625839426693, 0, 1390.203246216923],	[321.8275918087641, 0, 1379.8190233579303],	[317.91933835698313, 0, 1396.8949256196454],	[332.61953276497536, 0, 2137.0152625009196],	[-48.38183464640325, 0, 1529.0462923666703],	[-39.213402556689346, 0, 1108.7553851542427],	[110.82591138044131, 0, 12.665289114923294]
]

let Car_Path2 = [
	[-80.63649693493272, 0, 58.242120169284505],	[-17.196034426365273, 0, -1943.0554419096823],	[-176.64570651449858, 0, -2320.371012180431],	[-297.7593489138339, 0, -2579.700267415291],	[-411.9994596233227, 0, -2918.7550228031123],	[-416.7451102243694, 0, -2929.427473335807],	[-483.58696001944713, 0, -3213.502731413096],	[-353.32760127288293, 0, -3555.2921578786313],	[-106.96080515348204, 0, -3790.370292290352],	[168.2515014685185, 0, -4094.205365707294],	[484.1127126506378, 0, -4249.99827389554],	[1386.6178626595076, 0, -4305.347944328539],	[1401.1437581662603, 0, -4303.878808621091],	[2120.927060623796, 0, -4224.519747262838],	[2387.2820636474444, 0, -3837.2064528896776],	[2383.9076064486903, 0, -3814.097662111016],	[2309.492570452133, 0, -3365.496710243962],	[2305.989504777388, 0, -3277.9667809004573],	[2305.7559670657383, 0, -3272.131452277557],	[2305.6391982099135, 0, -3269.213787966107],	[2305.405660498264, 0, -3263.3784593432065],	[2305.172122786614, 0, -3257.543130720306],	[2304.9385850749645, 0, -3251.707802097406],	[2304.705047363315, 0, -3245.8724734745056],	[2304.471509651665, 0, -3240.0371448516053],	[2246.051879638632, 0, -2852.5981585549634],	[2175.4805470026095, 0, -2380.5617214287868],	[2162.618559264997, 0, -2065.768907473924],	[2111.1962263998007, 0, -1687.1399995972308],	[2062.3218475837066, 0, -1349.319391313393],	[2050.141183163967, 0, -1055.5815925621976],	[2047.52302708303, 0, -1038.2583232767577],
	[1987.8670264347995, 0, -669.3277395748618],	[1907.488017955869, 0, -409.9029605978566],	[1552.3633020354848, 0, -201.1591781080189],	[1299.3721514293532, 0, -853.4290363096804],	[1384.6026464386996, 0, -1131.0144925504987],	[1410.7111793849092, 0, -1403.6385977224738],	[1438.332485330692, 0, -1942.601993583546],	[1650.7609309744432, 0, -2804.1888212754984],	[1665.9966347944837, 0, -3084.901967375079],	[1663.5174006616578, 0, -3105.1910530645478],	[1592.9498880519407, 0, -3386.480986296835],	[1372.6527169457588, 0, -3672.605806433587],	[1054.8164798675668, 0, -3766.024151566186],	[733.7716669166821, 0, -3708.8462919492326],	[720.3287081897349, 0, -3703.150077358332],	[436.96005854667277, 0, -3464.5121317487774],	[358.97804266665383, 0, -3078.5207041254716],	[365.1498872336338, 0, -3062.123791774634],	[522.6353811875102, 0, -2721.710314509957],	[747.8656016751311, 0, -2111.3097350107982],	[689.4746338544434, 0, -1752.4344910413577],	[590.284175974789, 0, -1192.3098923110315],	[559.3450040260669, 0, -791.010081531909],	[558.8779286027672, 0, -779.3394242861089],	[578.3085530658759, 0, 42.712170219159134],	[709.1137292230298, 0, 311.23316346777773],	[913.7645911537704, 0, 517.0651318431511],	[929.2164919303948, 0, 525.3228047834745],	[1491.8153837633747, 0, 856.0786483744549],	[1616.809454626315, 0, 1235.000985231968],	[1557.4899885876716, 0, 1888.2933137111831],	[1473.8656969868096, 0, 2171.875421593194],
	[1361.6932343513095, 0, 2455.1294325257054],	[1358.507081854329, 0, 2469.377535285933],	[1151.5335515379759, 0, 2803.898308073733],	[693.9253139214399, 0, 2400.2708705861164],	[848.4390911897456, 0, 2173.1141510399975],	[854.1031745916937, 0, 2159.6576225420613],	[896.8373571790341, 0, 1811.6118358761405],	[875.0296186664623, 0, 1726.7697322897247],	[873.5757694322908, 0, 1721.1135920506304],	[872.1219201981194, 0, 1715.457451811536],	[870.6680709639479, 0, 1709.8013115724416],	[838.367410486258, 0, 1395.8019729278496],	[258.87520400166574, 0, 1250.3449351400384],	[270.03330621579835, 0, 1704.496926971943],	[186.41065885446397, 0, 2145.187257753666],	[119.02102034848346, 0, 2450.371859532123],	[107.21176149793868, 0, 2470.527032699349],	[-339.2909275624349, 0, 2169.679577608857],	[-158.32910313425387, 0, 1478.871444690874],	[-217.7270262205308, 0, 1162.2747793462822],	[-213.58146937844742, 0, 1136.3238109930787],	[-149.59387390828016, 0, 866.976392907253],	[-92.94139249334242, 0, 594.3920346307239],	[-92.52670101544253, 0, 579.7979251690897],	[-77.34899292430643, 0, 45.653518873279836]
]

let Health = 100; // Health of the player
let Fuel = 100; // Fuel of the player
let Score = 0; // Score of the player

let isPOV = 0;

let camera, controls, scene, renderer;
let can;
let bird_eye_renderer;
let bird_eye;

const frustumSize = 5000;

camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000000);
camera.position.set(0, 50, 150);

let FuelTank = [
	[60.873041091420454, 0, - 1907.8854737263919],	[-367.24245420600977, 0, -2479.427586682133],	[48.04237154649154, 0, -3960.8580737403377],	[68.4901351607058, 0, -3977.366476545493],	[1501.9237979593831, 0, -4371.767757269876],	[2318.7470423741443, 0, -3421.260484062915],	[2153.0845236944206, 0, -1981.6720136944612],	[2101.050292229666, 0, -1579.1611450185273],	[2063.647410184328, 0, -1268.9680148323496],	[1963.2397168090085, 0, -857.6213133604109],	[1307.8585129482951, 0, -836.6381164751313],	[1451.344748425768, 0, -1400.8169789500128],	[1485.557223662956, 0, -1896.250291175657],	[1550.2080834626845, 0, -2370.038995919365],	[1635.3288599596915, 0, -2801.1891534655465],	[1635.0528922365513, 0, -3162.0292181915484],	[1336.843375729829, 0, -3797.833110100884],	[1319.5077502231175, 0, -3800.3504442833173],	[821.2403684568039, 0, -3710.618852694087],	[465.8654293443228, 0, -3315.3978873861224],	[470.5252899253826, 0, -3295.4961462722113],	[574.672744963673, 0, -2754.863127863875],	[766.9382081629524, 0, -2196.372629644826],	[711.808196519213, 0, -1412.362670559135],	[659.1505824310369, 0, -1074.8880929659792],	[624.4885997802527, 0, -820.5794875604718],	[613.338998399867, 0, -549.2863048428699],	[615.2659910905519, 0, -254.41681820277316],	[631.5509464723799, 0, 57.57187650544248],	[632.6015158659003, 0, 75.06034996510725],	[858.7401092507354, 0, 455.0692034885388],	[881.5523125395458, 0, 460.0698588204126],
	[1279.1985905536067, 0, 574.84953381561],	[1582.0719577736868, 0, 909.2211777869965],	[1564.7786973182829, 0, 1133.317531391225],	[1533.516176616605, 0, 1558.3262355303575],	[1516.6083891733049, 0, 1726.8401409618425],	[1462.6607464657766, 0, 2030.9658888277224],	[1031.2150679447798, 0, 2969.172461146516],	[863.765547453525, 0, 2333.9438214829943],	[943.1741155300306, 0, 2116.2853768550763],	[948.1158087736208, 0, 1938.2756681535645],	[941.8924139999368, 0, 1751.5187656045703],	[285.6015442909424, 0, 1452.832762033113],	[288.25073625262695, 0, 1473.0962338720701],	[318.65687945920746, 0, 1567.3384870744173],	[341.4017226436124, 0, 1624.284202527968],	[368.0585968706278, 0, 2298.712827832877],	[361.55682082141976, 0, 2324.175846275433],	[50.17305317331068, 0, 2629.578150266865],	[-347.9350858583221, 0, 2357.4595696137644],	[-297.65514157287043, 0, 1917.250343981672],	[-297.31145330050344, 0, 1876.371788743364],	[-135.63235307210223, 0, 1338.0949185230038],	[-80.47025428693311, 0, 1065.8724968952595],	[-80.11108276401012, 0, 835.3502513603692],	[-39.1867442118355, 0, 411.0192253702205],	[-21.076782813029208, 0, 233.8242833247367],	[110.82591138044131, 0, 12.665289114923294]
];

/* 20 Random cans will be generated */
let selectedCans = [];
for (let i = 0; i < 20; i++) {
	/* Randomly generating cans on the track*/
	let random = Math.floor(Math.random() * 58);
	if (!selectedCans.includes(random)) {
		selectedCans.push(random);
	}
}

let sourceNode;

function playSound(url) {
	// create a new AudioContext
	const audioContext = new AudioContext();
  
	// create a new AudioBufferSourceNode
	const sourceNode = audioContext.createBufferSource();
  
	// load the sound file using an XMLHttpRequest
	const request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.responseType = 'arraybuffer';
  
	request.onload = function() {
	  // decode the audio data from the responsek
	  audioContext.decodeAudioData(request.response, function(buffer) {
		// set the buffer as the source of the sourceNode
		sourceNode.buffer = buffer;
		// connect the sourceNode to the AudioContext's destination
		sourceNode.connect(audioContext.destination);
		// start playing the sound
		sourceNode.start();
	  });
	};
  
	// send the request to load the sound file
	request.send();
}

playSound('../src/sound/bg.mp3');

function stopSound() {
	if (sourceNode) {
	  // stop the audio playback
	  sourceNode.stop();
	  // reset the sourceNode
	  sourceNode = null;
	}
}

// console.log(selectedCans)

const aspect = window.innerWidth / window.innerHeight;
bird_eye = new THREE.OrthographicCamera(frustumSize * aspect / - 8, frustumSize * aspect / 8, frustumSize / 8, frustumSize / - 8, 1, 1000);
bird_eye.position.set(0, 200, 0);
bird_eye.zoom = 6

let speed = 0;
let rotation_ticks = 0;

const loader = new GLTFLoader();
let car
loader.load(
	// resource URL
	'../src/amqueen/scene.gltf',
	// called when the resource is loaded
	function (gltf) {
		console.log(gltf);
		car = gltf.scene;
		car.scale.set(15, 15, 15)
		car.position.set(0, 0, 0)
		car.rotation.y = 3.14
		car.attach(camera)
		car.attach(bird_eye)
		scene.add(car);
	},
	// called while loading is progressing
	function (xhr) {
		console.log((xhr.loaded / xhr.total * 100) + '% loaded');
	},
	// called when loading has errors
	function (error) {
		console.log('An error happened');
	}
);

let Car2;
loader.load(
	// resource URL
	'../src/chick/scene.gltf',
	// called when the resource is loaded
	function (gltf) {
		Car2 = gltf.scene;
		Car2.scale.set(15, 15, 15)
		Car2.position.set(110.82591138044131, 0, 12.665289114923294)
		Car2.rotation.y = 3.14
		scene.add(Car2);
	},
	// called while loading is progressing
	function (xhr) {
		console.log((xhr.loaded / xhr.total * 100) + '% loaded');
	},
	// called when loading has errors
	function (error) {
		console.log('An error happened');
	}
)

let Car3;
/*Load Another Car */
loader.load(
	// resource URL
	'../src/king/scene.gltf',
	// called when the resource is loaded
	function (gltf) {
		Car3 = gltf.scene;
		Car3.scale.set(15, 15, 15)
		Car3.position.set(-80.63649693493272, 0, 58.242120169284505)
		// Car3.position.set(0, 0, 0)
		Car3.rotation.y = 3.14
		scene.add(Car3);
	},
	// called while loading is progressing
	function (xhr) {
		console.log((xhr.loaded / xhr.total * 100) + '% loaded');
	},
	// called when loading has errors
	function (error) {
		console.log('An error happened');
	}
)


let FuelModel = []
function loadFuel() {
	loader.load(
		// resource URL
		'../src/fuel/scene.gltf',
		// called when the resource is loaded
		function (gltf) {
			gltf.scene.scale.set(50, 50, 50)
			for (let i = 0; i < 58; i++) {
				if (selectedCans.includes(i)) {
					FuelModel[i] = SkeletonUtils.clone(gltf.scene)
					FuelModel[i].position.set(FuelTank[i][0], FuelTank[i][1], FuelTank[i][2])
					scene.add(FuelModel[i])
				}
			}
		});
}

let stadium
loader.load(
	// resource URL
	'../src/race_track/scene.gltf',
	// called when the resource is loaded
	function (gltf) {
		console.log(gltf);
		stadium = gltf.scene;
		stadium.scale.set(2000, 2000, 2000)
		stadium.position.set(0, -10, 0)
		stadium.rotation.y = 1.40
		scene.add(stadium);
	},
	// called while loading is progressing
	function (xhr) {
		console.log((xhr.loaded / xhr.total * 100) + '% loaded');
	},
	// called when loading has errors
	function (error) {
		console.log('An error happened');
	}
);

let startingLine;
loader.load(
	// resource URL
	'../src/starting_line/scene.gltf',
	// called when the resource is loaded
	function (gltf) {
		console.log(gltf);
		startingLine = gltf.scene;
		startingLine.scale.set(1.5, 1.5, 1.5)
		startingLine.position.set(-2.5, 0, 0)
		scene.add(startingLine);
	},
	// called while loading is progressing
	function (xhr) {
		console.log((xhr.loaded / xhr.total * 100) + '% loaded');
	},
	// called when loading has errors
	function (error) {
		console.log('An error happened');
	}
)

loadFuel();

function checkFuelCollisions() {
	for (let i = 0; i < 58; i++) {
		if (selectedCans.includes(i)) {
			if (car.position.distanceTo(FuelModel[i].position) < 50) {
				scene.remove(FuelModel[i])
				selectedCans.splice(selectedCans.indexOf(i), 1)
				Fuel += 100
				Score += 72
				if (Fuel > 1000) {
					fuel = 1000
				}
				// document.querySelector(".fuel").innerHTML = "Fuel: " + fuel
			}
		}
	}
}

function distanceToNextFuelCan() {
	let min = 10000
	for (let i = 0; i < 58; i++) {
		if (selectedCans.includes(i)) {
			// return car.position.distanceTo(FuelModel[i].position)
			if (car.position.distanceTo(FuelModel[i].position) < min) {
				min = car.position.distanceTo(FuelModel[i].position)
			}
		}
	}

	return min
}

// loadPoints()

init();
animate();

function init() {

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xcccccc);
	// scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.querySelector(".Main").appendChild(renderer.domElement);

	bird_eye_renderer = new THREE.WebGLRenderer({ antialias: true });
	bird_eye_renderer.setPixelRatio(window.devicePixelRatio);
	bird_eye_renderer.setSize(300, 200);
	document.querySelector(".Sub").appendChild(bird_eye_renderer.domElement);
	// document.querySelector("#bird_eye").appendChild(bird_eye_renderer.domElement);


	// bird_eye.lookAt(car.position.x, car.position.y, car.positon.z);
	bird_eye.lookAt(0, 0, 0)

	scene.add(new THREE.AxesHelper(500000000));

	document.addEventListener("keydown", onDocumentKeyDown, false);
	function onDocumentKeyDown(event) {
		var keyCode = event.which;
		if (keyCode == 87 || keyCode == 38) {
			if (speed < 4.5) {
				speed += 0.07;
			}
		} else if (keyCode == 83 || keyCode == 40) {
			if (speed > -4.5) {
				speed -= 0.07;
			}
		}
		else if (keyCode == 68 || keyCode == 39) {
			rotation_ticks -= 5;
		}
		else if (keyCode == 65 || keyCode == 37) {
			rotation_ticks += 5;
		}
		else if (keyCode == 32) {
			console.log(camera.position);
			if (isPOV == 0) {
				camera.position.x -= 0;
				camera.position.y -= 450;
				camera.position.z += 1800;
				console.log(camera.position);
				isPOV = 1;
			} else {
				camera.position.x -= 0;
				camera.position.y += 450;
				camera.position.z -= 1800;
				console.log(camera.position);
				isPOV = 0;
			}
		}
		if (keyCode == 70) {
			console.log("Game Over")
			document.querySelector(".Main").remove()
			document.body.style.backgroundImage = "url('http://localhost:8080/src/assets/gameover.gif')"
			document.getElementById("paragraph").remove()
			// document.getElementsByTagName("body")[0].backgroundImage = "url('http://localhost:8080/src/assets/GameOver.jpg')"
		}
		if (keyCode == 49) {
			Winner = 1
		}
		if (keyCode == 50) {
			Winner = 2
		}
		if (keyCode == 51) {
			Winner = 3
		}
	};


	//Lights

	const dirLight1 = new THREE.DirectionalLight(0xffffff);
	dirLight1.position.set(1, 1, 1);
	scene.add(dirLight1);

	const dirLight2 = new THREE.DirectionalLight(0x002288);
	dirLight2.position.set(- 1, - 1, - 1);
	scene.add(dirLight2);

	const ambientLight = new THREE.AmbientLight(0x222222);
	scene.add(ambientLight);

	//

	window.addEventListener('resize', onWindowResize);

}

function turn_car() {
	if (rotation_ticks > 2) {
		rotation_ticks -= 2;
		// console.log(rotation_ticks); 
		car.rotation.y += 0.02;
	}
	if (rotation_ticks < -2) {
		rotation_ticks += 2;
		// console.log(rotation_ticks);
		car.rotation.y -= 0.02;
	}
}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
	bird_eye_renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
}

function checkCarCollisions() {
	//Car 1, Car 2
	//Distance between car 1 and car 2
	if (car.position.distanceTo(Car2.position) < 20) {
		Health = Health - 1.5;
		Score = Score - 39;
		console.log("Collission Occured")
	}

	if (car.position.distanceTo(Car3.position) < 20) {
		Health = Health - 1.5;
		Score = Score - 39;
		console.log("Collission Occured")
	}

	if(Score < 0)
	{
		Score = 0;
	}
}

function animate() {
	requestAnimationFrame(animate);

	// controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
	// console.log(Clock.elapsedTime)
	car.translateZ(0.4);
	car.translateZ(speed);

	// if(speed> 0){
	// 	speed = speed - 0.02 //Friction
	// }

	if (((Car2.position.x - Fin_x) ** 2 + (Car2.position.z - Fin_z) ** 2 > 10)) {
		//Enemy Car Position Update
		Car2.position.x += (Fin_x - Int_x) * 4 / (Math.sqrt((Fin_x - Int_x) ** 2 + (Fin_z - Int_z) ** 2))
		Car2.position.z += (Fin_z - Int_z) * 4 / (Math.sqrt((Fin_x - Int_x) ** 2 + (Fin_z - Int_z) ** 2))

		if (count == points.length - 1 && count_1 < points_2.length) {
			document.querySelector(".Main").remove()
			document.body.style.backgroundImage = "url('http://localhost:8080/src/assets/2ndPlace.jpeg')"
			document.getElementById("paragraph").remove()
		}
	}
	else {
		count++
		Car2.position.x = Fin_x
		Car2.position.z = Fin_z
		Int_x = Fin_x
		Int_z = Fin_z
		Fin_x = CarPath[count][0]
		Fin_z = CarPath[count][2]

		if (count == points.length && count_1 < points_2.length) {
			document.querySelector(".Main").remove()
			document.body.style.backgroundImage = "url('http://localhost:8080/src/assets/2ndPlace.jpeg')"
			document.getElementById("paragraph").remove()
		}

		// console.log(Fin_x, Fin_z)
		// console.log(Car2.position.x, Car2.position.z)

		//Enemy Car Rotation Update
		Car2.rotation.y = Math.atan2(Fin_x - Int_x, Fin_z - Int_z)
	}

	/*Enemy Car 2 */
	if (((Car3.position.x - Fin_x_1) ** 2 + (Car3.position.z - Fin_z_1) ** 2 > 10)) {
		//Enemy Car Position Update
		Car3.position.x += (Fin_x_1 - Int_x_1) * 4.2 / (Math.sqrt((Fin_x_1 - Int_x_1) ** 2 + (Fin_z_1 - Int_z_1) ** 2))
		Car3.position.z += (Fin_z_1 - Int_z_1) * 4.2 / (Math.sqrt((Fin_x_1 - Int_x_1) ** 2 + (Fin_z_1 - Int_z_1) ** 2))

		if (count_1 == points_2.length && count < points.length) {
			document.querySelector(".Main").remove()
			document.body.style.backgroundImage = "url('http://localhost:8080/src/assets/3rdPlace.jpeg')"
			document.getElementById("paragraph").remove()
		}
	}
	else {
		count_1++
		Car3.position.x = Fin_x_1
		Car3.position.z = Fin_z_1
		Int_x_1 = Fin_x_1
		Int_z_1 = Fin_z_1
		Fin_x_1 = Car_Path2[count_1][0]
		Fin_z_1 = Car_Path2[count_1][2]

		if (count_1 == points_2.length && count < points.length) {
			document.querySelector(".Main").remove()
			document.body.style.backgroundImage = "url('http://localhost:8080/src/assets/3rdPlace.jpeg')"
			document.getElementById("paragraph").remove()
		}

		Car3.rotation.y = Math.atan2(Fin_x_1 - Int_x_1, Fin_z_1 - Int_z_1)
	}

	checkFuelCollisions()
	checkCarCollisions()



	document.querySelector("#paragraph").innerHTML = (
		"Time: " + Math.floor(Clock.getElapsedTime()) + "<br>" +
		"Health: " + Health + "<br>" +
		"Fuel: " + Math.floor(Fuel) + "<br>" +
		"Score: " + Score + "<br>" +
		"Distance To Next: " + Math.floor(distanceToNextFuelCan()) / 100 + "<br>"
	  );
	  
	  

	Fuel = Fuel - 0.05

	if (count_1 == points.length - 1 && count_2 < points_2.length) {
		Winner = 2;
	}

	if (count_1 == points.length - 1 && count_2 < points_2.length) {
		Winner = 2;
	}

	if (count == points.length - 1 && count_1 == points_2.length - 1) {
		Winner = 1;
	}

	if (Fuel < 0 || Health < 0) {
		console.log("Game Over")
		document.querySelector(".Main").remove()
		document.body.style.backgroundImage = "url('http://localhost:8080/src/assets/gameover.gif')"
		document.getElementById("paragraph").remove()
	}

	if (Clock.getElapsedTime() > 10 && ((Math.abs(car.position.x) < 70) && (Math.abs(car.position.z) < 70))) {
		document.querySelector(".Main").remove()
		document.body.style.backgroundImage = "url('http://localhost:8080/src/assets/1stPlace.jpeg')"
		document.getElementById("paragraph").remove()
	}

	// can.rotation.y += 0.01
	turn_car();
	render();
}

function render() {
	scene.add(line);
	scene.add(line_1);

	renderer.render(scene, camera);
	bird_eye_renderer.render(scene, bird_eye);
}