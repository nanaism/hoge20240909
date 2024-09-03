#!/bin/bash

if ! pgrep -f "node" > /dev/null
then
    cd /home/ubuntu/bibleweb/
    make run &
    echo "React app was down, restarted at $(date)" >> /path/to/your/logfile.log
fi

