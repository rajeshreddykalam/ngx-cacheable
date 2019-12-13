import { IStorageStrategy } from './IStorageStrategy';
import { InMemoryStorageStrategy } from './InMemoryStorageStrategy';
export var DEFAULT_CACHE_RESOLVER = function (oldParams, newParams) {
    return JSON.stringify(oldParams) === JSON.stringify(newParams);
};
export var DEFAULT_HASHER = function (parameters) { return parameters.map(function (param) { return param !== undefined ? JSON.parse(JSON.stringify(param)) : param; }); };
export var GlobalCacheConfig = {
    storageStrategy: InMemoryStorageStrategy,
    globalCacheKey: 'CACHE_STORAGE',
    promiseImplementation: Promise
};
export { IStorageStrategy };
//# sourceMappingURL=index.js.map