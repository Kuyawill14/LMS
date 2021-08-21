<template>
<div style="height:100vh">
 <iframe :src="'https://view.officeapps.live.com/op/embed.aspx?src=http://127.0.0.1:8000/'+file" width='100%' height='100%' frameborder='0'>This is an embedded <a target='_blank' href='http://office.com'>Microsoft Office</a> document, powered by <a target='_blank' href='http://office.com/webapps'>Office Online</a>.</iframe>

</div>
</template>
<script>
export default {
    data(){
        return{
            file: '/storage/upload/classworkAttachments/1/XfamVYPZmrUtAM6WJfJm1uU7iocZGlktONpNUqA7.docx'
        }
    }
}
</script>