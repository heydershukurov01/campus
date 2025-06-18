
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
    'index.csr.html': {size: 6348, hash: 'cc5eecbd37c15f6f63090822c4a172df8b3aebeb91ba4ea90eda43679e600acd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: '8a2ad755b8a41bf29d949d43e0f52ea0f68c50365002aeb4288137614b5fd628', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 42442, hash: 'eac66d1f4bf9f0262241605935a447a2d8a97180261fbbb408ecc1dbf3c79b7a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AGWN3U7U.css': {size: 94203, hash: 'BccnkOW4GfM', text: () => import('./assets-chunks/styles-AGWN3U7U_css.mjs').then(m => m.default)}
  },
};
