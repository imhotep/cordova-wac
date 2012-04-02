function Device() {
    this.name = "";
    this.phonegap = "1.6.0";
    this.platform = "";
    this.uuid = "";
    this.os_name = "";
    this.os_version = "";
    this.os_vendor = "";
};

var device;

function fireDeviceReady() {
	console.log("deviceready");
	var e = document.createEvent("Events");
	e.initEvent("deviceready");
	document.dispatchEvent(e);
}

function setDeviceInfo() {
	var info = deviceapis.devicestatus;
	var properties = ["name", "uuid", "os_name", "os_vendor", "os_version"];
	
	device = new Device();
	
	var checkProperties = function() {
		properties.pop();
		if(properties.length == 0) {
			fireDeviceReady();
		}
	};
	
	var error = function(error) {
		console.log("Error while fetching "+error);
	};
	
	info.getPropertyValue(function(value) {
		console.log("Device IMEI: "+value);
		device.uuid = value;
		checkProperties();
	}, error, {aspect: "Device", property: "imei"});
	info.getPropertyValue(function(value) {
		console.log("Device name: "+value);
		device.name = value;
		checkProperties();
	}, error, {aspect: "Device", property: "version"});
	info.getPropertyValue(function(value) {
		console.log("OperatingSystem name: "+value);
		device.os_name = value;
		checkProperties();
	}, error, {aspect: "OperatingSystem", property: "name"});
	info.getPropertyValue(function(value) {
		console.log("OperatingSystem version: "+value);
		device.os_version = value;
		checkProperties();
	}, error, {aspect: "OperatingSystem", property: "version"});
	info.getPropertyValue(function(value) {
		console.log("OperatingSystem vendor: "+value);
		device.os_vendor = value;
		checkProperties();
	}, error, {aspect: "OperatingSystem", property: "vendor"});
};

Osp.App.Application.addEventListener("initializing", function()
{
	console.log("initializing");
	setDeviceInfo();
}, this);