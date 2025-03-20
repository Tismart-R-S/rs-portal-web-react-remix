import { createRequestHandler } from "@remix-run/cloudflare";

import * as build from "./build/server/index.js";

export default {
  async fetch(request, env) {
    return createRequestHandler(build)(request, env);
  },
};
