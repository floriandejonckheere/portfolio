# README

This is the source code to my portfolio.

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
$ gulp
```

## Deployment

```
$ ENV=staging gulp deploy
```
