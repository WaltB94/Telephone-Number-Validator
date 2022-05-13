function telephoneCheck(str) {


    let newStr = str.replace(/\D/g,'');
    let replaceWhitespaces = str.replaceAll(/\s/g,'')
    let symbols = replaceWhitespaces.indexOf("(")
    let symbolsTwo = replaceWhitespaces.indexOf(")")
    let placeOfOne = str.replace(/ /g,'').indexOf("1")
    
    
    
    if (newStr.length === 11 && placeOfOne === 0 && symbols === 1 && symbolsTwo === 5) {
    
    return true
    
    }
    
    else if (newStr.length === 11 && str.length > 14) {
    
    return false
    }
    
    else if (newStr.length === 10 && str.length > 13) {
    
    return false
    }
    
    else if (newStr.length === 11 && placeOfOne === 0 && symbols === -1 && symbolsTwo === -1) {
    
    return true
    
    }
    
    
    else if (newStr.length === 10 && symbols === 0 && symbolsTwo === 3) {
    
    return true
    
    }
    
    else if (newStr.length === 10 && symbols === -1 && symbolsTwo === -1) {
    
    return true
    
    }
    
    else if (newStr.length === 10 && symbols === 0 && symbolsTwo === 4) {
    
    return true
    
    }
    
    
    
    
    
    
    else return false
    
    }
    
    telephoneCheck("555-555-5555");