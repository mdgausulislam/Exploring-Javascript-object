function sum(a,b,c){
    console.log(arguments);
    const result=a+b+c;
    return result;
}
const total=sum(45,88,88,5,44,66);
console.log(total);