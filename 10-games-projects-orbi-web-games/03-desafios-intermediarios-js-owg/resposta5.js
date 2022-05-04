let n = gets();
let matricula;
let notaMaior=0;
for(let i = 0; i<n ;i++){
 line=gets();
line=line.split(" ")
if(parseFloat(line[1]) >= notaMaior){
matricula = line[0];
 notaMaior = parseFloat(line[1]);
}
}
if(notaMaior >=8){
 print(matricula)
}else{
 print("Minimum note not reached");
}