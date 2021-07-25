import { render, act, waitFor, screen, fireEvent } from "@testing-library/react";
import { Form } from '../pages/SurveyForm/components/Form/index';
import { Provider } from 'react-redux';
import store from '../store';

function setShowModal() {}

describe('Checking when user click next button in step 3 a required field error messages appear for book and colors', () => {
  it('click next button', async () => {
      const { container, getByTestId, debug } = render(
        <Provider store={store}>
          <Form setShowModal={setShowModal} />
        </Provider>
        );

        const button = getByTestId('next-btn');
        fireEvent.click(button);
       
        const select= document.querySelector(
          `[data-testid='age-select'] > .ant-select-selector`
        ) as HTMLElement;
  
        fireEvent.mouseDown(select);
  
        await waitFor(() => {
          return expect(
            document.querySelector(".ant-select-dropdown")
          ).toBeInTheDocument();
        });

        act(() => {
          fireEvent.click(document.querySelector(`[label="1"]`) as Element)
        });
      
        let radio = container.querySelector("[data-testid='gender-radio']");
        expect(radio).not.toBeNull();

         await waitFor(async () => {  
          let radioElement = radio as Element;
          act(() => {
            fireEvent.mouseDown(radioElement);
          })
          expect(await screen.findByText('Female')).toBeInTheDocument();
        });

        act(() => {
          fireEvent.click(screen.getByText('Female'));
        });
        
        fireEvent.click(button);

        const button2 = getByTestId('next-btn');
        fireEvent.click(button2);

        const button3 = getByTestId('next-btn2');
        fireEvent.click(button3);

        expect(await screen.findByText('Book cannot be blank')).toBeInTheDocument();
        expect(await screen.findByText('Colors cannot be blank')).toBeInTheDocument();
    });
});
