export function extractTitle(path) {
  const result = path.split("/");
  result.shift();
  for (let i = 0; i < result.length; i++) {
    if (!(result[i] === "")) {
      result[i] = result[i].replace(/-/g, " ");
      if (result[i].includes("-"))
        result[i] = result[i]
          .split(" ")
          .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
          .join(" ");
      else result[i] = result[i].charAt(0).toUpperCase() + result[i].substr(1);
    } else result.splice(i, 1);
  }
  return result;
}
