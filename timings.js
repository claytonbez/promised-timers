var util = require('util');

function wait(ms, callback) {
    try {
        (function () {
            setTimeout(function () {
                callback(null);
            }, ms);
        })();
    } catch (e) {
        callback(e);
    }
}
function waitWith(ms, inn, callback) {
    try {
        (function () {
            var i = inn;
            setTimeout(function () {
                callback(null, i);
            }, ms);
        })();
    } catch (e) {
        callback(e, null);
    }

}
var waitForVar = [];
function checkVal(vName,operator,value){
    switch (operator) {
        case '>': return waitForVar[vName] > value;
        case '<': return waitForVar[vName] < value;
        case '>=': return waitForVar[vName] >= value;
        case '<=': return waitForVar[vName] <= value;
        case '==': return waitForVar[vName] == value;
        case '!=': return waitForVar[vName] != value;
        case '===': return waitForVar[vName] === value;
        case '!==': return waitForVar[vName] !== value;
    }
}
function waitFor(vName,operator,value,callback){
    var s = setInterval(function(){
        var done = checkVal(vName,operator,value);
        if(done){
            clearInterval(s);
            var ind = waitForVar.indexOf(vName);
            waitForVar.splice(ind,1);
            
            callback(null,true);
        }
    },0);
   
}
var exp = {
    wait: util.promisify(wait),
    waitWith: util.promisify(waitWith),
    waitFor:{

        set: function(vName,val){
            waitForVar[vName] = val;
            return;
        },
        start: util.promisify(waitFor)
    }   
};
module.exports = exp;