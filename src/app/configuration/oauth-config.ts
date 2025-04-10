import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment';


export const authConfig: AuthConfig = {

  issuer: 'https://accounts.google.com',


  redirectUri: environment.redirectUri,
  strictDiscoveryDocumentValidation: false,


  clientId: environment.GOOGLE_CLIENT_ID,
  


   dummyClientSecret: environment.GOOGLE_CLIENT_SECRET,

  responseType: 'code',


  scope: 'openid profile email',

};
