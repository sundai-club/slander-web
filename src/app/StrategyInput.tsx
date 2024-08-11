import React, { useEffect, useState } from "react";
import { useAudioStore } from "~/app/AudioStore";

const StrategyInput = () => {
  const { strategy, setStrategy, setSelectedStrategy, selectedStrategy } =
    useAudioStore();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);

  const fetchStrategies = async () => {
    try {
      const response = await fetch("/api/strategy", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setStrategy(data.strategies || []);
      setSelectedStrategy(data.strategies[0]);
      setError(null);
    } catch (error) {
      setError(error.message);
      setStrategy([]);
    }
  };

  useEffect(() => {
    const fetchAndSetStrategies = async () => {
      await fetchStrategies();
    };
    fetchAndSetStrategies();
  }, []);

  return (
    <div>
      <select
        className="w-20 rounded-xl text-black"
        onChange={(e) => setSelectedStrategy(e.target.value)}
      >
        {strategy.length > 0 ? (
          strategy.map((strategy, index) => (
            <option key={index} value={strategy}>
              {strategy}
            </option>
          ))
        ) : (
          <option disabled>No strategies available</option>
        )}
      </select>
    </div>
  );
};

export default StrategyInput;
