//EXO 1
//1
let coding = ["coding15", "coding16", "coding17"];
//2
console.log(coding);
//3
console.log(coding.length);
//4
console.log(coding[0],coding[1],coding[2]);
//5
coding.push("Ayoub", "42");
console.log(coding);
//6
coding.unshift("false", "3.14");
console.log(coding);
//7
coding.pop();
console.log(coding);
//8
coding.shift;
console.log(coding);
//9
coding.splice(1,1,"Mht");
console.log(coding);
//10
let leNumero = coding.indexOf("coding17");
console.log(leNumero);
//11
let suppElement = coding.splice(2);
console.log(suppElement);
//12
let reverseArray = coding.reverse();
console.log(reverseArray);
//13 BONUS

//EXO 2
//1
let nombre = [4,5,2,1,3];
console.log(nombre);
//2
let tri = nombre.sort();
console.log(tri);
//2.2
tri.toString();
console.log(tri);
//3