import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom'
import App from '../App';
import CreateList from '../Views/CreateList';
import EditList from '../Views/EditList';
import BestCars from '../Views/BestCars';
import Home from '../Views/Home';
import MyBestCars from '../Views/MyBestCars';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('All Components', () => {
  it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
  
    // render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<App />, div);
  
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

  it('CreateList', () => {
    const div = document.createElement('div');

    ReactDOM.render(<CreateList />, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it('GreatestPlayers', () => {

    const div = document.createElement('div');
  
    
    ReactDOM.render(<BestCars />, div);
  
   
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('EditList', () => {
  //   // first create a DOM element to render the component into
  //   const div = document.createElement('div');
  
  //   // render the component, this is the actual test, if something is wrong it will fail here
  //   ReactDOM.render(<EditList />, div);
  
  //   // clean up code
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  
  it('Home', () => {
    
    const div = document.createElement('div');
  
    
    ReactDOM.render(<Home />, div);
  
    
    ReactDOM.unmountComponentAtNode(div);
  });

  it('MyGreatestPlayers', () => {
    
    const div = document.createElement('div');
  
    
    ReactDOM.render(<MyBestCars />, div);
  
    ReactDOM.unmountComponentAtNode(div);
  });
} 
);


