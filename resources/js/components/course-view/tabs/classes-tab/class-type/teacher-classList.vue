<template>
    <div class="container">

        <md-list class="md-triple-line" v-for="(item, i) in allClass" :key="'class'+i">

            <md-list-item>
                <md-icon style="font-size: 4rem !important;">class</md-icon>

                <div class="md-list-item-text">
                    <span>{{item.class_name}}</span>
                    <span> <strong>Class code: </strong> {{item.class_code}}</span>
                    <p>{Students Count}</p>
                </div>

             
               
                    <div class="dropdown md-icon-button md-list-action" >
                        <button class="btn btn-link dropdown-toggle text-white" type="button" id="gedf-drop1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            style="position:absolute;right:0;    background: transparent">
                              <md-icon>more_vert</md-icon>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1"
                            x-placement="bottom-end"
                            style="position: absolute; transform: translate3d(144px, 38px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item pointer" data-toggle="modal" data-target="#modal"
                                @click="openEditmodal(item.class_name,item.class_id)">Edit</a>
                            <a class="dropdown-item pointer">Archive</a>
                            <a class="dropdown-item pointer">Unenroll</a>
                        </div>

                    </div>
               

            </md-list-item>
            <md-divider class="md-inset"></md-divider>
        </md-list>
    </div>
</template>


<script>
    const VueElementLoading = () => import("vue-element-loading")
    import createClassForm from './createClass'
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        components: {
            VueElementLoading,
            createClassForm

        },
        computed: mapGetters(['allClass']),
        methods: {
            ...mapActions(['fetchSubjectCourseClassList']),
        },
        created() {

            this.fetchSubjectCourseClassList(this.$route.params.id);


        }
    }

</script>

<style scoped>
    .row {
        align-items: center;
    }

    .card-group-row__col .fullbleed {
        transition: all ease-in-out 0.4s !important;
    }

    .card-group-row__col:hover .fullbleed {
        opacity: 0.4 !important;
        transition: all ease-in-out 0.4s;
    }

    #gedf-drop1:hover {
        color: #EFBB20 !important;
    }

    #gedf-drop1 {
        color: #000;
    }

    .clas_icon {
        font-size: 80px;
    }

</style>
