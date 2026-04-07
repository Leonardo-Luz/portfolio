'use client'

import data from "@/data/personal-data.json"
import { useEffect, useState } from "react"

export function useProfile() {
  const [age, setAge] = useState(0)
  const [studyTime, setStudyTime] = useState(0)
  const [workTime, setWorkTime] = useState(0)

  useEffect(() => {
    const birthday = new Date(data.birthday.year, data.birthday.month - 1, data.birthday.date);
    const ageInMs = Date.now() - birthday.getTime();
    const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);

    const studyday = new Date(data["study-start"].year, 1, 1);
    const studyInMs = Date.now() - studyday.getTime();
    const studyInYears = studyInMs / (1000 * 60 * 60 * 24 * 365.25);

    const workday = new Date(data["work-start"].year, 1, 1);
    const workInMs = Date.now() - workday.getTime();
    const workInYears = workInMs / (1000 * 60 * 60 * 24 * 365.25);

    setAge(parseInt(ageInYears.toString(), 10));
    setStudyTime(parseInt(studyInYears.toString(), 10));
    setWorkTime(parseInt(workInYears.toString(), 10));
  }, []);

  return {
    ...data,
    age,
    studyTime,
    workTime
  }
}
