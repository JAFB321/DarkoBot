import "dotenv/config";
export const BOT_PREFIX = process.env.BOT_PREFIX || 'darko';
export const BOT_TOKEN = process.env.BOT_TOKEN || '';
export const BOT_PUBLIC_KEY = process.env.BOT_PUBLIC_KEY || '';
export const BOT_CLIENT_ID = process.env.BOT_CLIENT_ID || '';

export const PORT = Number(process.env.PORT) || 3000;
export const APP_URL = process.env.APP_URL || `http://localhost:${PORT}`;

/** Render.com timeout sleep expressed in seconds */
export const RENDER_TIMEOUT_SLEEP = (Number(process.env.RENDER_TIMEOUT_SLEEP) || 14) * 60;
