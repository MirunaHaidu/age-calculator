import { useState, useEffect } from "react";

const AgeCalculator = ({ birthdate }) => {
  const [age, setAge] = useState({ years: null, months: null, days: null });

  const calculateAge = () => {
    const birthDate = new Date(birthdate);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && today.getDate() < birthDate.getDate())) {
      ageYears--;
      ageMonths += 12;
    }

    if (ageDays < 0) {
      ageMonths--;
      const previousMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      ageDays += new Date(previousMonth.getFullYear(), previousMonth.getMonth() + 1, 0).getDate();
    }

    setAge({ years: ageYears, months: ageMonths, days: ageDays });
  };

  useEffect(() => {
    if (birthdate) {
      calculateAge();
    }
  }, [birthdate]);

  return age;
};

export default AgeCalculator;
