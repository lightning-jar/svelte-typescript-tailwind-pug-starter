// our team uses Sentry for error tracking.
// this is the client-side hook file
// uncomment the following lines and update the dsn to enable Sentry
// learn more about Sentry here: https://sentry.io/welcome/

// import { handleErrorWithSentry } from "@sentry/sveltekit";
// import { Replay } from "@sentry/sveltekit"; // uncomment if you want to use Session Replay
// import * as Sentry from "@sentry/sveltekit";

//Sentry.init({
// enter your Sentry DSN here
//dsn: "https://....ingest.sentry.io/...",
//tracesSampleRate: 0.0,

// This sets the sample rate to be 10%. You may want this to be 100% while
// in development and sample at a lower rate in production
//replaysSessionSampleRate: 0.1,

// If the entire session is not sampled, use the below sample rate to sample
// sessions when an error occurs.
// replaysOnErrorSampleRate: 0.0,

// If you want to use Session Replay, uncomment the following line
//integrations: [new Replay()],
//});

// If you have a custom error handler, pass it to `handleErrorWithSentry`
//export const handleError = handleErrorWithSentry();
