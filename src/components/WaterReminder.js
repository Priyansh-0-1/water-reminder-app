import React, { useState } from 'react';

function WaterReminder() {
  const [waterIntake, setWaterIntake] = useState(0);

  const logWaterIntake = () => {
    setWaterIntake(waterIntake + 1);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Water Intake</h2>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={logWaterIntake}
      >
        Log Water Intake
      </button>
      <p className="mt-4">Total water intake: {waterIntake} glasses</p>
    </div>
  );
}

export default WaterReminder;
