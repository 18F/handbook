source 'https://rubygems.org'

ruby '2.6.1'

gem 'jekyll'
gem 'json'
gem 'hash-joiner'
gem 'uswds-jekyll', :git => 'https://github.com/18F/uswds-jekyll.git', :branch => 'update-uswds-2.0'

# workaround to support _pages collection
# https://github.com/jekyll/jekyll-sass-converter/issues/93#issuecomment-524270623
gem 'jekyll-sass-converter', git: 'https://github.com/jekyll/jekyll-sass-converter.git', ref: 'refs/pull/94/head'

group :development do
  gem 'html-proofer'
end
