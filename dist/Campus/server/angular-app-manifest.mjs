
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
    'index.csr.html': {size: 6348, hash: '2b7664a0e20d71578f31c21c7fac1bf8285ebb42cd1e318331c2e513b95bdb94', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: 'c5c93db3ce45200291820c325b8e448028046c5a8957c4f31eec092ff0c0dd71', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 60898, hash: '443447989963af9c4f88753500ce8180641b833b1fcda570558df39cd2893899', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OAS3YAAG.css': {size: 100615, hash: '82xFkrf0CBo', text: () => import('./assets-chunks/styles-OAS3YAAG_css.mjs').then(m => m.default)}
  },
};
