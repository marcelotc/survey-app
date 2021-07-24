export function incrementStep() {
    return {
        type: 'INCREMENT',
    }
}  

export function decrementStep() {
    return {
        type: 'DECREMENT',
    }
}  

export function setStep(step: number) {
    return {
        type: 'SET-STEP',
        payload: {step}
    }
}  