import { saveAs } from 'file-saver'

export const downloadImage = (urlArr) => {
  (async () => {
     let name = `${urlArr}`;
     let blob = await fetch(urlArr).then((r) => r.blob());
     saveAs(blob, name);
  })();
}