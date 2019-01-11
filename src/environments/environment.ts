// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAeo5_Qper7Vu6Xe6YecW53KhdUpl9wtLA",
    authDomain: "e-commerce-sample.firebaseapp.com",
    databaseURL: "https://e-commerce-sample.firebaseio.com",
    projectId: "e-commerce-sample",
    storageBucket: "e-commerce-sample.appspot.com",
    messagingSenderId: "1006697560376"   
  }
};
