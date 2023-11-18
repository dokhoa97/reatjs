var Pattern = /^[_a-z0-9]{6,}$/;
function isValidEmail(account){
    if(Pattern.test(account)){
        console.log('Hop Le');
        return true;
    }
    else{
        console.log('Khong Hop Le');
        return false;
    }
}