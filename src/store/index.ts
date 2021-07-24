import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { IFormSteps } from './modules/formSteps/types';
import { IFormData } from './modules/formData/types';

export interface IState {
    formSteps: IFormSteps;
    formData: IFormData;
}

const store = createStore(rootReducer);

export default store; 