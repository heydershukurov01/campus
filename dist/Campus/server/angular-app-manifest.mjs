
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 731, hash: '321fcd47b11367996bd2a8137a1d09666c7d91b1ab3fe9c6d5e843be2c0549e9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1271, hash: '91d3a2bab29b363d500b108f46f9770e1057b30b5e4655f837bc8ec19ec32ded', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34379, hash: '90251e7faa3a18a54021b676dc2cc9e69b1317757e7387eb7eeb104cfb00675f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
