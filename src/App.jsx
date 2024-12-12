import "./App.css";
import { useDispatch } from "react-redux";
import { increment } from "./reducers/counterReducer";

import ViewCounter from "./components/ViewCounter";

/**
 * Store - Sparar vårt state
 * Reducer - Som uppdaterar vårt state
 * Action - Som säger vad vi ska uppdatera
 * Dispatch - Som triggar en action
 */

function App() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(increment(1)); // Startar uppdatering av store med att kalla på den action vi vill köra och skicka med vad vi vill spara i vår store
  }

  return (
    <>
      <h1>Räknare</h1>
      <ViewCounter />
      <section>
        <button onClick={handleClick}>Öka med 1</button>
      </section>
    </>
  );
}

export default App;
