import React from 'react';
import Testimonio from '../Testimonio/Testimonio';
import './FreeCodeCamp.css';
import { ClickCounter } from '../ClickCounter/ClickCounter';
import Calculadora from '../Calculadora/Calculadora';

export function FreeCodeCamp () {
  return (
    <div className='App'>
      <div className='container-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
        <Testimonio
          name = 'Shawn Wang'
          city = 'Singapore'
          imagen = 'Uno'
          profession = 'Software Engineer'
          company = 'Amazon'
          testimonio = 'Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.' />
          <Testimonio
          name = 'Sarah Chima'
          city = 'Nigeria'
          imagen = 'Dos'
          profession = 'Software Engineer'
          company = 'ChatDesk'
          testimonio = 'freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.' />
          <Testimonio
          name = 'Emma Bostian'
          city = 'Sweden'
          imagen = 'Tres'
          profession = 'Software Engineer'
          company = 'Spotify'
          testimonio = 'Ive always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.' />
      </div>

      <div className='container-FreeCodeCamp-clickCounter'>
        <ClickCounter />
      </div>

      <div className='Container-Calculadora'>
        <Calculadora />
      </div>
    </div>    
  );
}