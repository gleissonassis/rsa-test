var NodeRSA = require('node-rsa');
var fs = require('fs');
var crypto = require('crypto');

fs.readFile('./a.pem', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  var key = new NodeRSA();
  key.importKey(data, 'pkcs1-private-pem');

  var signature = key.sign('TEXT TO SIGN', 'hex');
  var hash = crypto.createHmac('sha256', signature).digest('hex');

  console.log('Signature', signature);
  console.log('Signature hash', hash);
  
  var newHash = crypto.createHmac('sha256', signature + '@ 871d73d0d594b8e4f8b430e1faca235c4d38fe929fdf5c651480bdf82f5172b2').digest('hex');

  console.log('New hash', newHash);
});
