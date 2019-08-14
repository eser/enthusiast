import fromNodeStream, { CustomIterator } from './fromNodeStream';
import toNodeStream from './toNodeStream';
declare const library: {
    fromNodeStream: typeof fromNodeStream;
    CustomIterator: typeof CustomIterator;
    toNodeStream: typeof toNodeStream;
};
export { library as default, fromNodeStream, CustomIterator, toNodeStream, };
