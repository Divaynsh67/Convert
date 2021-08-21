const km_m=(val)=>{
    //Error Handling
    const err="Provide the Value in Km's";
    if(val==null || val==undefined) {    
        throw err
    } ;

    //MAIN FUNCTION
    
    // 1 km == 1000m
     return val*1000;
};


module.exports = km_m;
    


