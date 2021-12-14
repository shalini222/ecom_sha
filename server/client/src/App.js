import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from './components/cart/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import DetailView from './components/ItemDetails/DetailView';
import NotFound from './components/NotFound';



function App() {
  return (
     <TemplateProvider>
                    <ContextProvider>
         <BrowserRouter>
      <Header/>
      <Box style={{marginTop: 54}}>
            <Switch>
              <Route exact path= '/' component={Home} />
              <Route exact path= '/Cart' component={Cart} />
              <Route exact path= '/product/:id' component={DetailView} />
                <Route component={NotFound} />
            </Switch>
          </Box>
    </BrowserRouter>
    </ContextProvider>
     </TemplateProvider>
  );
}

export default App;
