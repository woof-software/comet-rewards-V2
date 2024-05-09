[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# compound-rewards-v2

<!-- prettier-ignore-start -->

This application generates merkle tree for Comet incentivization campaigns from present participants and their accrued
rewards values. And provides verification info about tree entries

<!-- toc -->

- [Technologies](#technologies)
    * [Backend](#backend)
    * [Other](#other)
- [Prerequisites](#prerequisites)
    * [Install tools for pre-commit validation](#install-tools-for-pre-commit-validation)
        + [Install [npm](https://github.com/nodesource/distributions/blob/master/README.md)](#install-npm)
        + [Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)](#install-yarn)
        + [Install [docker](https://docs.docker.com/v17.09/engine/installation/linux/docker-ce/ubuntu/)](#install-docker)
        + [Install [docker-compose](https://docs.docker.com/compose/install/)](#install-docker-compose)
- [Running API locally](#running-api-locally)
- [Running API on server](#running-api-on-server)
- [Helpful scripts](#helpful-scripts)
  *[root package](#root-package)
  *[API package](#api-package)

<!-- tocstop -->

<!-- prettier-ignore-end -->

## Technologies

### Backend

- [ubuntu](https://releases.ubuntu.com/22.04/) - operating system to run server side
- [nodejs 20](https://nodejs.org/docs/latest-v20.x/api/index.html) - javascript server side runtime
- [TypeScript](https://www.typescriptlang.org/) - programming language
- [NestJS](https://nestjs.com/) - server side framework
- [typeORM](https://typeorm.io/) - ORM
- [postgres](https://www.postgresql.org/) - database to store information on server side
- [knexjs](http://knexjs.org/) - to handle postgres database migrations
- [docker](https://www.docker.com/) - to run nodejs API, postgres db
- [docker-compose](https://docs.docker.com/compose/) - to manage docker containers
- [RabbitMQ](https://www.rabbitmq.com/docs) - handle pipeline queues

### Other

- [jest](https://jestjs.io/) - automated testing of API
- [OpenAPI 3.0](https://swagger.io/specification/) - API documentation format
- [swagger](https://swagger.io/) - to generate HTML documentation
- [Intellij](https://www.jetbrains.com/idea/) - as development tool
- [pre-commit](https://pre-commit.com/) - to enforce formatter and other policies before commit
- [prettier](https://github.com/prettier/prettier) - to format the code
- [eslint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [config](https://www.npmjs.com/package/config) - Handle application configs for specific environment

## Prerequisites

### Install tools for pre-commit validation

Linux

```bash
sudo apt-get install -y python3 python3-pip
```

MacOs

```bash
brew install python3
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python get-pip.py
brew install curl
```

No space after hash on atx style header

#### Install [npm](https://github.com/nodesource/distributions/blob/master/README.md)

Linux

It's required to install node 20 on ubuntu 22.04

```
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Or:

```bash
sudo apt install nodejs npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm use 20
```

MacOs

```bash
brew install npm
```

#### Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)

Linux

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn
```

Or:

```bash
sudo npm install -g yarn
```

MacOs

```bash
brew install yarn
```

#### Install [docker](https://docs.docker.com/v17.09/engine/installation/linux/docker-ce/ubuntu/)

Linux

```bash
sudo apt-get update
sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
sudo apt-get update
sudo apt-get install -y docker-ce
```

MacOs

[Download](https://docs.docker.com/docker-for-mac/install/) desktop app docker

This application will install docker compose plugin

#### Install [docker-compose](https://docs.docker.com/compose/install/linux/#install-the-plugin-manually)

Linux

```bash
sudo apt-get install docker-compose-plugin
```

[Allow regular user to run docker without sudo](https://docs.docker.com/install/linux/linux-postinstall/)

```bash
sudo usermod -aG docker ${USER}
sudo usermod -aG www-data ${USER}
sudo chown ${USER} /var/run/docker.sock
```

You need to reboot or relogin after that

Once rebooted verify that you can run docker commands without sudo.

```bash
docker run hello-world
```

## Running API locally

1.  Install all packages

```bash
yarn
```

2. Start docker containers with databases, RabbitMQ.

```bash
yarn docker-dev
```

3. Navigate to api package directory, copy and configure `env` file

```bash
cd packages/api;
cp ./.env.xmpl ./.env
```

4. Migrate database

```bash
yarn migrate
```

5. Start application
```bash
yarn start
```

## Running API on server

- Configure PostgreSQL and RabbitMQ services using Dockerfile from corresponding package inside `./packages`
  or configure them manually
- Don't use anything outside `./packages` - it's for local setup
- Build and run API service from `./packages/api`

## Helpful scripts

### Root package

- `lint` - run prettier fix and eslint check
- `docker-dev` - build and run local docker containers
- `docker-dev-down` - shut down local docker container

### API package

- `migrate` - run database migrations
- `migrate-dev` - run migrations using dev server env
- `migrate-prod` - run migrations using prod server env
- `migrate:make` - create new knex migration
- `migrate:down` - rollback last migration
- `migrate:down-all` - rollback all migrations
- `migrate:up-specific` - apply specific migration
- `migrate:down-specific` - apply specific migration



