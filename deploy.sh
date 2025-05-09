npm run generate

BUCKET="poneres-connect"

aws s3 sync ./.output/public "s3://$BUCKET"  --delete

echo "http://$BUCKET.s3-website.us-east-1.amazonaws.com"
