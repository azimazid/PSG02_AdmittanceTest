// Software Version Checker
function VersionChk(vers){
    var NumberPeriodOnly = /^[0-9.]+$/; 
    if(vers.match(NumberPeriodOnly)){
        const arr = vers.split(".");
        if(arr.length < 3 || arr.length > 3)return "Please input version properly e.g 11.22.33";
        return "major:" + arr[0] + ", minor:" + arr[1] + ", patch:" + arr[2]
    }
    return "Please input version properly e.g 11.22.33";
}
console.log(VersionChk("12.0.4"));
console.log(VersionChk("14.2.3"));
