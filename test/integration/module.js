import hashesData from '../fixtures/hashes-data.json';
import { loadFixture } from '../helper/load-fixture';
import { readArrayBuffer } from '../../src/module';

describe('audio-fingerprinting-file-reader', () => {

    describe('readArrayBuffer()', () => {

        leche.withData(hashesData, (filename, hashes) => {

            it('should read the hashes from the file', (done) => {
                loadFixture(filename, (err, arrayBuffer) => {
                    expect(err).to.be.null;

                    expect(readArrayBuffer(arrayBuffer)).to.deep.equal(hashes);

                    done();
                });
            });

        });

    });

});
