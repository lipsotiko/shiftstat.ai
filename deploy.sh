npm run generate

BUCKET="shiftstat"

aws s3 sync ./.output/public "s3://$BUCKET"  --delete

echo "http://$BUCKET.s3-website.us-east-1.amazonaws.com"
