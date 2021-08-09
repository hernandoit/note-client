# production: 'https://calm-taiga-11081.herokuapp.com',
# development: 'http://localhost:4741'

# EMAIL="a@a.info" PW="a" sh curl-scripts/user/sign-in.sh

#!/bin/bash

curl "https://calm-taiga-11081.herokuapp.com" \
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
