//JavaScript Code
//===============
//function number system conversion
function convert() {
    var iNum = document.getElementById("ipNum").value;
    var iType = document.getElementById("ipType").value;
    var oType = document.getElementById("opType").value;
    var oNum;

    //conversion from binary to oct, dec, hex
    if (iType == "from-binary" && oType == "to-octal") oNum = bin2oct(iNum);
    if (iType == "from-binary" && oType == "to-decimal") oNum = bin2dec(iNum);
    if (iType == "from-binary" && oType == "to-hexadecimal") oNum = bin2hex(iNum);
    if (iType == "from-binary" && oType == "to-binary") oNum = "INVALID";
    //conversion from decimal to bin, oct, hex
    if (iType == "from-decimal" && oType == "to-binary") oNum = dec2bin(iNum);
    if (iType == "from-decimal" && oType == "to-octal") oNum = dec2oct(iNum);
    if (iType == "from-decimal" && oType == "to-hexadecimal") oNum = dec2hex(iNum);
    if (iType == "from-decimal" && oType == "to-decimal") oNum = "INVALID";
    //conversion from octal to bin, dec, hex
    if (iType == "from-octal" && oType == "to-binary") oNum = oct2bin(iNum);
    if (iType == "from-octal" && oType == "to-decimal") oNum = oct2dec(iNum);
    if (iType == "from-octal" && oType == "to-hexadecimal") oNum = oct2hex(iNum);
    if (iType == "from-octal" && oType == "to-octal") oNum = "INVALID";
    //conversion from hexadecimal to bin, dec, oct
    if (iType == "from-hexadecimal" && oType == "to-binary") oNum = hex2bin(iNum);
    if (iType == "from-hexadecimal" && oType == "to-octal") oNum = hex2oct(iNum);
    if (iType == "from-hexadecimal" && oType == "to-decimal") oNum = hex2dec(iNum);
    if (iType == "from-hexadecimal" && oType == "to-hexadecimal") oNum = "INVALID";

    document.getElementById("opNum").value = oNum;
}
//=============================================================
//function binary to decimal conversion
function bin2dec(iNum) {
    return parseInt(iNum, 2);
}
//function binary to octal conversion
function bin2oct(iNum) {
    return parseInt(iNum, 2).toString(8);
}
//function binary to hexadecimal conversion
function bin2hex(iNum) {
    return parseInt(iNum, 2).toString(16);
}
//===========================================
//function decimal to binary conversion
function dec2bin(iNum) {
    return parseInt(iNum).toString(2);
}
//function decimal to octal conversion
function dec2oct(iNum) {
    return parseInt(iNum).toString(8);
}
//function decimal to hexadecimal conversion
function dec2hex(iNum) {
    return parseInt(iNum).toString(16);
}
//===========================================
//function octal to binary conversion
function oct2bin(iNum) {
    return parseInt(iNum, 8).toString(2);
}
//function octal to decimal conversion
function oct2dec(iNum) {
    return parseInt(iNum, 8).toString(10);
}
//function octal to hexadecimal conversion
function oct2hex(iNum) {
    return parseInt(iNum, 8).toString(16);
}
//===========================================
//function hexadecimal to binary conversion
function hex2bin(iNum) {
    return parseInt(iNum, 16).toString(2);
}
//function hexadecimal to octal conversion
function hex2oct(iNum) {
    return parseInt(iNum, 16).toString(8);
}
//function hexadecimal to decimal conversion
function hex2dec(iNum) {
    return parseInt(iNum, 16).toString(10);
}