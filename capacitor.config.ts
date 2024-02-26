import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.portfoliobee',
  appName: 'portfoliobee',
  webDir: 'build',
  server: {
    url: 'http://localhost:3000',
    cleartext:true,
    androidScheme: 'https'
  }
};

export default config;
