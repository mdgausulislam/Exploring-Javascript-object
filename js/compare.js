const first={a:2}; 
const second={a:2};

if(first===second){
console.log('they are same');
}
else{
    console.log('difference');
}

const firstString=JSON.stringify(first);
const secondString=JSON.stringify(second);
console.log(firstString,secondString);

if(firstString===secondString){
    console.log("same");
}else{
    console.log("difference");
}
