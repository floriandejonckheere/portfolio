
![Continuous Integration](https://github.com/floriandejonckheere/portfolio/workflows/Continuous%20Integration/badge.svg)

# README

This is the source code to [portfolio](https://florian.dejonckhee.re/).

## Setup

Install RVM and Ruby first

```
$ gem install bundler --no-ri --no-rdoc
$ bundle install
```

## Setup

```
$ rvm install `cat .ruby-version`
$ rvm gemset create `cat .ruby-gemset`
$ rvm use .
$ gem install bundler
$ bundle install
```

## Developing

```
$ middleman server
```

## Building

```
$ middleman build
```

## Deployment

```
$ middleman deploy
```
