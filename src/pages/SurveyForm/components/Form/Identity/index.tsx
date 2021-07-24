import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Select } from '../../../../../shared/Select';
import { Radio } from '../../../../../shared/Radio';
import { 
    Label, 
    StepContainer, 
    ErrorMessage
} from '../styles';

interface DetailsProps {
    surveyData: {
        age: string;
        gender: string;
    };
    handleChangeSelect: (value: string) => void;
    handleChangeRadio: (e: ChangeEvent<HTMLInputElement>) => void;
    formErrors: any;
}
export function Identity({ surveyData, handleChangeSelect, formErrors, handleChangeRadio}: DetailsProps)  {
    return (
        <StepContainer>
            <div>
                <Label>Age</Label>
                <Select 
                    id="age"
                    value={surveyData.age}
                    defaultValue={surveyData.age}
                    onChange={handleChangeSelect}
                />
                {formErrors.age && (
                    <ErrorMessage>{formErrors.age}</ErrorMessage>
                )}
            </div>
            <div>
                <Label>Gender</Label>
                <Radio 
                    name="gender"
                    value={surveyData.gender}
                    defaultValue={surveyData.gender}
                    onChange={handleChangeRadio}
                />
                {formErrors.gender && (
                    <ErrorMessage>{formErrors.gender}</ErrorMessage>
                )}
            </div>
        </StepContainer>
    )
}