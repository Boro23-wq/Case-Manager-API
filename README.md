## Case Manager API

API built using **Nest.js**, **Typescript**, **Prisma** for ORM, and **PlanetScale** (MySQL) that performs operation on case managers, cases, and related case notes. This API is a part of the project CS 673 - Care Management and Co-ordination.


<p  align="center">
  <a  href="http://nestjs.com/"  target="blank"><img  	src="https://nestjs.com/img/logo_text.svg"  width="320"  alt="Nest Logo" /></a>
</p>

Nest.js is a progressive <a  href="http://nodejs.org"  target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.

## Active Record Pattern
The Case Manager API is built using the Active Record Pattern.

Using the Active Record approach, one can define all their query methods inside the model itself, and  save, remove, and load objects using model methods.

Simply, the Active Record pattern is an approach to access database within the defined models. You can read more about the Active Record pattern on [Wikipedia](https://en.wikipedia.org/wiki/Active_record_pattern).

## Installation

1. Clone the repository to your local machine.
```bash
$ git clone https://github.com/Boro23-wq/case-manager-api.git
```
2. Change directory into the repository you just cloned.
```bash
$ cd case-manager-api
```
3. Open the repository in your favorite code editor. I'm using VSCode. The shortcut to open a directory in VSCode is:
```bash
$ code .
```
Please make sure you are inside the directory.

4. Finally, run the command below based on your package manager:
```bash
# yarn 
$ yarn
OR
# npm
$ npm install
```

## Environment variables

Please create a `.env` or `.env.local` file to set the [PlanetScale](https://planetscale.com/) database string. The string would look something like this:

```bash
DATABASE_URL='mysql:*********************************'
```

## Running the app
```bash
# development
$ npm run start

# watch mode
# Watch mode will basically watch for any changes to your code and restart the server accordingly which is very convenient.
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test
I haven't implemented any tests yet, but once the tests are added you'd have more information on how to run it.
  

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources
1. [Nest.js Documentation](https://docs.nestjs.com/)
2. [Prisma Documentation](https://www.prisma.io/docs/)
3. [PlanetScale Documentation](https://planetscale.com/docs)

## Stay in touch

- Author - [Sintu Boro](https://sboro.vercel.app/)
- Blog - [https://sboro.vercel.app/blog](https://sboro.vercel.app/blog)
- Linkedin - [Sintu Boro](https://www.linkedin.com/in/sintu-boro/)

## License
This project is [MIT licensed](LICENSE).