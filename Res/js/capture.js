navigator.camera = {
		_mainCamera: null,
		_cams: [],
		getPicture: function(cameraSuccess, cameraFailure, cameraOptions) {
			// TODO
		},
		getPreview: function() {
			var self = this;
			var onCreatePreviewNodeSuccess = function(previewObject) {
			    var previewDiv = document.getElementById("preview");
			    previewId = previewObject.id;
			    previewDiv.appendChild(previewObject);
			    previewObject.style.visibility = "visible";
			};
			var error = function(e) {
			    alert("An error occured: " + e.message);
			};
			 
			var success = function(cams) {
			    if (cams.length > 0) {
			    	self._cams = cams;
			        self._mainCamera = cams[0];
			        self._mainCamera.createPreviewNode(onCreatePreviewNodeSuccess, error);
			        return;
			    }
			    alert("Sorry, no cameras available.");
			};
			deviceapis.camera.getCameras(success, error);
		}
};

navigator.capture = {
		captureAudio: function() {
			console.log("navigator.capture.captureAudio unsupported!");
		},
		captureVideo: function(success, fail, options) {
	        var camera = navigator.camera._mainCamera;
			camera.startVideoCapture(success, fail, options);
	        if(options.duration) {
	        	Osp.Core.Function.delay(camera.stopVideoCapture, options.duration, camera);
	        }
		},
		stopVideoCapture: function() {
			navigator.camera._mainCamera.stopVideoCapture();
		},
		captureImage: function(success, fail, options) {
			try {
				navigator.camera._mainCamera.captureImage(success, fail, options);
			} catch(exp) {
				alert("Exception :[" + exp.code + "] " + exp.message);
			}
		}
}