// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const mcClient = createClient({
  serviceDomain: 'govote',
  apiKey: process.env.API_KEY as string,
});
