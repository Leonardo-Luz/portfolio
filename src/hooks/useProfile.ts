'use client'

import data from "@/data/personal-data.json"
import { useEffect, useState } from "react"

export function useProfile() {
  const [age, setAge] = useState(0)

  useEffect(() => {
    const birthday = new Date(data.birthday.year, data.birthday.month - 1, data.birthday.date);
    const ageInMs = Date.now() - birthday.getTime();
    const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
    setAge(parseInt(ageInYears.toString(), 10));
  }, [data]);

  return {
    ...data,
    age
  }
}
