# homebridge-SonyTV

Supports Sony TVs on HomeBridge Platform
based on http://www.openremote.org/display/forums/Sony+TV+HTTP+control

# Installation

WIP This plugin does not work yet

# Configuration

Put your TVs IP Adress into the config

Configuration sample:

 ```
"accessories": [
        {
            "accessory": "Http",
            "name": "TV",
            "api_url": "http://tv-ip-address/IRCC?",
            "http_method": "POST",
            "volumeUp_body": "<?xml version=\"1.0\" encoding=\"utf-8\"?><s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\" s:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><s:Body><u:X_SendIRCC xmlns:u=\"urn:schemas-sony-com:service:IRCC:1\"><IRCCCode>AAAAAQAAAAEAAAASAw==</IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>",
            "volumeDown_body": "<?xml version=\"1.0\" encoding=\"utf-8\"?><s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\" s:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><s:Body><u:X_SendIRCC xmlns:u=\"urn:schemas-sony-com:service:IRCC:1\"><IRCCCode>AAAAAQAAAAEAAAATAw==</IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>",
            "channelUp_body": "<?xml version=\"1.0\" encoding=\"utf-8\"?><s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\" s:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><s:Body><u:X_SendIRCC xmlns:u=\"urn:schemas-sony-com:service:IRCC:1\"><IRCCCode>AAAAAQAAAAEAAAAQAw==</IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>",
            "channelDown_body": "<?xml version=\"1.0\" encoding=\"utf-8\"?><s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\" s:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><s:Body><u:X_SendIRCC xmlns:u=\"urn:schemas-sony-com:service:IRCC:1\"><IRCCCode>AAAAAQAAAAEAAAARAw==</IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>",
			"username": "",
			"password": "",
			"sendimmediately": ""
        }
    ]

```
