import { Dispatch, SetStateAction } from 'react';
import { 
    TableWrapper,
    Table,
} from '../styles';
import { Button, message } from 'antd';

interface Props {
  surveyData: {
    name: "",
    email: "",
    age: "",
    gender: "",
    book: "",
    colors: []
  };
  setSurveyData: Dispatch<SetStateAction<Object>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export function Summary({surveyData, setSurveyData, setShowModal}:Props) {
  const handleSubmit = () => {
    setSurveyData({
      ...surveyData,
      submited: true
    })
  }

  const info = () => {
    message.info('Survey submited!');
    handleSubmit();
    setTimeout(() => {setShowModal(false);},1000)
  };

    return (
        <TableWrapper>
          <Table>
              <>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Favorite book</th>
                    <th>Favorite Colors</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr className="columns">
                      <td data-label="Name">{surveyData.name}</td>
                      <td data-label="Email">{surveyData.email}</td>
                      <td data-testid="age" data-label="Age">{surveyData.age}</td>
                      <td data-testid="gender" data-label="Gender">{surveyData.gender}</td>
                      <td data-testid="book" data-label="Favorite book">{surveyData.book}</td>
                      <td data-testid="colors" data-label="Favorite Colors">
                      {surveyData.colors.map((color: string) => (
                          <p key={color} style={{ color: color}}>{color}</p>
                      ))}
                      </td>
                    </tr>
                </tbody>
              </>
            </Table>
            <Button data-testid="submitForm" onClick={info}>SUBMIT</Button>
        </TableWrapper>
    )
}
