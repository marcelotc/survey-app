import { ChangeEvent } from 'react'
import { Input } from '../../../../../shared/Input';
import { MultiSelect } from '../../../../../shared/MultiSelect';
import { 
    Label, 
    StepContainer, 
    ErrorMessage
} from '../styles';

interface FavoritesProps {
    surveyData: {
        book: string;
        colors: []
    };
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleChangeMultiSelect: (value: string) => void;
    formErrors: any;
}

export function Favorites({ handleChange, handleChangeMultiSelect, formErrors, surveyData }: FavoritesProps) {
    return (
        <StepContainer>
            <div>
                <Label>Favorite book</Label>
                <Input 
                    type="text"
                    name="book"
                    placeholder={surveyData.book}
                    value={surveyData.book}
                    onChange={handleChange} />
                {formErrors.book && (
                    <ErrorMessage>{formErrors.book}</ErrorMessage>
                )}
            </div>
            <div>
                <Label>Favorite Colors</Label>
                <MultiSelect
                   data-testid="colors-multiSelect"
                   value={surveyData.colors}
                   onChange={handleChangeMultiSelect}
                />
                {formErrors.colors && (
                    <ErrorMessage>{formErrors.colors}</ErrorMessage>
                )}
            </div>
        </StepContainer>
    )
}
