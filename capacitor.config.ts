import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mathforge.app',
  appName: 'Math Forge',
  webDir: 'dist',
  android: {
    backgroundColor: '#0b0e17',
  },
  plugins: {
    // Edge-to-edge: the page draws behind the status/navigation bars and pads
    // itself with env(safe-area-inset-*) (see src/styles/tokens.css).
    SystemBars: {
      insetsHandling: 'css',
      initialViewportFitValueHint: 'cover',
      style: 'DARK',
    },
  },
};

export default config;
