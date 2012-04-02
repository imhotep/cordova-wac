Connection = {
		UNKNOWN: "unknown",
		ETHERNET: "ethernet",
		WIFI: "wifi",
		CELL_2G: "2g",
		CELL_3G: "3g",
		CELL_4G: "4g",
		NONE: "none"
};

function NetworkConnection() {
	var self = this;
	var info = deviceapis.devicestatus;
	
	info.getPropertyValue(function(value) {
		console.log("Device WiFi network status: "+value);
		if(value == "connected") {
			self.type = Connection.WIFI;
		}
	}, error, {aspect: "WiFiNetwork", property: "networkStatus"});
	
	info.getPropertyValue(function(value) {
		console.log("Device Cellular network status: "+value);
		if(value == "connected") {
			self.type = Connection.WIFI;
		}
	}, error, {aspect: "CellularHardware", property: "status"});
}

var connection = new NetworkConnection();