# production: 'https://calm-taiga-11081.herokuapp.com',
# development: 'http://localhost:4741'

# TOKEN="need token from login" "a" sh curl-scripts/sign-out.sh

#!/bin/bash

curl "http://localhost:4741/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"

echo
