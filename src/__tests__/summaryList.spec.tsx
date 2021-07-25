import { render, act, waitFor, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from '../pages/SurveyForm/components/Form/index';
import { Provider } from 'react-redux';
import store from '../store';

function setShowModal() {}

describe('Check if all the required fields(age, gender, favorite book and favorite color) are listed in a table', () => {
  it('summary table', async () => {
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

        const input = document.querySelector(
            `[data-testid='book-input']`
          ) as HTMLElement;
          userEvent.type(input, "lord of the rings");
          expect(screen.getByTestId("book-input")).toHaveValue("lord of the rings");

        const multiSelect = document.querySelector(
            `[data-testid='colors-multiSelect'] > .ant-select-selector`
          ) as HTMLElement;
    
        fireEvent.mouseDown(multiSelect);


        await waitFor(() => {
            return expect(
              document.querySelector(".ant-select-dropdown")
            ).toBeInTheDocument();
          });
  
        act(() => {
            fireEvent.click(document.querySelector(`[class="ant-select-item-option-content"]`) as Element)
        });

        const button3 = getByTestId('next-btn');
        fireEvent.click(button3);

        expect(screen.getByTestId('age')).toHaveTextContent('Youth');
        expect(screen.getByTestId('gender')).toHaveTextContent('Female');
        expect(screen.getByTestId('book')).toHaveTextContent('lord of the rings');
        expect(screen.getByTestId('colors')).toHaveTextContent('gold');
    });
});
