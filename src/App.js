import logo from './logo.svg';
import './App.css';
import {Button, Progress} from 'semantic-ui-react'

function App() {
  return (
    <div>
        <p> 안녕하세요1</p>
  <Button primary> 안녕하세요2 </Button>
  <Progress percent = {66} indicating/>
</div>
  );
}

export default App;
