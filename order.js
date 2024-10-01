let str=prompt("enter the menu item");
let qty=prompt("enter the quantity");
let total=0;
switch(str){
    case "pizza":
            total+=qty*200;
            break;
    case "burger":
            total+=qty*300;
            break;
    case "briyani":
            total+=qty*250;
            break;
    case "applejuice":
            total+=qty*100;
            break;
    case "idle":
            total+=qty*80;
            break;       
}
if(total>=500){
    let discount=total*0.1;
    total-=discount;
}
console.log(total);
