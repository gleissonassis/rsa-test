var NodeRSA = require('node-rsa');
var crypto = require('crypto');
var key = new NodeRSA();

key.generateKeyPair();

console.log(key.exportKey('private'));
console.log(key.exportKey('public').toString('hex'));

console.log('Public key (hex)');
var pkHex = key.exportKey('pkcs8-public-der').toString('hex');
console.log(pkHex);

console.log('Public key (hash)');
var hash = crypto.createHmac('sha256', pkHex).digest('hex');
console.log(hash);
