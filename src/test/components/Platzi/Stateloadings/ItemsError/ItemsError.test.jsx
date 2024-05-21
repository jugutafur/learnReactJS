import { render, screen, fireEvent } from '@testing-library/react';
import { ItemsError } from '../../../../../components/Platzi/Stateloadings/ItemsError/ItemsError';

describe('test by component <ItemsError />', () =>{
  test('component exist in case error', () =>{
    render(<ItemsError />);
    const ItemsErrorContent = screen.getByText(/Error al cargar2/);
    expect(ItemsErrorContent).toBeInTheDocument();
  });
});
