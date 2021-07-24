import { Reducer } from 'redux';
import { IFormData } from './types';

const INITIAL_STATE: IFormData = {
    formData: {
        age: "",
        book: "",
        colors: [],
        email: "",
        gender: "",
        name: "",
        step: 1,
        submited: false,
    }
}

const formData: Reducer<IFormData> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET-DATA': {
            const { data } = action.payload;
            return  { ...state,  formData: data}; 
        }
        default: {
            return state;
        }
    }
}

export default formData; 