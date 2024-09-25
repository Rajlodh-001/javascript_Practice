

//  only CH : 55

// CH 55 : ES 6 Module

// ES6 Module = An external file that contain reusable code
//              that can be imported into other javascript files. 
//              Write reusable code for many different apps.
//              can contain variables ,classes ,function... and more
//              Introduce in ECMAScript 2015 update







import {PI,getCircumfernce,getArea,getvolume} from './mathUtils';

// console.log(PIA);

const  Circumfernce = getCircumfernce(10);
const area =getArea(10);
const volume =getvolume(10);

console.log(`${Circumfernce.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);




































































