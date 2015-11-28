cfg =
{
  'httpServers': 
  {
    'http': 
    {
      'port': 4679
    }, 
    'https': 
    {
      'port': 4680
    }
  }, 
  'snmp': 
  {
    'defaultCommunityName': "public", 
    'requestPort': 161, 
    'trapPort': 162, 
    'timeout': 10000, 
    'discoveryV1': true, 
    'discoveryV3': false, 
    'username': "", 
    'securityLevel': "", 
    'authMethod': "", 
    'authPassword': "", 
    'privMethod': "", 
    'privPassword': ""
  }, 
  'unmp': 
  {
    'enabled': true, 
    'shutdown': true
  }, 
  'xmlPDC': 
  {
    'tcpMode': true, 
    'udpMode': true, 
    'discovery': true, 
    'username': "admin", 
    'password': "dockeradmin"
  }, 
  'xmlProxy': 
  {
    'port': 5001, 
    'maxConnection': 250, 
    'authentication': "hmac-sha-1", 
    'tcpMode': true, 
    'udpMode': true
  }, 
  'smtp': 
  {
    'port': 25
  }, 
  'nut': 
  {
    'discovery': true
  }, 
  'acquisition': 
  {
    'initDispatch': 100, 
    'pollingRate': 60000
  }, 
  'localization': 
  {
    'language': "default", 
    'langCode': "eng", 
    'time': "H:MM:ss", 
    'shortDate': "yyyy/mm/dd", 
    'extShortDate': "y/m/d", 
    'longDate': "yyyy/mm/dd", 
    'firstWeekDay': 0, 
    'widthFactor': 1, 
    'temperatureUnit': "C", 
    'country': ""
  }, 
  'sysInfo': 
  {
    'contact': "", 
    'location': "", 
    'productKey': "", 
    'version': "1.50"
  }, 
  'modules': 
  {
    'LogManagement': 
    {
      'enabled': true, 
      'option': false, 
      'admin': "show,acknowledge,export,purge", 
      'user': "show,export", 
      'viewList': "eventsList,eventsCalendar,eventsGraph"
    }, 
    'ActionSettings': 
    {
      'enabled': true, 
      'option': false, 
      'admin': "show,create,test", 
      'user': "show", 
      'viewList': "action"
    }, 
    'Discovery': 
    {
      'enabled': true, 
      'option': false, 
      'admin': "show,create,run,edit,remove", 
      'user': "show,run", 
      'viewList': "discovery"
    }, 
    'UserList': 
    {
      'enabled': true, 
      'option': false, 
      'admin': "show,create", 
      'user': "", 
      'viewList': "userList"
    }, 
    'Shutdown': 
    {
      'enabled': true, 
      'option': false, 
      'scriptMode': true, 
      'admin': "show,edit,test", 
      'user': "show", 
      'viewList': "shutdown,powersource,powercomponents"
    }, 
    'Redundancy': 
    {
      'enabled': false, 
      'option': true, 
      'admin': "show,edit", 
      'user': "show", 
      'viewList': "powercomponents"
    }, 
    'SystemSettings': 
    {
      'enabled': true, 
      'option': false, 
      'admin': "show,edit,update", 
      'user': "show", 
      'viewList': "system"
    }, 
    'SystemLogs': 
    {
      'enabled': true, 
      'option': false, 
      'admin': "show,edit,export,purge", 
      'user': "show,export", 
      'viewList': "sysLog"
    }, 
    'ProductKey': 
    {
      'enabled': false, 
      'option': false, 
      'admin': "", 
      'user': ""
    }, 
    'PoweredApp': 
    {
      'enabled': false, 
      'option': false, 
      'admin': "", 
      'user': ""
    }, 
    'XMLProxy': 
    {
      'enabled': false, 
      'option': true, 
      'admin': "show", 
      'user': "show", 
      'viewList': "notifiedApplications", 
      'service': "scripts/libs/xml_proxy.js"
    }
  }, 
  'actionList': 
  {
    '0': 
    {
      'active': false, 
      'name': "/Config/Action/Email/DefaultActionName", 
      'action': "sendEmail", 
      'params': 
      {
        'server': "smtp.server.com", 
        'login': "admin", 
        'password': "admin", 
        'recipients': "sysadmin@server.com", 
        'sender': "", 
        'subject': "/Config/Action/Email/DefaultSubject/IPP", 
        'message': "/Config/Action/Email/DefaultMessage", 
        'digest': "60000"
      }, 
      'criticality': "1234", 
      'categories': 
      [
        /*0:*/ "#alarmEvents"
      ], 
      'views': 
      [
        /*0:*/ "views"
      ], 
      'actionID': "0"
    }, 
    '1': 
    {
      'active': true, 
      'name': "/Config/Action/Notification/DefaultActionName", 
      'action': "sendNotification", 
      'params': 
      {
      }, 
      'criticality': "1234", 
      'categories': 
      [
        /*0:*/ "#alarmEvents", 
        /*1:*/ "#shutdownEvents"
      ], 
      'views': 
      [
        /*0:*/ "views"
      ], 
      'actionID': "1"
    }
  }, 
  'shutdownSettings': 
  {
    'powerSource': "", 
    'loadSegment': 1, 
    'shutdownDuration': 120, 
    'shutdownTimer': -1, 
    'shutoffControl': 1, 
    'shutdownType': "script", 
    'shutdownScript': "/shutdownscripts/shutdown_esxi.sh", 
    'shutdownCriteria': 
    [
      /*0:*/ "#ShutdownReached"
    ]
  }, 
  'autoUpdate': 
  {
    'checkInterval': 604800000, 
    'lastUpdate': 0, 
    'nextCheckUpdate': 1449331416824, 
    'updateLocation': 
    {
      'host': "pqsoftware.eaton.com", 
      'port': 80, 
      'path': "upgrade"
    }, 
    'notifyUpdate': false, 
    'lastCheck': 1448726616824
  }, 
  'logExportLimit': 20000, 
  'logManager': 
  {
    'purge': 
    {
      'alarms': 
      {
        'maxTime': 2419200000, 
        'maxCount': 50000
      }, 
      'measures': 
      {
        'maxTime': 604800000, 
        'maxCount': 200000
      }, 
      'stats': 
      {
        'maxTime': 2419200000, 
        'maxCount': 20000
      }, 
      'system': 
      {
        'maxTime': 2419200000, 
        'maxCount': 50000
      }, 
      'default': 
      {
        'maxTime': 2419200000, 
        'maxCount': 50000
      }
    }, 
    'stats': 
    {
      'nodeStats': 10
    }
  }, 
  'scan': 
  {
    'range': 
    {
    }, 
    'address': 
    {
      'ip': "", 
      'password': ""
    }, 
    'firstScan': false, 
    'autoScan': false, 
    'udpScan': true, 
    'serialScan': true, 
    'serialRange': "1-8", 
    'usbScan': true, 
    'unmpScan': true, 
    'nodeClasses': "ipx,nmc,powerware,ushi_yupi,pxgms,empty"
  }, 
  'systray': 
  {
    'soundAlarm': false, 
    'notificationIcon': true, 
    'notificationBox': true
  }
}
