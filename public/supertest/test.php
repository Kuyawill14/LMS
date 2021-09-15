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

        //         const googleViewId = google.picker.ViewId.DOCS;

        // /*code to create obj of DocsUploadView for upload*/
        // const uploadView = new google.picker.DocsUploadView();


        // const picker = new window.google.picker.PickerBuilder()
        //                 .enableFeature(google.picker.Feature.SIMPLE_UPLOAD_ENABLED)
        //                   .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
        //                     .addView(docsView)
        //                     .addView(uploadView) /*DocsUploadView added*/
        //                     .setOAuthToken(oauthToken)
        //                     .setDeveloperKey('YOUR_DEVELOPER_KEY_HERE')
        //                     .setCallback((data)=>{
        //                       if (data.action == google.picker.Action.PICKED) {
        //                           var fileId = data.docs[0].id;
        //                           alert('The user selected: ' + fileId);
        //                           picker();
        //                       }
        //                     });
        // picker.build().setVisible(true);

        // Create and render a Picker object for searching images.

        function createPicker() {
            if (pickerApiLoaded && oauthToken) {
                var view = new google.picker.View(google.picker.ViewId.DOCS);
                view.setMimeTypes("application/vnd.google-apps.folder");
                const docsView = new google.picker.DocsView(google.picker.ViewId.DOCS)
                    .setIncludeFolders(true)
                    .setSelectFolderEnabled(true);

                var picker = new google.picker.PickerBuilder()
                    .enableFeature(google.picker.Feature.SIMPLE_UPLOAD_ENABLED)
                    .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
                    .setAppId(appId)
                    .setOAuthToken(oauthToken)
                    // .addView(uploadView) /*DocsUploadView added*/
                    // .addView(view)
                    .addView(docsView)
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


                var request2 = gapi.client.request({
            'path': '/drive/v3/files/' + doc[google.picker.Document.ID],
            'method': 'PATCH',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + oauthToken
            },
            'body': {
                copyRequiresWriterPermission: true
            }

        });
        request2.execute(function (resp) {
            console.log(resp);
        });
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
