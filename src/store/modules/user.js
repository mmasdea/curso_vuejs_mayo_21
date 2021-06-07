export default {
    state:{
        firstName:'',
        lastName:'',
        email:''
    },
    getters:{
        firstName(state){
            return state.firstName;
        },
        lastName(state){
            return state.lastName;
        },
        email(state){
            return state.email;
        }
    },
    mutations:{
        SET_FIRSTNAME(state,firstName){
            state.firstName = firstName;
        },
        SET_LASTNAME(state,lastName){
            state.lastName = lastName;
        },
        SET_EMAIL(state,email){
            state.email = email;
        }        
    },
    actions:{
        setFirstName({commit},firstName){
            commit('SET_FIRSTNAME',firstName);
        },
        setLastName({commit},lastName){
            commit('SET_LASTNAME',lastName);
        },
        setEmail({commit},email){
            commit('SET_EMAIL',email);
        }        
    }
    }
