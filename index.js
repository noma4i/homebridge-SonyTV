var Service, Characteristic, VolumeCharacteristic, ChannelCharacteristic;
var request = require("request");
var inherits = require('util').inherits;


module.exports = function(homebridge){
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  
  makeVolumeCharacteristic();
  makeChannelCharacteristic();
  
  homebridge.registerAccessory("homebridge-sonytv", "Http", HttpAccessory);
}

function HttpAccessory(log, config) {
	this.log = log;

	// url info
	this.api_url    	= config["api_url"];
	this.http_method 	= config["http_method"];
	this.volUp_body   	= config["volUp_body"];
	this.volDown_bod	= config["volDown_body"];
	this.chanUp_body	= config["chanUp_body"];
	this.chanDown_body 	= config["chanDown_body"];
	this.username 		= config["username"];
	this.passwor		= config["password"];
	this.sendimmediate	= config["sendimmediately"];
	this.name 		= config["name"];
}

HttpAccessory.prototype = {

	httpRequest: function(url, body, method, username, password, sendimmediately, callback) {
		request({
				url: url,
				body: body,
				method: method,
				rejectUnauthorized: false,
				auth: {
					user: username,
					pass: password,
					sendImmediately: sendimmediately
				}
			},
			function(error, response, body) {
				callback(error, response, body)
			})
	},

	setVolume: function(volumeUp, callback) {
		var url;
		var body;

		if (volumeUp) {
			url = this.api_url;
			body = this.volumeUp_body;
			this.log("Turning up the volume");
		} else {
			url = this.api_url;
			body = this.volumeDown_body;
			this.log("Turning down the volume");
		}

		this.httpRequest(url, body, this.http_method, this.username, this.password, this.sendimmediately, function(error, response, responseBody) {
			if (error) {
				this.log('HTTP power function failed: %s', error.message);
				callback(error);
			} else {
				this.log('HTTP power function succeeded!');
				this.log(response);
				this.log(responseBody);
	
				callback();
			}
		}.bind(this));
	},

	setChannel: function(channelUp, callback) {
		var url;
		var body;

		if (channelUp) {
			url = this.api_url;
			body = this.channelUp_body;
			this.log("Channel up");
		} else {
			url = this.api_url;
			body = this.channelDown_body;
			this.log("Channel down");
		}

		this.httpRequest(url, body, this.http_method, this.username, this.password, this.sendimmediately, function(error, response, responseBody) {
			if (error) {
				this.log('HTTP power function failed: %s', error.message);
				callback(error);
			} else {
				this.log('HTTP power function succeeded!');
				this.log(response);
				this.log(responseBody);
	
				callback();
			}
		}.bind(this));
	},

	identify: function(callback) {
		this.log("Identify requested!");
		callback(); // success
	},

	getServices: function() {

		// you can OPTIONALLY create an information service if you wish to override
		// the default values for things like serial number, model, etc.
		var informationService = new Service.AccessoryInformation();

		informationService
			.setCharacteristic(Characteristic.Manufacturer, "HTTP Manufacturer")
			.setCharacteristic(Characteristic.Model, "HTTP Model")
			.setCharacteristic(Characteristic.SerialNumber, "HTTP Serial Number");
			
		var tvService = new Service.Switch("tvService");
		
			tvService
				.addCharacteristic(VolumeCharacteristic)
				.on("set",this.setVolume.bind(this));
				
			tvService
				.addCharacteristic(ChannelCharacteristic)
				.on("set",this.setChannel.bind(this));

			return [informationService, tvService];
		}
};
	
	// Custom Characteristics

	function makeVolumeCharacteristic() {

  		VolumeCharacteristic = function() {
    		Characteristic.call(this, 'Volume', '19E1CF82-E0EE-410D-A23C-E80020354C13');
    		this.setProps({
		 format: Characteristic.Formats.INT,
		 unit: Characteristic.Units.NONE,
		 maxValue: 100,
		 minValue: 0,
		 minStep: 1,
		 perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
		});
    		this.value = this.getDefaultValue();
	};
  
  		inherits(VolumeCharacteristic, Characteristic);
	}
	
	function makeChannelCharacteristic() {

  		ChannelCharacteristic = function() {
    		Characteristic.call(this, 'Channel', '212131F4-2E14-4FF4-AE13-C97C3232499D');
    		this.setProps({
		 format: Characteristic.Formats.INT,
		 unit: Characteristic.Units.NONE,
		 maxValue: 100,
		 minValue: 0,
		 minStep: 1,
		 perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
		});
    		this.value = this.getDefaultValue();
	};
  
  		inherits(ChannelCharacteristic, Characteristic);
	}
