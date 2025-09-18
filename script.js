let book = ["c1","c3","c2","c1","c3","c8","c2","c1"];
let boks ={};
for (let i=0; i<book.length;i++){
    let code=book[i];
    if(boks[code]=== undefined){
        boks [code]=1;
    }else{
        boks[code]++;
    }
}
console.log(boks)
