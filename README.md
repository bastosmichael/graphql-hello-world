# graphql-hello-world

To test the server run
`npm run start`

Then visit http://0.0.0.0:4000/graphql

Followed by trying the query
```
query {
 hello
}
```

And the query that returns should look something like 
```
{
  "data": {
    "hello": "Hello World"
  }
}
```