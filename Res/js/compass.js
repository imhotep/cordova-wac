function CompassHeading(magneticHeading, trueHeading, headingAccuracy, timestamp) {
	this.magneticHeading = magneticHeading;
	this.trueHeading = trueHeading;
	this.headingAccuracy = headingAccuracy;
	this.timestamp = timestamp;
}

navigator.compass = {
		getCurrentHeading: function(compassSuccess, compassError, compassOptions) {
			var success = function(orientation) {
				var compassHeading = new CompassHeading(orientation.alpha);
			};
			var error = function(orientation) {
				
			};
			if(deviceapis.orientation) {
				deviceapis.orientation.getCurrentOrientation(success);
			} else {
				console.log("navigator.compass.getCurrentHeading", "Orientation not supported!");
			}
		},
		watchHeading: function() {
			
		},
		clearWatch : function() {
			
		},
		watchHeadingFilter: function() {
			
		},
		clearWatchFilter: function() {
			
		}
}