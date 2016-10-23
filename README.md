# README

This is the source code to my website. It was hand-built using Angular, jQuery and a custom CSS microframework. It uses NPM and Bower for dependency management, and Grunt as taskrunner.

## Setup

Install npm and Ruby first

```
$ gem install bundler --no-ri --no-rdoc
$ bundle install
$ npm install
$ bower install
```

## Setup

```
$ rvm install $(cat .ruby-version)
$ rvm gemset create $(cat .ruby-gemset)
$ rvm use $(cat .ruby-version)-$(cat .ruby-gemset)
$ gem install bundler
$ bundle install
$ npm install
$ bower install
```

## Building

```
$ grunt build
$ darkhttpd dist/ --daemon
$ grunt watch
```

## Deployment

```
$ ENV=staging grunt deploy
```
