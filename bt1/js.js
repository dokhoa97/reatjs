var Pattern = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
function isValidEmail(Email){
    if(Pattern.test(Email)){
        console.log("Hop Le")
        return true;
    }
    else{
        console.log("Khong Hop Le")
    }
}