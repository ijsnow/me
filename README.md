# Source code for [http://ijsnow.me](ijsnow.me)

## Prerequisites

- [node](https://nodejs.org) - I use [nvm](https://github.com/creationix/nvm) to manage node installations
- [yarn](https://yarnpkn.com)

## Getting Started

Clone the repo

```
$ git clone https://github.com/ijsnow/me.git
```

Install dependencies

```
$ cd me
$ yarn
```

## Running Locally

```
$ yarn start
```

## Creating a production build

```
$ yarn build
```

## Running in production locally

If you haven't installed [serve](http://npmjs.com/package/serve):

```
$ yarn global add serve
```

Then to run:

```
$ serve -s build
```