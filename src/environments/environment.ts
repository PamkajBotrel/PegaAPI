// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'https://cgie2ehorizontal83.pegatsdemo.com:443/prweb/api/v1',
  user: 'pamkaj.botrel@cgi.com',
  password: 'N0v4n0v3l',
  url: 'http://localhost:4200/',
  localJson: {
    casetypeList: 'assets/json-test-files/etape1-casetypes.json', // GET https://cgie2ehorizontal83.pegatsdemo.com:443/prweb/api/v1/casetypes
    casetypeDetails: 'assets/json-test-files/etape2-casetypes-details.json', // GET https://cgie2ehorizontal83.pegatsdemo.com:443/prweb/api/v1/casetypes/O9FKI1-MyLabEUT-Work-AjouterClientVer2?flatListOfFields=Basic
    createCase: 'assets/json-test-files/etape3-create-case.json', // POST https://cgie2ehorizontal83.pegatsdemo.com:443/prweb/api/v1/cases,
    assignmentsDetails: 'assets/json-test-files/etape4-1x-assignments-detail.json', // POST https://cgie2ehorizontal83.pegatsdemo.com:443/prweb/api/v1/assignments/{{nextAssignmentID}}
    assignmentsDetailsView: 'assets/json-test-files/etape4-2x-assignments-details-view.json', // GET /assignments/{ID}/actions/{actionID} 
    actionFormValuesValidate: 'assets/json-test-files/etape4-3x-action-form-validate.json', // GET /assignments/{ID}/actions/{actionID}/refresh
  },
  apiUrl: {
    casetypeList: { method: 'GET', url: 'https://cgie2ehorizontal83.pegatsdemo.com:443/prweb/api/v1/casetypes' } //GET

  }
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
