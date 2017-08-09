#!/bin/bash
#ls_date=`date +%Y%m%d`
git add .
git commit -m $1
git push
echo 'goodjob！上传成功，部署完毕'



