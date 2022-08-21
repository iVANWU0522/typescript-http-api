<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS with Typescript'
description: 'This template demonstrates how to make a simple HTTP API with Node.js and Typescript running on AWS Lambda and API Gateway using the Serverless Framework v3.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node with Typescript HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js and Typescript running on AWS Lambda and API Gateway using the Serverless Framework v3.

This template does not include any kind of persistence (database). For more advanced examples, check out the [serverless/examples repository](https://github.com/serverless/examples) which includes Typescript, Mongo, DynamoDB and other examples.

## Setup

Run this command to initialize a new project in a new working directory.

```
npm install
```

## Usage

**Deploy**

```
$ serverless deploy
```

**Invoke the function locally.**

```
serverless invoke local --function hello
```

**Invoke the function**

```
curl https://xxxxxxxxx.execute-api.us-east-1.amazonaws.com/
```

## Test

**Register a new user**

```
curl -X POST https://07rp2g9eij.execute-api.ap-southeast-2.amazonaws.com/users --data '{"name": "test1", "email": "test1@qq.com"}' -H 'Content-Type: application/json'
```

**Get a user by email**

```
curl -X GET https://07rp2g9eij.execute-api.ap-southeast-2.amazonaws.com/users\?email\=test1@qq.com
```

**List all messageBoard**

```
curl -X GET https://07rp2g9eij.execute-api.ap-southeast-2.amazonaws.com/messageBoards
```

**Create a new messageBoard**

```
