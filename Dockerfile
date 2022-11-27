FROM ruby:2.7.6

ENV LC_ALL=C.UTF-8
WORKDIR /app

COPY Gemfile* ./
RUN bundle install

CMD bundle exec \
  rerun --pattern _config.yml -- \
  jekyll serve --host 0.0.0.0 --incremental --livereload
