import { IFormData } from './types';

export function setFormData(data: IFormData) {
    return {
        type: 'SET-DATA',
        payload: {data}
    }
}  