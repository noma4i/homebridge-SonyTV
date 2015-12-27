# homebridge-SonyTV

Supports Sony TVs on HomeBridge Platform
based on http://www.openremote.org/display/forums/Sony+TV+HTTP+control

# Installation

WIP

# Configuration

Put your TVs IP Adress into the config

Configuration sample:

 ```
  "accessories": [
        {
            "accessory": "WeMo",
            "name": "WeMo Switch",
            "description": "The Lamp in the Bedroom",
            "wemo_name": "WeMo Switch"
        },
        {
            "accessory": "Http",
            "name": "TV",
            "api_url": "http://192.168.178.25/sony/IRCC?",
            "http_method": "POST",
            "volumeUp_body": "<?xml version="1.0" encoding="utf-8"?><s:Envelope xmlns:s=",
            "volumeDown_body": "<?xml version="1.0" encoding="utf-8"?><s:Envelope xmlns:",
            "channelUp_body": "<?xml version="1.0" encoding="utf-8"?><s:Envelope xmlns:s",
            "channelDown_body": "<?xml version="1.0" encoding="utf-8"?><s:Envelope xmlns",
            "username": "",
            "password": "",
            "sendimmediately": ""
        }
    ]

```
