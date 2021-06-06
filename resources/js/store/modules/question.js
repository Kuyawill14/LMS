import axios from 'axios'

const state = {
    question_data: []
};
const getters = {
    getAll_questions: (state) => state.question_data,
    /* getAll_questions: (state) => {
        return state.question_data[0].slice()
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        
    }
 */
};

const actions = {
    async fetchQuestions({ commit }, id) {
        const res = await axios.get(
            `/api/question/all/${id}`
        );
        let data = [res.data, res.data.Question.length];
        commit('FETCH_QUESTIONS', res.data);
        return data;
    },

    async addQuestions({ commit }, data) {

       if(data.questions.type != 'Two Colums Multiple Choice'){
            const res = await axios.post(`/api/question/insert`, 
            {   questions: data.questions, 
                answers: data.answers,
                length:data.ansLength,
                classwork_id: data.clw
            });
       }
       else{
           const res = await axios.post(`/api/question/insert`, 
           {   questions: data.questions, 
               answers: data.answers,
               length:data.ansLength,
              classwork_id: data.clw
           });
       }
       
        
        
        //let newQuestions = res.data.Question;
        
      /*   let newQuestions = res.data.Answer;
        let newAnswer = res.data.Answer; */
        /* state.question_data.Question.push({...newQuestions });
        console.log(res.data.Answer.length);
        for (let i = 0; i < res.data.Answer.length; i++) {
            let newAnswer = res.data.Answer;
            console.log(newAnswer);
            state.question_data.Answer.push({...newAnswer });
        }
 */
       

       
        
        //return res.status;
    },

};
const mutations = {
    //CREATE_SUB_MODULE: (state, sub_module) => (state.sub_module = sub_module),
    FETCH_QUESTIONS: (state, question_data) => (state.question_data = question_data),
};

export default {
    state,
    getters,
    actions,
    mutations
};