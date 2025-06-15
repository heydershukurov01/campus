
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
    'index.csr.html': {size: 6348, hash: '4fb517ca4221de1603df2cf7386101c55e54afbf25660988b7f3b1af3fb55d75', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: '669ae01060349e73f660fe0bd805f611131056daf1f6a36c4e2e3004dc11ef63', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17502, hash: 'd5c2b8de5bad3608491d20ef0bcfdb34002ff022b9d4ac02cd572e37eb92dfa9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AGWN3U7U.css': {size: 94203, hash: 'BccnkOW4GfM', text: () => import('./assets-chunks/styles-AGWN3U7U_css.mjs').then(m => m.default)}
  },
};
