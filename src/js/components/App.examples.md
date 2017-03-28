You can edit this component below.

```
const {Provider} = require('react-redux');
const configureStore = require('../utils/configureStore').default;
const initialState = {
  app: {
    myName: 'Nancy',
  }
};
const store = configureStore({initialState});
<Provider store={store}>
	<App greeting="Hello React!"/>
</Provider>
```
