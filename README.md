# graphql-hello-world

Install with `npm install` then to test the server run `npm run start`

Then visit http://0.0.0.0:4000/graphql

Followed by trying the query in playground
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

The curl for something like this would be
```
curl -g \
-X POST \
-H "Content-Type: application/json" \
-d '{"query":"query{hello}"}' \
http://0.0.0.0:4000/graphql
```
