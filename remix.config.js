/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "cloudflare-workers",
  server: "./server.js", // Asegura que el entrypoint esté correcto
  serverBuildPath: "build/server/index.js",
  serverModuleFormat: "esm", // Asegura que use ES Modules
  serverPlatform: "neutral", // Evita dependencias de Node.js
  serverDependenciesToBundle: "all", // Asegura que todos los paquetes sean compatibles con Workers
};
