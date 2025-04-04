import { createCookieSessionStorage } from "@remix-run/node";

const NODE_ENV = process.env.NODE_ENV;
const isProduction = NODE_ENV === "production";
const SECRET_KEY = process.env.SESSION_KEY || "";

const session = createCookieSessionStorage({
  cookie: {
    name: "_session", // Nombre de la cookie.
    sameSite: "lax", // Previene el envío de la cookie en solicitudes de terceros (protección CSRF).
    path: "/", // La cookie será accesible en toda la aplicación.
    httpOnly: true, // Solo accesible en el servidor, no es accesible mediante JavaScript.
    secrets: [SECRET_KEY], // Clave secreta para firmar la cookie y garantizar su integridad.
    secure: isProduction, // Solo se enviará por HTTPS en producción.
    // maxAge: 60 * 60 * 24 * 30, // Duración de la cookie (30 dias).
    maxAge: 60 * 60 * 24 * 7, // Duración de la cookie (7 dias).
  },
});

export const { getSession, commitSession, destroySession } = session;
