var audioFingerprintingFileReader = require('../../src/module.js'),
    hashesData = require('../fixtures/hashes-data.json'),
    loadFixture = require('../helper/load-fixture.js');

describe('audio-fingerprinting-file-reader', function () {

    describe('readArrayBuffer()', function () {

        leche.withData(hashesData, function (filename, hashes) {

            it('should read the hashes from the file', function (done) {
                loadFixture(filename, function (err, arrayBuffer) {
                    expect(err).to.be.null;

                    expect(audioFingerprintingFileReader.readArrayBuffer(arrayBuffer)).to.deep.equal(hashes);

                    done();
                });
            });

        });

    });

});
