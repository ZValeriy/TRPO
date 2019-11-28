// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBfN3FhP-fIBW1cDCpSEGDfZKhLvq2FfDI',
    authDomain: 'trpo-app.firebaseapp.com',
    databaseURL: 'https://trpo-app.firebaseio.com',
    projectId: 'trpo-app',
    storageBucket: 'trpo-app.appspot.com',
    messagingSenderId: '12880420420',
    appId: '1:12880420420:web:94e44b74a4da87b89b6611'
  }
};
