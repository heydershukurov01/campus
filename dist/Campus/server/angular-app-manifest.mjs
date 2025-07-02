
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZURZ4M45.js",
      "chunk-OSQIBGJH.js"
    ],
    "route": "/what-is-campus-experience"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6369, hash: '19f667d4b896fd2824497ca154b906c0b7f75a844e434193698934863d372c83', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: 'a70006c05b58aa6aee1d669f3ab31c94d617df829f95d08b1f99eed6209b2a48', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'what-is-campus-experience/index.html': {size: 41028, hash: '3f5dbb96258bb7d3d9a8832d7cfd0e97c8d39759a77392d6595aa2baa9de3b8e', text: () => import('./assets-chunks/what-is-campus-experience_index_html.mjs').then(m => m.default)},
    'index.html': {size: 64999, hash: 'cc20e8b96eb3d0a1f698a708de86c6a64c41abbf34dc6d20760d655025898cce', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7LAO7MJN.css': {size: 101996, hash: 'RKDNWTNeBYY', text: () => import('./assets-chunks/styles-7LAO7MJN_css.mjs').then(m => m.default)}
  },
};
