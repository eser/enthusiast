var CustomIterator = (function () {
    function CustomIterator(nextPointer) {
        this.nextPointer = nextPointer;
    }
    CustomIterator.prototype.next = function () {
        var result = this.nextPointer();
        if (result !== null) {
            return { done: false, value: result };
        }
        return { done: true, value: null };
    };
    CustomIterator.prototype[Symbol.iterator] = function () {
        return this;
    };
    return CustomIterator;
}());

function fromNodeStream(source, size) {
    return new Promise(function (resolve, reject) {
        source.on('readable', function () {
            var nextPointer = function () {
                var buffer = source.read(size);
                if (buffer === null) {
                    return null;
                }
                return { type: 'chunk', data: buffer };
            };
            resolve(new CustomIterator(nextPointer));
        });
    });
}

function toNodeStream(target) {
    return function (value) { return new Promise(function (resolve, reject) {
        var errorCallback = function (err) { return reject(err); };
        target.on('error', errorCallback);
        target.write(value, function () { return resolve(value); });
        target.removeListener('error', errorCallback);
    }); };
}

var library = {
    fromNodeStream: fromNodeStream,
    CustomIterator: CustomIterator,
    toNodeStream: toNodeStream,
};

export default library;
export { CustomIterator, fromNodeStream, toNodeStream };
