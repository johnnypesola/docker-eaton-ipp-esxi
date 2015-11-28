# Eaton IPP (USB) Docker container 

## Goal/Purpose

To configure Eaton IPP to automatically shut down ESXi host(s) on low power.

(Only tested with USB use).

## Description

This is the Git repo for a Docker container installing Eatons Intelligent-Power-Protector software which allows you to control and setup actions for your Eaton UPS throught a web interface.

Setup the provided configuration files properly to allow your ESXi host to gracefully shut down VM:s and finally power off the hypervisor.

After configuration and build, find out which USB port you UPS is using with the lsusb command. Pass the USB device to the container with the following run command example.

run -it --device=/dev/bus/usb/001/007 -p 4680:4680 eaton-ppi-esxi
   
After building and running this container you should login to the web-interface and auto detect your Eaton UPS in the web interface.
   
https://<ip address>:4680   
username: admin
password: dockeradmin   

## Prerequisites

*   ESXi host has ssh enabled.
*   ESXi host is configured to allow connections from the provided id_rsa key.

How to configure ESXi is outside the scope of this readme. [But this could help you out.](https://communities.vmware.com/message/2192764)

## Provided configuration files

*   shutdown_esxi.sh
   
This is the default script file which is executed when the UPS battery reaches it's low power level.

*   id_rsa & id_rsa.pub

 The private and public keypair which is used by the container to connect to your ESXi host(s). You are strongly adviced to generate your own keypair with open-ssh.
   
*   config.js

The default configuration file for Eaton IPP. Change values as you please.

## Other info

Based on Ubuntu 14.04.   
Will probably only work with USB-connected UPS:es.   
Tested with Eaton 3S 550 UPS
