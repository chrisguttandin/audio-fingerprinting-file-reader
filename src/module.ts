const TEXT_ENCODER: TextDecoder = new TextDecoder('utf-8');

export const readArrayBuffer = (arrayBuffer: ArrayBuffer): [number, number][] => {
    const hashes: [number, number][] = [];

    let dataView = new DataView(arrayBuffer, 0, 16);

    if (TEXT_ENCODER.decode(dataView) === 'audfprinthashV00') {
        let offset = 16;

        dataView = new DataView(arrayBuffer);

        while (offset < arrayBuffer.byteLength) {
            hashes.push([dataView.getUint32(offset, true), dataView.getUint32(offset + 4, true)]);

            offset += 8;
        }

        return hashes;
    }

    throw new Error('The given arrayBuffer seems to contain no content of an audfprint hash file.');
};
