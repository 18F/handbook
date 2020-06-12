require 'html-proofer'

desc 'Build the site'
task :build do
  sh 'jekyll build'
end


# keep in sync with the `ignoreUrls` in javascripts/application.js
BASE_PROOFER_OPTS = {
  http_status_ignore: [0, 401],
  url_ignore: [
    %r{^https://github.com/18F/(Accessibility_Reviews|blog-drafts|staffing|writing-lab)}i,
    %r{^https://(bookit|ea|gcims|hrlinks|sign).gsa.gov}i,
    %r{^https://eopf.opm.gov}i,
    # https://github.com/gjtorikian/html-proofer/issues/118
    '#'
  ]
}

desc 'Build and test the site, checking all URLs'
task test: [:build] do
  HTMLProofer.check_directory('./_site', BASE_PROOFER_OPTS).run
end