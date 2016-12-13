/* eslint no-extend-native: ['error', { 'exceptions': ['Array'] }] */

function coalesce(fn) {
  return fn || (value => value);
}

function memoize(fn) {
  const cache = new Map();
  return (element) => {
    if (!cache.has(element)) cache.set(element, fn(element));
    return cache.get(element);
  };
}

function assembly(fn) {
  const groups = new Map();
  return (value) => {
    const key = fn(value);
    const group = groups.get(key) || [];
    group.push(value);
    groups.set(key, group);
    return groups;
  };
}

Array.prototype.groupBy = function groupBy(filter) {
  if (filter !== undefined && typeof filter !== 'function') {
    throw new TypeError('Filter must be a function');
  }
  const fn = assembly(memoize(coalesce(filter)));
  return this.reduce((result, value) => fn(value), null);
};
