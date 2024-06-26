// Create a function named setFromArray that returns a Set from an array.

// It accepts an argument (Array, of any kind of element).

export default function setFromArray(array) {
  if (Array.isArray(array)) {
    return new Set(array);
  }
  return new Set();
}
