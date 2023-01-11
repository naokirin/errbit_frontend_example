# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "@airbrake/browser", to: "https://ga.jspm.io/npm:@airbrake/browser@2.1.8/esm/index.js"
pin "cross-fetch", to: "https://ga.jspm.io/npm:cross-fetch@3.1.5/dist/browser-ponyfill.js"
pin "error-stack-parser", to: "https://ga.jspm.io/npm:error-stack-parser@2.1.4/error-stack-parser.js"
pin "promise-polyfill", to: "https://ga.jspm.io/npm:promise-polyfill@8.2.3/src/index.js"
pin "stackframe", to: "https://ga.jspm.io/npm:stackframe@1.3.4/stackframe.js"
