import { render, screen, fireEvent } from "@testing-library/react";
import Counter1 from '../../../Customhooks/Counter1';

describe("<Counter1/>", ()=>{
    test("Renders the Counter component", ()=>{
        render(<Counter1 />);
        //Asignar a variable lo que renderiza el componente bajo prueba
        const countElement = screen.getByText(/Count : /i);
        const buttonElement = screen.getByText(/Increment/i);

        //Esperar que dentro del Document este lo anterior
        expect(countElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });

    test("increments the count when button is Clicked", ()=>{
        render(<Counter1 />);

        const buttonElement = screen.getByText(/Increment/i)

        //Con fireEvent podemos verificar eventos en este caso el evento click
        fireEvent.click(buttonElement);//Despues de que se presente un click 
        const countElement = screen.getByText(/Count : 1/i);

        expect(countElement).toBeInTheDocument();
    });
});