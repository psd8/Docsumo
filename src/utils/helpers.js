export const isAllFilesValid = (obj, type) => {
    let isValid = true;
    if(obj.length > 0){
        for(let i=0; i < obj.length; i++){
            if(!obj[i].type.includes(type)){
                isValid = false;
                return;
            }
        }
    }else{
        isValid = false;
    }
    return isValid;
}