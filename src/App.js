import {Provider} from 'react-redux'
import {store} from './redux/store'
import Card from './components/Card';
function App() {
  return (
    <Provider store={store}>
<div className="App">
     <Card/>
    </div>
    </Provider>
    
  );
}

export default App;
