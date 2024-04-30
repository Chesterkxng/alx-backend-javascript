export default function cleanSet(set, startString) {
  const results = [];
    set.forEach(item => {
        if (item.startsWith(startString)) {
            results.push(item.slice(startString.length));
        }
    });

    return results.join("-");
}
