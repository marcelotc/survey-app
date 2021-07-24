import { Reducer } from 'redux';
    import { IFormSteps } from './types';

const INITIAL_STATE: IFormSteps = {
    step: 1
}

const formSteps: Reducer<IFormSteps> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return  { step: state.step + 1 };
        }
        case 'DECREMENT': {
            return  { step: state.step - 1 };
        }
        case 'SET-STEP': {
            const { step } = action.payload;
            return  { ...state, step: step };
        }
        default: {
            return state;
        }
    }
}

export default formSteps; 