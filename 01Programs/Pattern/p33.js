function getFileExtension(filename) {
  const extension = filename.split(".").pop();
  return extension;
}

const result1 = getFileExtension("module.js");
console.log(result1);

const result2 = getFileExtension("module.txt");
console.log(result2);
