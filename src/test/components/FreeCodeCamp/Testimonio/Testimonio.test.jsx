import { render, screen, firEvent } from "@testing-library/react";
import Testimonio from "../../../../components/FreeCodeCamp/Testimonio/Testimonio";

describe('Test by component <Testimonio />', () =>{

  test('Exist component in the document', ()=>{
    render(
      <Testimonio 
      name = 'nameTest'
      city = 'cityTest'
      imagen = 'Uno'
      profession = 'professionTest'
      company = 'companyTest'
      testimonio = 'bla bla bla' />
      );
  });

  test('existen Elemte in the document', ()=>{
    render(
      <Testimonio 
      name = 'nameTest'
      city = 'cityTest'
      imagen = 'Uno'
      profession = 'professionTest'
      company = 'companyTest'
      testimonio = 'bla bla bla' />
    );
    const nameContent = screen.getByText(/nameTest/);
    const cityContent = screen.getByText(/cityTest/);
    const professionContent = screen.getByText(/professionTest/);
    const companyContent = screen.getByText(/companyTest/);
    const testimonioContent = screen.getByText(/bla bla bla/);
    expect(nameContent).toBeInTheDocument();
    expect(cityContent).toBeInTheDocument();
    expect(professionContent).toBeInTheDocument();
    expect(companyContent).toBeInTheDocument();
    expect(testimonioContent).toBeInTheDocument();
  });
});