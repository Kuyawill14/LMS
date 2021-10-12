<template>

        <v-card class="pa-3">
            <v-row>
                <v-col cols="12" class="pa-5">
                     <v-img :src="filePreview" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="150px"
                aspect-ratio="2"></v-img>
                </v-col>
                <v-col cols="12" class="text-right">
                    <v-btn @click="$emit('CloseDialog')">
                        Cancel
                    </v-btn>
                    <v-btn @click="$emit('SaveImageFile')" class="primary pl-1 pr-1">
                        Save
                    </v-btn>
                </v-col>
            </v-row>
           
        </v-card>

</template>
<script>
export default {
    props: ['filePreview']
}
</script>