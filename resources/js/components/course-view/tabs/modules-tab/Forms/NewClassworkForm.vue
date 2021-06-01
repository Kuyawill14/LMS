<template>
  
    <div class="modal fade" id="Classworkmodal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                  <form @submit.prevent>
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="">Create Classwork</h5>
                  
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
               
                        <div class="form-row">
                            <div class="form-group col-md-8">
                            <label for="inputTitle">Title</label>
                            <input v-model="form.title" type="text" class="form-control" id="inputTitle" placeholder="Title">
                            </div>
                            <div class="form-group col-md-4">
                            <label for="inputType">Type</label>
                            <select id="inputType" v-model="form.type" class="form-control">
                                <option value="1">Quiz</option>
                                <option value="2">Assignment</option>
                                <option value="3">Activity</option>
                            </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="inputDescription">Description</label>
                                 <textarea v-model="form.description" class="form-control" id="inputDescription" rows="3"></textarea>
                            </div>
                           
                        </div>
                         <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="inputDueDate">Due Date</label>
                            <input v-model="form.due_date" type="datetime-local" class="form-control" id="inputDueDate" placeholder="Due date">
                            </div>
                        </div>
                 

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-secondry" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary" @click="SaveClasswork()"  >Save</button>
            
                    </div>
                </div>
                 </form>
            </div>
        </div>
   
</template>

<script>
import Form from 'vform'
export default {
    data(){
        return{
             form:new Form({})
        }
    },
    methods:{
         SaveClasswork(){
            this.form.class_id = this.$route.params.id;
            axios.post('/api/classwork/insert', this.form)
            .then(res=>{
                if(res.status == 201){
                     this.form.reset()
                        $('#Classworkmodal').modal('hide');
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Classwork Successfully Created',
                            showConfirmButton: false,
                            timer: 1500
                    })
                }
            }).catch(e=>{
                console.log(e);
            })
           
        },
    }
}
</script>
<style scoped>
    input, select{
        border-left: none;
        border-right: none;
        border-top: none;
    }
  
    
</style>