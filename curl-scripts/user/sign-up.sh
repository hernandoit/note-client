# production: 'https://calm-taiga-11081.herokuapp.com',
# development: 'http://localhost:4741'

# EMAIL="a@a.info" PASSWORD="a" PASSWORD="a" sh curl-scripts/user/sign-up.sh

#!/bin/bash

# don't use a password you use for any real websites!
curl "https://calm-taiga-11081.herokuapp.com" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
"credentials": {
"email": "'"${EMAIL}"'",
"password": "'"${PASSWORD}"'",
"password_confirmation": "'"${PASSWORD}"'"
  }
}'

echo
