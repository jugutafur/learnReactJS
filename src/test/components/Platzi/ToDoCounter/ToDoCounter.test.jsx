import { render, screen, fireEvent } from '@testing-library/react';
import { ToDoCounter } from '../../../../components/Platzi/ToDoCounter/ToDoCounter'


describe('Test by component <ToDoCounter />', () =>{
    test('component exist', () => {
        render(<ToDoCounter 
            totalToDo={3}
            toDoCompleted={9}
        />)
        const toDoCompletedContent = screen.getByText(/Haz completado 9 de 3 ToDo/)
        expect(toDoCompletedContent).toBeInTheDocument();
    })
});