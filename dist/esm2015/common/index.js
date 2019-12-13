import { IStorageStrategy } from './IStorageStrategy';
import { InMemoryStorageStrategy } from './InMemoryStorageStrategy';
export const DEFAULT_CACHE_RESOLVER = (oldParams, newParams) => JSON.stringify(oldParams) === JSON.stringify(newParams);
export const DEFAULT_HASHER = (parameters) => parameters.map(param => param !== undefined ? JSON.parse(JSON.stringify(param)) : param);
export const GlobalCacheConfig = {
    storageStrategy: InMemoryStorageStrategy,
    globalCacheKey: 'CACHE_STORAGE',
    promiseImplementation: Promise
};
export { IStorageStrategy };
//# sourceMappingURL=index.js.map