let kids = gets();
let girls = 0;
let boys = 0;
for (let i = 0; i < kids; i++) {
let nameGender = gets().split(" ");
let name = nameGender[0];
let gender = nameGender[1];
if (gender === 'F') {
girls++
}

if (gender === 'M') {
boys++
}}

console.log(boys + " carrinhos");
console.log(girls + " bonecas");