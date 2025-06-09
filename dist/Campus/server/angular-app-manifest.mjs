
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
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
    'index.csr.html': {size: 6348, hash: '5d466d15958f23a52b244a1129fc5861d7bf18051d0d6f2dfcc905c409d6a00d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: '1677e5e5da5b60187676975f346b58563fccdd8f054c02f189673cf0902cebef', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12190, hash: 'c9a2d37f6fea2bfa1f921d518c38e0d0b556f81dda8724e52f510a70eeb053b9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AGWN3U7U.css': {size: 94203, hash: 'BccnkOW4GfM', text: () => import('./assets-chunks/styles-AGWN3U7U_css.mjs').then(m => m.default)}
  },
};
