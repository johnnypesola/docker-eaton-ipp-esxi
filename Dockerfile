FROM ubuntu:14.04

MAINTAINER Johnny Pesola <jopezzz@hotmail.com>

# Options
ENV esxiServer "192.168.1.2"

# Get and Install dependencies
RUN apt-get -y update
RUN apt-get install -y wget daemontools usbutils openssh-client

# Get Eaton IPP and install it.
RUN wget http://powerquality.eaton.com/Support/Software-Drivers/Downloads/IPS/ipp-linux_1.50.140-1_amd64.deb
RUN dpkg -i ipp-linux_1.50.140-1_amd64.deb
RUN rm ipp-linux_1.50.140-1_amd64.deb

# Make docker friendly service for Eaton-PPI
RUN mkdir -p /service/Eaton-IPP
RUN echo "#!/bin/bash\nexec /usr/local/Eaton/IntelligentPowerProtector/Eaton-IPP -service" > /service/Eaton-IPP/run
RUN chmod o=+x /service/Eaton-IPP/run

# Copy shutdown script files
RUN mkdir /shutdownscripts
ADD shutdown_esxi.sh /shutdownscripts/
#echo "#!/bin/bash\nexec  ssh root@${esxiServer} ‘/sbin/shutdown.sh ‘" > /shutdownscripts/shutdown_esxi.sh

# Copy private ssh key
ADD id_rsa /root/.ssh/

# Copy Eaton IPP config file
ADD config.js /usr/local/Eaton/IntelligentPowerProtector/configs/config.js

EXPOSE 4680
#ENTRYPOINT ["/usr/bin/svscan", "/service/"]
