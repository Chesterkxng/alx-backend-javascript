export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const results = [];
  set.forEach((item) => {
    if (typeof item === 'string' && item.startsWith(startString)) {
      results.push(item.slice(startString.length));
    }
  });

  return results.join('-');
}
