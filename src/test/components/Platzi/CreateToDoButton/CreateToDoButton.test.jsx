import { render, screen, fireEvent } from "@testing-library/react";
import { CreateToDoButton } from '../../../../components/Platzi/CreateToDoButton/CreateToDoButton';

describe('test by component <CreateToDoButton/>', ()=>{
  test('Exist2 button CreateToDoButton in the document', ()=>{
    render(<CreateToDoButton />);
    const buttonCreateToDoButton = screen.getByText('+');
    expect(buttonCreateToDoButton).toBeInTheDocument();
  });
/*
  test('click event works correctly', () =>{
    const onClickMock = jest.fn(); 
    render(<CreateToDoButton onClick={() => onClickMock} />);
    const buttonCreateToDoButton = screen.getByText('+');
    fireEvent.click(buttonCreateToDoButton);
    expect(onClickMock).toHaveBeenCalled();
});*/
});