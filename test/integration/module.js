import hashesData from '../fixtures/hashes-data.json';
import { loadFixtureAsArrayBuffer } from '../helper/load-fixture';
import { readArrayBuffer } from '../../src/module';

describe('audio-fingerprinting-file-reader', () => {
    describe('readArrayBuffer()', () => {
        leche.withData(hashesData, (filename, hashes) => {
            let arrayBuffer;

            beforeEach(async () => {
                arrayBuffer = await loadFixtureAsArrayBuffer(filename);
            });

            it('should read the hashes from the file', () => {
                expect(readArrayBuffer(arrayBuffer)).to.deep.equal(hashes);
            });
        });
    });
});
