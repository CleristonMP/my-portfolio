function importAll(r: __WebpackModuleApi.RequireContext) {
  let images: any = {};
  let imgsInFolder: (string | undefined)[] = [];
  const firstPath = r.keys().at(0);
  let currentFolder = firstPath!.slice(2, firstPath!.indexOf('/', 2));

  r.keys()
    .toString()
    .split(',')
    .forEach((path, index) => {
      if (path.substring(0, 3) !== 'src') {
        if (currentFolder !== path.slice(2, path.indexOf('/', 2))) {
          currentFolder = path.slice(2, path.indexOf('/', 2));
          imgsInFolder = [];
          imgsInFolder.push(r.keys().at(index));
        } else {
          imgsInFolder.push(r.keys().at(index));
        }
      }
      images[currentFolder] = imgsInFolder;
    });
  return images;
}

export default function getImgsFromFolder() {
  const images = importAll(require.context('./', true, /\.(png|jpe?g|svg)$/));
  return images;
}
