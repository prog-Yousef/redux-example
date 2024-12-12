import { createSlice } from "@reduxjs/toolkit";

const savedCounter = sessionStorage.getItem("counter");

// Här bestämmer vi allt som vi vill spara i vårt state, kan vara ett objekt med flera olika egenskaper
const initialState = parseInt(savedCounter) || 0;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      // Första parametern är nuvarande state och andra parametern är ett objekt som innehåller det vi vill spara till vårt state
      console.log("State är: ", state);
      console.log("Action är: ", action);
      // Här finns vår logik för att uppdatera vårt state
      return state + action.payload; // Uppdatera vårt state
    },
    // Här kan vi lägga till fler reducers för att uppdatera vårt state ex. decrement
  },
});

export const { increment } = counterSlice.actions; // Skapa actions för vår reducer

export default counterSlice.reducer;
