import HeroesList from './HeroesList/HeroesList';
import HookSwitcher from './Switcher/Switcher';

const heroesArray = [
  { imgName: '1', active: true, x: 1, y: 1 },
  { imgName: '2', active: false, x: 2, y: 1 },
  { imgName: '3', active: false, x: 3, y: 1 },
  { imgName: '4', active: false, x: 4, y: 1 },
  { imgName: '5', active: false, x: 5, y: 1 },
  { imgName: '6', active: false, x: 1, y: 2 },
  { imgName: '7', active: false, x: 2, y: 2 },
  { imgName: '8', active: false, x: 3, y: 2 },
  { imgName: '9', active: false, x: 4, y: 2 },
  { imgName: '10', active: false, x: 5, y: 2 },
  { imgName: '11', active: false, x: 1, y: 3 },
  { imgName: '12', active: false, x: 2, y: 3 },
  { imgName: '13', active: false, x: 3, y: 3 },
  { imgName: '14', active: false, x: 4, y: 3 },
  { imgName: '15', active: false, x: 5, y: 3 },
];

export const App = () => {


  return (
    <div>
       <HookSwitcher/>
      <HeroesList heroes={heroesArray}></HeroesList>
    </div>
  );
};
