#!/bin/bash
set -e -v

ssh ijsnow-me 'bash -s' <<'ENDSSH'
  cd /home/isaac/ws/src/github.com/ijsnow/me
  git pull origin master

  ./bin/build.sh
  # ./bin/run.sh
ENDSSH
