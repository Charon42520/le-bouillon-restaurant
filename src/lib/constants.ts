import process from "node:process";

export const isLocalBackend = process.env.LOCAL_BACKEND === "true";

export const WEBSITE_URL = import.meta.env.DEV
    ? "http://localhost:4321"
    : "https://lebouillondeseauxvives.fr"

