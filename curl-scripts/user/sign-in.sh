# production: 'https://calm-taiga-11081.herokuapp.com',
# development: 'http://localhost:4741'

# EMAIL="a@a.info" PW="a" sh curl-scripts/user/sign-in.sh

#!/bin/bash

curl "http://localhost:4741/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PW}"'"
    }
  }'

echo
