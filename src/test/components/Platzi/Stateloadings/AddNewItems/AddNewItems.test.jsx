import { render, screen, fireEvent } from '@testing-library/react'
import { AddNewItems } from "../../../../../components/Platzi/Stateloadings/AddNewItems/AddNewItems";

describe('test by component <AddNewItems />', () =>{
  test('test to check component', () =>{
    render(<AddNewItems />);
    const addNewItemsContent = screen.getByText(/Add new items2/);
    expect(addNewItemsContent).toBeInTheDocument();
  })
});