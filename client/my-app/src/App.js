import './App.css';
import post from "./post"; 
import header from "./header"; 
function App() {
  return (
    <Routes>
      <Route index element={<main>
       <header/> 
        <post/>
        <post/> 
        <post/>
    </main>}/>
    <Route path={'/login'} element={
      <div>login</div>
    }/>
    </Routes>
    
  );
}

export default App;
