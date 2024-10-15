//the interviewer wanted me to solve this problem using the functional paradigm 

function theLongestStringWithNoRepitition(str) {
    let memo = {}; 
    let accumString = "";
    
    for(let i = 0; i<str.length; i++){
        let found = Object.values(memo).includes(str[i]);

        if(found){
            return accumString; 
        } 
        else{
            memo[i] = str[i]; 
            accumString = accumString + str[i]; 
        }
        if(i === str.length - 1) return str; 
    }
    
}