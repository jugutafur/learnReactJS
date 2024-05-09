import { render, screen, firEvent } from "@testing-library/react";
import { CreateToDoButton } from '../../components/CreateToDoButton/CreateToDoButton';

describe("<CreateToDoButton/>", ()=>{
    test("Exist2 button CreateToDoButton in the document", ()=>{
        render(<CreateToDoButton />);
        //const buttonElement2 = screen.getByText(/rtrtr/);
        //expect(buttonElement2).toBeInTheDocument();
    });
});