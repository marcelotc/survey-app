import { combineReducers } from 'redux';
import formSteps from '../modules/formSteps/reducer';
import formData from '../modules/formData/reducer';

export default combineReducers({
    formSteps,
    formData
})