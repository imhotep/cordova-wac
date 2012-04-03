function CompassHeading(magneticHeading, trueHeading, headingAccuracy) {
	this.magneticHeading = magneticHeading;
	this.trueHeading = trueHeading;
	this.headingAccuracy = headingAccuracy;
	this.timestamp = new Date();
}

navigator.compass = {
		getCurrentHeading: function(compassSuccess, compassError, compassOptions) {
			if(deviceapis.orientation == undefined) { 
				console.log("navigator.compass.getCurrentHeading", "Operation not supported!")
				return -1;
			}
			var success = function(orientation) {
				var compassHeading = new CompassHeading(orientation.alpha, orientation.alpha, 0);
				compassSuccess(compassHeading);
			};
			var error = function(error) {
				compassError(error);
			};
			deviceapis.orientation.getCurrentOrientation(success, error);
		},
		watchHeading: function(compassSuccess, compassError, compassOptions) {
			if(deviceapis.orientation == undefined) { 
				console.log("navigator.compass.watchHeading", "Operation not supported!")
				return -1; 
			}
			var success = function(orientation) {
				var compassHeading = new CompassHeading(orientation.alpha, orientation.alpha, 0);
				compassSuccess(compassHeading);
			};
			var error = function(error) {
				compassError(error);
			};
			var orientationOptions = null;
			
			if (compassOptions != undefined) {
				orientationOptions = {
						minNotificationInterval: compassOptions.frequency || 100
				};
			}
			return deviceapis.orientation.watchOrientation(success, error, orientationOptions);
		},
		clearWatch : function(watchID) {
			deviceapis.orientation.clearWatch(watchID);
		},
		watchHeadingFilter: function() {
			console.log("navigator.compass.watchHeadingFilter", "Operation not supported!");
		},
		clearWatchFilter: function() {
			console.log("navigator.compass.clearWatchFilter", "Operation not supported!");
		}
}