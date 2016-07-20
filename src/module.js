const TEXT_ENCODER = new TextDecoder('utf-8');

export const readArrayBuffer = (arrayBuffer) => {
    const hashes = [];

    var dataView = new DataView(arrayBuffer, 0, 16);

    if (TEXT_ENCODER.decode(dataView) === 'audfprinthashV00') {
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
