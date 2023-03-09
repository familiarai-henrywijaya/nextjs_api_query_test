
calling this url:

http://localhost:3000/api/test?a=1&b=2&c=3&d=4&e=5&f=6&g=7&h=8&i=9&j=10&k=11&l=12&m=13&n=14&o=15&p=16&q=17&r=18&s=19

you will receive

{"url":"\"/api/test?a=1&b=2&c=3&d=4&e=5&f=6&g=7&h=8&i=9&j=10&k=11&l=12&m=13&n=14&o=15&p=16&q=17&r=18&s=19\""}


upon running on vercel:

https://nextjs-api-query-test.vercel.app/api/test?a=1&b=2&c=3&d=4&e=5&f=6&g=7&h=8&i=9&j=10&k=11&l=12&m=13&n=14&o=15&p=16&q=17&r=18&s=19

you will receive

{"url":"\"/api/test?i=9&f=6&q=17&c=3&k=11&j=10&r=18&l=12&e=5&m=13&n=14&g=7&o=15&b=2&s=19&d=4&h=8&a=1&p=16\""}


the issue is that I'm expecting the response consistent between vercel and localhost