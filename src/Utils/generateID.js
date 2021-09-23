export const generateID = function() {
    
    return 'MWG'+S4()+S4()+S4();
}
function S4()
{
return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
}