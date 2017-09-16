#!/usr/bin/env bash
set -e

NAME="ijsnow/me"

echo '>>> Get old container id'
CID=$(docker ps | grep "$NAME" | awk '{print $1}')
echo $CID

echo '>>> Building new image'
# Due to a bug in Docker we need to analyse the log to find out if build passed (see https://github.com/dotcloud/docker/issues/1875)
docker build ./deploy | tee /tmp/docker_build_result.log
RESULT=$(cat /tmp/docker_build_result.log | tail -n 1)
if [[ "$RESULT" != *Successfully* ]];
then
  echo 'exitting early'
  exit -1
fi

echo '>>> Tagging new image'
NEW=$(sudo docker ps -a -q | head -n 1)
docker commit $NEW $NAME


echo '>>> Stopping old container'
if [ "$CID" != "" ];
then
  docker stop $CID
fi


echo '>>> Restarting docker'
sudo service docker restart
sleep 5


echo '>>> Starting new container'
docker run -p 3000:3000 -d $NAME


echo '>>> Cleaning up containers'
docker ps -a | grep "Exit" | awk '{print $1}' | while read -r id ; do
  docker rm $id
done


echo '>>> Cleaning up images'
docker images | grep "^<none>" | head -n 1 | awk 'BEGIN { FS = "[ \t]+" } { print $3 }'  | while read -r id ; do
  docker rmi $id
done
