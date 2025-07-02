
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
      "chunk-FXTT2FGI.js",
      "chunk-ZFZYFFLK.js"
    ],
    "route": "/what-is-campus-experience"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6369, hash: '3ac69ced871a15f7889b7df27f50c158ab414659f3f9f21f24a8838fe614ad49', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: '0585fa2fafa2e82c7378dbace235ec2a00a1995a1be4bdb25c8b19c4f5294c09', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'what-is-campus-experience/index.html': {size: 40931, hash: '090bd0ab1d881adc2056de709499035136e2f3eee8098a52970e0d4cacc94232', text: () => import('./assets-chunks/what-is-campus-experience_index_html.mjs').then(m => m.default)},
    'index.html': {size: 64902, hash: '8e4b59dd442e3969f8cea385ad98d82c834467a3675bb9049cb0a705fdd0b14a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7LAO7MJN.css': {size: 101996, hash: 'RKDNWTNeBYY', text: () => import('./assets-chunks/styles-7LAO7MJN_css.mjs').then(m => m.default)}
  },
};
