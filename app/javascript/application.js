// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import { Notifier } from '@airbrake/browser';

console.log("Setup airbrake-js");
const airbrake = new Notifier({
  projectId: 1,
  projectKey: 'REPLACE ME',
  host: 'http://localhost:8080',
  remoteConfig: false
});

window.addEventListener("unhandledrejection", function (event) {
  console.warn("WARNING: Unhandled promise rejection. Shame on you! Reason: "
               + event.reason);
});

window.onerror = function(msg, url, line, col, error) {
   // Note that col & error are new to the HTML 5 spec and may not be 
   // supported in every browser.  It worked for me in Chrome.
   var extra = !col ? '' : '\ncolumn: ' + col;
   extra += !error ? '' : '\nerror: ' + error;

   // You can view the information in an alert to see things working like this:
   airbrake.notify(`$msg\nurl: $url \nline: $line$extra`);
   console.log("error handling: " + msg);

   // TODO: Report this error via ajax so you can keep track
   //       of what pages have JS issues

   var suppressErrorAlert = true;
   // If you return true, then error alerts (like in older versions of 
   // Internet Explorer) will be suppressed.
   return suppressErrorAlert;
};



throw Error("Unlandled error");
