function reverseInt(n){
    let bit = Math.pow(2,31)-1
    let rev = n.toString().split("").reverse().join("")
    let result = parseInt(rev)

    if(result> (bit)|| result < -(bit)){
        return 0
    }

    if(n>0){
        return result
    }
    else{
        return -result
    }
}

console.log(reverseInt(-120))