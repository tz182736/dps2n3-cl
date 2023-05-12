import  { useState } from "react";

// A custom hook to get and set data in local storage
function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store the value
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Get the value from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse and return the stored json or return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error, return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // A function to update the stored value
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function to handle previous state
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // If error, log it
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}

// A component that uses the custom hook
const App = () => {
  // Use the custom hook with key "name" and initial value ""
  const [name, setName] = useLocalStorage<string>("name", "");

  return (
    <div className="container">
      <h1>localStorage with React hooks</h1>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          aria-label="fullname"
        />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default App;
