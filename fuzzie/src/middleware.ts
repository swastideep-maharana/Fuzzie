// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware({
//   publicRoutes: [
//     "/",
//     "/api/clerk-webhook",
//     "/api/drive-activity/notification",
//     "/api/payment/success",
//   ],
//   ignoredRoutes: [
//     "/api/auth/callback/discord",
//     "/api/auth/callback/notion",
//     "/api/auth/callback/slack",
//     "/api/flow",
//     "/api/cron/wait",
//   ],
// });

// export const config = {
//   matcher: [
//     "/((?!.+\\.[\\w]+$|_next).*)", // Exclude paths with file extensions or _next
//     "/", // Include root route
//     "/(api|trpc)(.*)", // Include all API and TRPC routes
//     // If you need to exclude specific API routes or public routes, you would do that by handling those cases within the routes themselves, not in the middleware config.
//   ],
// };
// // https://www.googleapis.com/auth/userinfo.email
// // https://www.googleapis.com/auth/userinfo.profile
// // https://www.googleapis.com/auth/drive.activity.readonly
// // https://www.googleapis.com/auth/drive.metadata
// // https://www.googleapis.com/auth/drive.readonly
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // Exclude paths with file extensions or _next
    "/",                           // Include root route
    "/(api|trpc)(.*)",             // Include all API and TRPC routes
    // Explicitly include or exclude routes by using more specific patterns
    "/api/auth/callback/discord",  // Exclude discord callback
    "/api/auth/callback/notion",   // Exclude notion callback
    "/api/auth/callback/slack",    // Exclude slack callback
    "/api/flow",                   // Exclude flow
    "/api/cron/wait",              // Exclude cron wait
    "/api/clerk-webhook",          // Include clerk webhook
    "/api/drive-activity/notification", // Include drive activity notification
    "/api/payment/success",       // Include payment success
  ],
};
