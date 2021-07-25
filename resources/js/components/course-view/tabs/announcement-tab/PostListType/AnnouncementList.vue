<template>
     <div class="d-flex flex-row user-info">
        <v-avatar size="45">
            <v-img class="rounded-circle"  
            :src="post.profile_pic == null || post.profile_pic == ''? 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=' + post.name : post.profile_pic"></v-img> 
        </v-avatar>
        <div class="d-flex flex-column justify-content-start ml-2 mt-1">
            <span class="d-block font-weight-bold name">{{post.name}}</span>
            <span class="date text-black-50">{{format_date(post.created_at)}}</span>
        </div>
    </div>
</template>