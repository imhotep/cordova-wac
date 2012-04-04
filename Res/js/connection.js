var Connection = {
		UNKNOWN: "unknown",
		ETHERNET: "ethernet",
		WIFI: "wifi",
		CELL_2G: "2g",
		CELL_3G: "3g",
		CELL_4G: "4g",
		NONE: "none"
};
// We can't tell if a cell connection is 2,3 or 4G.
// We just know if it's connected and the signal strength
// if it's roaming and the network name etc..so unless wifi we default to UNKNOWN
function NetworkConnection() {
	this.type = Connection.UNKNOWN;
	var self = this;
	
	var error = function(error) {
		console.log(JSON.stringify(error));
	};
	
	deviceapis.devicestatus.getPropertyValue(function(value) {
		console.log("Device WiFi network status: "+value);
		if(value == "connected") {
			self.type = Connection.WIFI;
		}
	}, error, {aspect: "WiFiNetwork", property: "networkStatus"});
	
//	info.getPropertyValue(function(value) {
//		console.log("Device Cellular network status: "+value);
//		if(signalStrength > 10) {
//			self.type = Connection.CELL_3G;
//		}
//	}, error, {aspect: "CellularNetwork", property: "signalStrength"});
}

navigator.network = {};
navigator.network.connection = new NetworkConnection();