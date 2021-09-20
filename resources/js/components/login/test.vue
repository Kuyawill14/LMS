<template>
    <v-app>
        <div class="file-selector">
 
        <p>
            <span>Authenticate with Google Drive</span>
        </p>
    
        <v-btn color="primary" @click="driveIconClicked()">Connect to Google Drive</v-btn>
        </div>

    </v-app>
</template>
<script>
export default {
data() {
  return {
      pickerApiLoaded: false,
      developerKey: "AIzaSyBEcuSSkfSt9_xQY-b5SjJle7OL8S4vpLQ",
      clientId: "50494717699-ef0j944ojc06eb8ofqipepfd0enj2sg3.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/drive.readonly",
      oauthToken: null,
      appId : "632002309900"
  }
},
methods:{
    async driveIconClicked() {
      console.log("Clicked");
      await gapi.load("auth2", () => {
        console.log("Auth2 Loaded");
        gapi.auth2.authorize(
          {
            client_id: this.clientId,
            scope: this.scope,
            immediate: false
          },
          this.handleAuthResult
        );
      });
      gapi.load("picker", () => {
        console.log("Picker Loaded");
        this.pickerApiLoaded = true;
        this.createPicker();
      });
    },
    handleAuthResult(authResult) {
      console.log("Handle Auth result", authResult);
      if (authResult && !authResult.error) {
        this.oauthToken = authResult.access_token;
        this.createPicker();
      }
    },
     createPicker() {
      console.log("Create Picker", google.picker);
      const docsView = new google.picker.DocsView(google.picker.ViewId.DOCS)
              .setIncludeFolders(true)
              .setSelectFolderEnabled(true);
      if (this.pickerApiLoaded && this.oauthToken) {
        var picker = new google.picker.PickerBuilder()
          .enableFeature(google.picker.Feature.SIMPLE_UPLOAD_ENABLED)
          .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
          .setAppId(this.appId)
          .addView(docsView)
          .addView(new google.picker.DocsUploadView())
          .setOAuthToken(this.oauthToken)
          .setDeveloperKey(this.developerKey)
          .setCallback(this.pickerCallback)
          .build();
        picker.setVisible(true);
      }
    },
     async pickerCallback(data) {
      console.log("PickerCallback", data);
      var url = "nothing";
      var name = "nothing";
      var doc = "";
      var fileID = "";
      var gdurl = "";
      var type = "anyone";
      var role = "reader";

   
      if (data[google.picker.Response.ACTION] === google.picker.Action.PICKED) {
        // Array of Picked Files
        console.log(data.docs[0].url);   
      }
    }
},

mounted() {
    let gDrive = document.createElement("script");
    gDrive.setAttribute("type", "text/javascript");
    gDrive.setAttribute("src", "https://apis.google.com/js/api.js");
    document.head.appendChild(gDrive);
  }
}
</script>