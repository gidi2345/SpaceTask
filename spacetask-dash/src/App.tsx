import './App.css';
import {useRequest} from "./useRequest.hook";
import RGHeader from "./components/Header";
import "antd/dist/antd.css";
import { ButtonType } from '../src/components/Button';
import ButtonSection from './components/ButtonsSection';
import Card from '../src/components/Card';
const headerActionsData = [
    {actionButton: {action: function x() {return 'y'}, title:'Join'}, type: ButtonType.default},
    {actionButton: {action: function x() {return 'y'}, title:'Signin'}, type: ButtonType.text},
    {actionButton: {action: function x() {return 'y'}, title:'Explore'}, type: ButtonType.text},
    {actionButton: {action: function x() {return 'y'}, title:'Become a seller'}, type: ButtonType.text}
].reverse();

const buttonsSectionActionsData = [
  {actionButton: {action: function x() {return 'y'}, title:'Nutrition'}, type: ButtonType.text},
  {actionButton: {action: function x() {return 'y'}, title:'Health'}, type: ButtonType.text},
  {actionButton: {action: function x() {return 'y'}, title:'Gym'}, type: ButtonType.text},
  {actionButton: {action: function x() {return 'y'}, title:'Fitness'}, type: ButtonType.text}
].reverse();

function App() {
 

  return (
    <div className="App">
    <RGHeader actions={headerActionsData} />
      <ButtonSection actions={buttonsSectionActionsData} />
      <Card />
    </div>
  );
}

export default App;
