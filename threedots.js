// for adding two arrows at the same time
const ages = [15, 12, 13, 11];
const ages2 = [11, 10, 9];
// const allAges = ages.concat(ages2).concat([5]); !old system

const allAges2 = [...ages, ...ages2, 6]
console.log(allAges2);


const buisness = 650;
const minister = 450;
const sochib = 250;
// const maximum = Math.max(buisness, minister, sochib);

const takaPoisha = [750, 450, 250]
const maximum = Math.max(...takaPoisha);

console.log(maximum);