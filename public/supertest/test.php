<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta charset="utf-8" />
    <title>Google Picker Example</title>

    <script type="text/javascript">
        // The Browser API key obtained from the Google API Console.
        // Replace with your own Browser API key, or your own key.
        var developerKey = 'AIzaSyCHf8K43uDdgireH4W6-Ey_U8-K8WfhQX0';

        // The Client ID obtained from the Google API Console. Replace with your own Client ID.
        var clientId = "632002309900-tp1016ucoh2ohb4j02vvpjovhc7q5s8t.apps.googleusercontent.com"

        // Replace with your own project number from console.developers.google.com.
        // See "Project number" under "IAM & Admin" > "Settings"
        var appId = "632002309900";

        // Scope to use to access user's Drive items.
        var scope = ['https://www.googleapis.com/auth/drive.file'];

        var pickerApiLoaded = false;
        var oauthToken;

        // Use the Google API Loader script to load the google.picker script.
        function loadPicker() {
            gapi.load('auth', {
                'callback': onAuthApiLoad
            });
            gapi.load('picker', {
                'callback': onPickerApiLoad
            });
        }

        function onAuthApiLoad() {
            window.gapi.auth.authorize({
                    'client_id': clientId,
                    'scope': scope,
                    'immediate': false
                },
                handleAuthResult);
        }

        function onPickerApiLoad() {
            pickerApiLoaded = true;
            createPicker();
        }

        function handleAuthResult(authResult) {
            if (authResult && !authResult.error) {
                oauthToken = authResult.access_token;
                createPicker();
            }
        }

        // Create and render a Picker object for searching images.
        function createPicker() {
            if (pickerApiLoaded && oauthToken) {
                var view = new google.picker.View(google.picker.ViewId.DOCS);
                view.setMimeTypes("image/png,image/jpeg,image/jpg");
                var picker = new google.picker.PickerBuilder()
                    .enableFeature(google.picker.Feature.NAV_HIDDEN)
                    .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
                    .setAppId(appId)
                    .setOAuthToken(oauthToken)
                    .addView(view)
                    .addView(new google.picker.DocsUploadView())
                    .setDeveloperKey(developerKey)
                    .setCallback(pickerCallback)
                    .build();
                picker.setVisible(true);
            }
        }

        // A simple callback implementation.
        function pickerCallback(data) {
            if (data.action == google.picker.Action.PICKED) {
                var doc = data[google.picker.Response.DOCUMENTS][0];
                url = doc[google.picker.Document.URL];

                alert('The user selected: ' + url);
            }
        }
    </script>
</head>

<body>
    <div id="result"></div>
    <button onclick="showPickerDialog()">Show Picker Dialog</button>

    <!-- The Google API Loader script. -->
    <script type="text/javascript" src="https://apis.google.com/js/api.js"></script>
    <script>
        function showPickerDialog() {
            loadPicker()
        }
    </script>
</body>

</html>