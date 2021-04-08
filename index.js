// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(location = "go to the office"){
    return `This Monday, I will ${location}.`;
};

function wrapAdjective(symbol = "*"){
    return function innerFunction(person ='a hard worker'){
    return `You are ${symbol}${person}${symbol}!`;
}
};
wrapAdjective("||")("dedicated programmer");