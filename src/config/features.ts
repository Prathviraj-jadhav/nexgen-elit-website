export const featureConfig = {
  showLogoTicker: true,
  showProblemStatement: true,
  showNewsletter: true,
  showLoadingScreen: true,
  enableAnalytics: process.env.NODE_ENV === 'production',
} as const;
