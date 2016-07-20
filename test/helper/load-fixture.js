export const loadFixture = (fixture, callback) => {
    const request = new XMLHttpRequest();

    request.onerror = function () {
        callback('request-failed');
    };
    request.onload = function (event) {
        callback(null, event.target.response);
    };
    request.open('GET', 'base/test/fixtures/' + fixture);
    request.responseType = 'arraybuffer';
    request.send();
};
