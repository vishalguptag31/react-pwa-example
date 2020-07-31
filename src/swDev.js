//  for work service worker before build or while developing

export default function swDev() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(swUrl).then((res) => {
    console.warn("response", res);
  });
}
