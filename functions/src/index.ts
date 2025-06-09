import { onRequest } from 'firebase-functions/v2/https';
import { setGlobalOptions } from 'firebase-functions/v2';
import 'zone.js/node'; // Required for Angular SSR

// 👇 No expressAdapter import needed here

// @ts-ignore: Angular outputs this as native ESM
import expressApp from '../../dist/Campus/server/server.mjs';

setGlobalOptions({ region: 'us-central1', memory: '512MiB' });

export const ssr = onRequest(expressApp);
