import { AppLoadContext } from "@remix-run/cloudflare";

export interface IRoute {
  current: string;
  redirect: string;
}

export interface Context extends AppLoadContext {
  API_AUTH: string;
  SESSION_KEY: string;
  API_RECRUITMENT: string;
  NODE_ENV: "development" | "production" | "test";
  CLOUDFLARE_ACCOUNT_ID: string;
  CLOUDFLARE_API_TOKEN: string;
  CLOUDFLARE_EMAIL: string;
  WRANGLER_SEND_METRICS: "true" | "false";
  ASSETS: Fetcher;
}
