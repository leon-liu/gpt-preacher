#!/bin/bash
BUILD_NAME=$1
BUILD_NU=$2
GPT_VERSION=$3


echo "#################################ECR login#################################"
aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin 517858811607.dkr.ecr.eu-west-1.amazonaws.com


echo "#################################pull镜像#################################"
docker pull 517858811607.dkr.ecr.eu-west-1.amazonaws.com/staging-gpt3-server:${BUILD_NU}
	docker stop $BUILD_NAME
	docker rm   $BUILD_NAME
	

echo "#################################启动镜像#################################"
	docker run -d --restart=always   --name $BUILD_NAME   -p ${GPT_VERSION}000:3000 \
	517858811607.dkr.ecr.eu-west-1.amazonaws.com/staging-gpt3-server:${BUILD_NU}
	
