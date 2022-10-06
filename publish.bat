ng build

aws s3 sync dist/cuichikun.cn s3://cuichikun.com --exclude "*.js"
aws s3 sync dist/cuichikun.cn s3://cuichikun.com --include "*.js" --content-type "application/javascript"
aws cloudfront create-invalidation --distribution-id EQAM99V1XFRTS --paths /*