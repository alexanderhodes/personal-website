import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  if (
    import.meta.env.MODE === "production" &&
    context.url.pathname === "/keystatic"
  ) {
    return context.redirect("/", 307);
  }

  return next();
});
