let qualProximo = Number(prompt("Qual o número que você quer e os 2 próximos?"));

for(let c = 0; c<=10; c++){
    console.log(qualProximo + " x " + c + "= "  + qualProximo* c);
}
console.log('');

qualProximo++;

for(let j = 0; j<=10; j++){
    console.log(qualProximo + " x " + j + "= "  + qualProximo* j);
}

console.log('');

qualProximo++;

for (let k = 0; k<= 10; k++){
    console.log(qualProximo + " x " + k + "= "  + qualProximo* k);
}