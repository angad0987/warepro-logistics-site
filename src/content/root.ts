export interface NotFoundContent {
  code: string;
  title: string;
  message: string;
  cta: string;
}

export const notFound: NotFoundContent = {
  code: "404",
  title: "Page not found",
  message: "The page you're looking for doesn't exist or has been moved.",
  cta: "Go home",
};

export interface ErrorContent {
  title: string;
  message: string;
  retryCta: string;
  homeCta: string;
}

export const errorPage: ErrorContent = {
  title: "This page didn't load",
  message: "Something went wrong on our end. Try refreshing or head back home.",
  retryCta: "Try again",
  homeCta: "Go home",
};
