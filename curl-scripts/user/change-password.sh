# production: 'https://calm-taiga-11081.herokuapp.com',
# development: 'http://localhost:4741'

# TOKEN=" " OLD="a" NEW="b" sh curl-scripts/user/change-password.sh

#!/bin/bash

curl "https://calm-taiga-11081.herokuapp.com" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD}"'",
      "new": "'"${NEW}"'"
    }
  }'

echo
