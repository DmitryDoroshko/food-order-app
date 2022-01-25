import { useReducer } from 'react';

const initialState = {
    enteredValue: "",
    isTouched: false
};

const userInputReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return { enteredValue: action.enteredValue, isTouched: state.isTouched };
    }
    if (action.type === 'BLUR') {
        return { isTouched: true, enteredValue: state.enteredValue, };
    }
    if (action.type === 'RESET') {
        return initialState;
    }
    return initialState;
};

export default function useInput(validateFunction) {
    const [inputState, dispatchAction] = useReducer(userInputReducer, initialState);

    const isEnteredValueValid = validateFunction(inputState.enteredValue);
    const inputHasError = !isEnteredValueValid && inputState.isTouched;

    const handleInputChange = (event) => {
        dispatchAction({ type: "INPUT", enteredValue: event.target.value });
    };

    const handleInputBlur = () => {
        dispatchAction({ type: "BLUR" });
    };

    const reset = () => {
        dispatchAction("RESET");
    };

    return {
        enteredValue: inputState.enteredValue,
        isEnteredValueValid,
        inputHasError,
        handleInputChange,
        handleInputBlur,
        reset
    };
};