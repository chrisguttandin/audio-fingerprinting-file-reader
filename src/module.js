module.exports.readArrayBuffer = function readArrayBuffer (arrayBuffer) {
    var dataView,
        hashes,
        textEncoder;

    dataView = new DataView(arrayBuffer, 0, 16);
    hashes = [];
    textEncoder = new TextDecoder('utf-8'); // eslint-disable-line no-undef

    if (textEncoder.decode(dataView) === 'audfprinthashV00') {
        let offset = 16;

        dataView = new DataView(arrayBuffer);

        while (offset < arrayBuffer.byteLength) {
            hashes.push([ dataView.getUint32(offset, true), dataView.getUint32(offset + 4, true) ]);

            offset += 8;
        }

        return hashes;
    }

    // @todo Throw an error.
};
