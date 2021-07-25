import { render, act, waitFor, screen, fireEvent } from "@testing-library/react";
import { Form } from '../pages/SurveyForm/components/Form/index';
import { Provider } from 'react-redux';
import store from '../store';

function setShowModal() {}

describe('Checking when user click next button in step 2 a required field error messages appear for age and gender', () => {
  it('click next button', async () => {
      const { getByTestId, debug } = render(
        <Provider store={store}>
          <Form setShowModal={setShowModal} />
        </Provider>
        );

        const button = getByTestId('next-btn');
        fireEvent.click(button);

        const button2 = getByTestId('next-btn2');
        fireEvent.click(button2);
       
        expect(await screen.findByText('Age cannot be blank')).toBeInTheDocument();
        expect(await screen.findByText('Gender cannot be blank')).toBeInTheDocument();
    });
});
