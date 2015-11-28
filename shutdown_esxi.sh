#!/bin/bash\nexec

# One line for each server. Requires ssh keys to be setup on ESXi host
# Initiates shutdown script on the remote ESXi host
ssh root@192.168.1.2 '/sbin/shutdown.sh '
