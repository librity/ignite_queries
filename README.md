# Rocket Seat Ignite - TypeORM Queries

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Resources](#resources)

## About <a name = "about"></a>

A TypeORM demo.

## Getting Started <a name = "getting_started"></a>

### Prerequisites

- `node >= 12.0.0`
- `yarn >= 1.22.0`

### Installing

1. Clone this repo locally and install the required packages:

```bash
$ git clone https://github.com/librity/ignite_queries.git
$ cd ignite_queries
$ yarn install
```

2. Create database and run migrate:

```bash
$ yarn typeorm schema:sync
$ yarn typeorm migration:run
```

### Testing

Run tests with jest:

```bash
$ yarn test
```

## Resources <a name = "resources"></a>

- https://typeorm.io/#/select-query-builder
