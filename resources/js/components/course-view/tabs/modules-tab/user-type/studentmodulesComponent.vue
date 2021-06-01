<template>



    <div class="container-fluid pl-0 pr-2">
        <div class="row">
            <div class="col-8 pl-0 pr-0">
                <div class="container-fluid pr-0">
                    <iframe title="office viewer" class="video-c" id="pdf-iframe"
                    :src="'https://view.officeapps.live.com/op/view.aspx?src=https://edu.stacktrek.com/uploads/courses/2304/files/research.GRgPROnP.pptx'"
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                        style="width: 100%;height: 100%"></iframe>
                </div>
                <div class="container bottom-content">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{subModuleData.sub_module_name}}</h4>
                        </div>
                        <div class="card-body">

                            <p class="card-text">
                                {{subModuleData}}


                            </p>

                        </div>

                    </div>

                </div>

            </div>
            <div class="col border" style="height: 100vh">
                <div class=" flex-column">

                    <modulesListComponent :role="role" v-on:subModule="getSubModuleData"></modulesListComponent>
                </div>

            </div>
        </div>



    </div> <!-- /#wrapper -->

</template>

<script>
    import VueElementLoading from 'vue-element-loading'
    //import modulesListComponent from './modulesListComponent'

    const modulesListComponent = () => import("./studentmodulesListComponent")
    import {
        mapGetters,
        mapActions
    } from "vuex";
    export default {
        props: ['role'],
        components: {
            VueElementLoading,
            modulesListComponent,


        },
        data() {
            return {
                loading: false,
                subModuleData: {
                 
                    sub_module_name: "123",
             
                    file_attachment: null,
                  
           
                },
                iframeSrc: null
            }
        },
        methods: {
            getSubModuleData(value) {
                this.subModuleData = value;
                var origin_url = window.location.origin;
                var base_src = 'https://view.officeapps.live.com/op/view.aspx?src=';
                this.iframeSrc = 'https://view.officeapps.live.com/op/view.aspx?src=https://edu.stacktrek.com/uploads/courses/2304/files/research.GRgPROnP.pptx';

            }
        },

    }

</script>

<style scoped>
    .bottom-content {

        padding-left: 30px;

    }

    .video-c {
        min-height: 470px;
    }

    #wrapper {
        padding-left: 0;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }


    #sidebar-wrapper {
        /* z-index: 1000; */
        position: absolute;
        right: 250px;
        /* width: 0; */
        height: 100%;
        margin-right: -250px;
        overflow-y: auto;

        transition: all 0.5s ease;
    }

    #page-content-wrapper {
        width: 100%;
        position: absolute;
        padding: 15px;
    }


    /* Sidebar Styles */

    .sidebar-nav {
        position: absolute;
        width: 250px;
        margin: 0;
        padding: 0;
        list-style: none;
    }


    @media(min-width:768px) {
        #wrapper {
            padding-left: 0;
        }

        #wrapper.toggled {
            padding-right: 250px;
        }

        #sidebar-wrapper {
            width: 0;
        }

        #wrapper.toggled #sidebar-wrapper {
            width: 250px;
        }

        #page-content-wrapper {
            padding: 20px;
            position: relative;
        }

        #wrapper.toggled #page-content-wrapper {
            position: relative;
            margin-right: 0;
        }
    }

</style>
