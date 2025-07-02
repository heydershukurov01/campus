
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
      "chunk-BUG6VQA2.js",
      "chunk-XJXSMSHQ.js"
    ],
    "route": "/what-is-campus-experience"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6348, hash: '8a0f2b746149cc52815925e86998d051a3d8f19e50ff0e3bbabbf54974f33130', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: 'f57d1430f1dc5ce7a6cfe88de07f1bb6ea066faaf73d4ef97fcae8fded23f671', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'what-is-campus-experience/index.html': {size: 40915, hash: '28e58e1c72ea32b6b3bd16cbff26f97466c8a8e7874a3ff09ada203cf20c7b3d', text: () => import('./assets-chunks/what-is-campus-experience_index_html.mjs').then(m => m.default)},
    'index.html': {size: 64886, hash: 'bc1564c3bb50de7c1f39a859f0a70ef84ba0a213b9f16a732fb50e75a40147e8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OAS3YAAG.css': {size: 100615, hash: '82xFkrf0CBo', text: () => import('./assets-chunks/styles-OAS3YAAG_css.mjs').then(m => m.default)}
  },
};
