let num = [5, 8, 2, 9, 10]
num.push(3)
num.sort()//Colocar em ordem 1 a 9
console.log(`Nosso vetor é o ${num}`)
console.log(`O tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é o ${num[0]}`)

for(var pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}