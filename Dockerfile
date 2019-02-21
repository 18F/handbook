FROM ruby:2.6

# Node is required for search. Federalist uses version 10, match that: https://github.com/nodesource/distributions/blob/master/README.md
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install nodejs -y

# Bundle install first for a simple gem cache
COPY Gemfile* /tmp/
WORKDIR /tmp
RUN bundle install

# Set app working direcotry and copy app there.
ENV app /handbook
RUN mkdir $app
WORKDIR $app
ADD . $app

# Set some other necessary ENVs
ENV LC_ALL=C.UTF-8

CMD bundle exec jekyll serve --host 0.0.0.0 --incremental