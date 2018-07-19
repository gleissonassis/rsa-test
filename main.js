var NodeRSA = require('node-rsa');
var fs = require('fs');
var crypto = require('crypto');

fs.readFile('./pk.pem', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  var key = new NodeRSA();
  key.importKey(new Buffer('30820122300d06092a864886f70d01010105000382010f003082010a028201010093d7fb38ef205155320e2fbadd7402ec44c0b0b81d7956c4084f4c2d1c1345cfc2ec1d951ec4019c467ed7b8272502f240370b77b3576644c6ae38018ece37d568657743a830c1fd1c541e04794668aacdff9b7fc05cce287c10b91b88b22df8e851a22cc3c1d47aab817e46c510befb8d72432712e7d2c68be9e6118270064672702d0e677d9501547f23f806f8a07bedb7a689930904043bc0a1e042e5f5ed68e1ba02266126712c19757ce651b5f3af3c9bf1a51c3dea9f915f208171f8afc115f324ca621a41a9a3568c7ccf55d220fae343c4c8aa5349e6c0192d360babb9c3121f683eb3819df7a4688b2e98bb10f091e974e0edfd49e8ee50ddecb9e70203010001', 'hex'), 'pkcs8-public-der');

  /*
  key.importKey(data, 'pkcs1-private-pem');

  console.log('Private key !!!!');
  console.log(key.exportKey('pkcs8-private-der').toString('hex'));
  console.log('Public key !!!!');
  console.log(key.exportKey('pkcs8-public-der').toString('hex'));

  var signature = key.sign('TEXT TO SIGN', 'hex');
  var hash = crypto.createHmac('sha256', signature).digest('hex');

  console.log('Signature', signature);
  console.log('Signature hash', hash);
  */

  var isOk = key.verify('TEXT TO SIGN', '15b003998698f655af131843c292ec6f539671b5d9d10d8466860cadacf768f79f4de852849222454e700d667f026d6872c0315ed858f0995ac4db6fc156f87599670a082bdd5bc883b65cfd25a673cd6c0df43d62cbdf147e87785d248eaa4f57b02786a3ff1e3d568233a9e6ec168a0a35eb2086e39073db77001f5a7db3c53ec69ba448b1f638c0dcb6f4e5274f6db21e050be2071e59f3765767f33e463d85e43bd5a12be0cd53252fd03b07966694edf765ed51986fe720b12373edcc9d445614955d564d6421ef40d9833f9dcd39dbacf3c0a71679b4176266e41bdd20a75e8123fa00269d89fff45899a118744ebf0793df7483d0dd797ac7a1ecf47d', null, 'hex');
  console.log('IsOk', isOk);

});
