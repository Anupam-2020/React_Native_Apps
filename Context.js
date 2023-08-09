import { createContext, useState } from "react";

const FitnessContext = createContext();

const FitnessItems = ({ children }) => {
  const [completed, setCompleted] = useState([]);
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);

  return (
    <FitnessContext.Provider
      value={{
        completed,
        workout,
        calories,
        minutes,
        setCompleted,
        setWorkout,
        setCalories,
        setMinutes,
      }}
    >
      {children}
    </FitnessContext.Provider>
  );
};

export { FitnessContext, FitnessItems };
