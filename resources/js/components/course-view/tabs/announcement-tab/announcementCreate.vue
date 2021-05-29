<template>
<div>


     <editor placeholder="Announce something in your class!" class="border"
      v-model="announcement.content" theme="snow" ></editor>
       <br>
        <div class="form-row">
            <div class="col-sm-8">
                <label for="file-upload" class="custom-file-upload ">
                    <i class="fa fa-file" aria-hidden="true"></i>
                    Upload file
                </label>
                <input id="file-upload" type="file" name="file" style="display:none">
                <label id="file-name"></label></div>
            <div class=" col-sm-2 text-right">
                <select class="form-control">
                    <option>All Class</option>
                    <option>Class 1</option>
                </select>

            </div>
            <div class="col-sm-2 text-right">
                <button type="submit" name="create_post" class="btn btn-primary form-control"
                    @click="createPost">Post</button>

            </div>

        </div>

</div>
</template>
<script>
export default {
    data() {
            return {
                value: '',
                content: '',
                announcement: {
                    content: "",
                    file: "",
                    class_id: ""
                },
                }
            },
        methods: {
            val() {
                this.value = "This's new value";
            },

            onChange(html, text) {
                console.log(html.length, text.length);
            },
             createPost() {

                if (this.announcement.content != '') {
                    this.isloading = true;
                    setTimeout(() => this.isloading = false, 1500);


                    this.announcement.file = "sample"
                    this.announcement.class_id = this.$route.params.id;
                    this.announcement.content = this.announcement.content.replaceAll('p>', 'div>');
                    this.$store.dispatch('createClassPost', this.announcement);
                    this.announcement.content = '';
                } 

            },



        },
}
</script>