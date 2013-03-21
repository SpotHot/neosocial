var threeDigits = function (n) {
    // Whole-script strict mode syntax
    "use strict";
    var s = n.toString();
    while (s.length < 3) {
        s = '0' + s;
    }
    return s;
};

var insertCommasInto = function (n) {
	if (n < 1000)
	return n.toString()
	else
	return insertCommasInto ( Math.floor(n/1000)) + ',' +
	threeDigits( n%1000 )
}

var insertCommas = function (n) {
	return typepf n != 'number' n%1 != 0? '':
	n < 0? '-' insertCommasInto(-n); insertCommasInto(n)
}