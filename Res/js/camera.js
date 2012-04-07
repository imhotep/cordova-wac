navigator.camera = {
		getPicture: function(cameraSuccess, cameraFailure, cameraOptions) {
			// TODO
		},
		getPreview: function() {
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
			        mainCamera = cams[0];
			        mainCamera.createPreviewNode(onCreatePreviewNodeSuccess, error);
			        return;
			    }
			    alert("Sorry, no cameras available.");
			};
			deviceapis.camera.getCameras(success, error);
		}
}