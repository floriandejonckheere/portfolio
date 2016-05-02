# README

This is the source code to my website. It was hand-built using Angular, jQuery and a custom CSS microframework. It uses NPM and Bower for dependency management, and Grunt as taskrunner.

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
