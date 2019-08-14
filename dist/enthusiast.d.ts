/// <reference types="node" />
import { Readable, Writable } from 'stream';

declare class CustomIterator<T> implements IterableIterator<T | null> {
    nextPointer: () => T | null;
    constructor(nextPointer: () => T | null);
    next(): IteratorResult<T | null>;
    [Symbol.iterator](): IterableIterator<T | null>;
}

declare function fromNodeStream(source: Readable, size?: number): Promise<CustomIterator<any>>;

declare function toNodeStream(target: Writable): (value: any) => Promise<any>;

declare const library: {
    fromNodeStream: typeof fromNodeStream;
    CustomIterator: typeof CustomIterator;
    toNodeStream: typeof toNodeStream;
};

export default library;
export { CustomIterator, fromNodeStream, toNodeStream };
