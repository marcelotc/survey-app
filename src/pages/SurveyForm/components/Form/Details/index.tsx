import { ChangeEvent } from 'react'
import { Input } from '../../../../../shared/Input';
import { 
    Label, 
    StepContainer, 
    ErrorMessage
} from '../styles';

interface DetailsProps {
    surveyData: {
        name: string;
        email: string;
    };
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    formErrors: any;
}

export function Details({ handleChange, surveyData, formErrors }: DetailsProps) {
    return (
        <StepContainer>
            <div>
                <Label>Name</Label>
                <Input
                    type="text"
                    name="name"
                    placeholder={surveyData.name}
                    value={surveyData.name}
                    onChange={handleChange} />
            </div>
            <div>
                <Label>Email</Label>
                <Input
                    type="email"
                    name="email"
                    placeholder={surveyData.email}
                    value={surveyData.email}
                    onChange={handleChange} />
                {formErrors.email && (
                    <ErrorMessage>{formErrors.email}</ErrorMessage>
                )}
            </div>
        </StepContainer>
    )
}

