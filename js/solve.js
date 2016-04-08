/**
 * Created by xbblpf2 on 4/7/2016.
 */
var quad = require('./quadratic');

var prompt = require('prompt');

prompt.get(['a', 'b', 'c'], function(err, result) {
    if(err) { return onErr(err); }
    console.log('Command-line input received: ');
    console.log('a: ' + result.a);
    console.log('b: ' + result.b);
    console.log('c: ' + result.c);

    quad(1,4,1, function(err,quadsolve) {
        if (err) {
            console.log('Error: ', err);
        }
        else {
            console.log("Roots are "+quadsolve.root1() + "  " + quadsolve.root2());
     }
    });
});

