const weakMap = new WeakMap();
export { weakMap };

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    let count = weakMap.get(endpoint);
    count += 1;
    weakMap.set(endpoint, count);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
