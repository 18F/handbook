source 'https://rubygems.org'

ruby '2.6.3'

# temporary lock - 3.1 breaks styles, and 3.2 causes an error
gem 'jekyll', '~> 3.0.0'
gem 'redcarpet'
gem 'rouge'
gem 'json'
gem 'hash-joiner'

group :jekyll_plugins do
  gem "guides_style_18f", :github => '18F/guides-style', :branch => 'v1.0.6'
end

group :development do
  gem 'html-proofer'
end
