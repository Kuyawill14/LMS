<template>
    <v-app>
        <div class="file-selector">
 
        <p>
            <span>Authenticate with Google Drive</span>
        </p>


        <v-btn color="primary" @click="driveIconClicked()">Connect to  Google Drive</v-btn>
        </div>

    </v-app>
</template>
<script>
import moment from 'moment-timezone';
export default {
data() {
  return {
      pickerApiLoaded: false,
      developerKey: "AIzaSyBEcuSSkfSt9_xQY-b5SjJle7OL8S4vpLQ",
      clientId: "50494717699-330od4l2qlu2bjth0s6332u6evfoiale.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/drive",
      oauthToken: null,
      appId : "50494717699",
      endAt:  (new  Date).getTime(),
      momentDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
      testTime: null,
  }
},
methods:{
    async driveIconClicked() {
      await gapi.load("auth2", () => {
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
        this.pickerApiLoaded = true;
        this.createPicker();
      });
    },
    handleAuthResult(authResult) {
      if (authResult && !authResult.error) {
        this.oauthToken = authResult.access_token;
        this.createPicker();
      }
    },
     createPicker() {
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
      //console.log("PickerCallback", data);
      var url = "nothing";
      var name = "nothing";
      var doc = "";
      var fileID = "";
      var gdurl = "";
      var type = "anyone";
      var role = "editor";
      if (data[google.picker.Response.ACTION] === google.picker.Action.PICKED) {
        alert(data.docs[0].url);
      }
    }
},

mounted() {
    let gDrive = document.createElement("script");
    gDrive.setAttribute("type", "text/javascript");
    gDrive.setAttribute("src", "https://apis.google.com/js/api.js");
    document.head.appendChild(gDrive);

  }

/*   mounted() {
    let gDrive = document.createElement("script");
    gDrive.setAttribute("type", "text/javascript");
    gDrive.setAttribute("src", "https://apis.google.com/js/api.js");
    document.head.appendChild(gDrive);
    const timdate = moment(new Date).tz("Asia/Manila").format('YYYY-MM-DD HH:mm:ss');
    
    let dd = Date.now();
    //console.log(this.endAt);
    //console.log(this.momentDate);
    axios.get('/api/profile/datetoday')
    .then(res=>{
      ////console.log(res.data);
      this.testTime = res.data;
    })

  } */
}
</script>