export default function orderByProps(obj, order) {
  const orderedProps = [];
  const otherProps = [];

  for (let key of order) {
      orderedProps.push({ key, value: obj[key] });
      delete obj[key];
  }

  for (let key in obj) {
    otherProps.push({ key, value: obj[key] });
  }
  otherProps.sort((a, b) => (a.key > b.key ? 1 : -1));

  return orderedProps.concat(otherProps);
}