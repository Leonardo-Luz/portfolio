import rawData from "@/data/technologies.json";

interface TechnologyData {
  [technologyName: string]: {
    desc: {
      en: string;
      pt: string;
    };
    docs: string;
  };
}

const data = rawData as TechnologyData;

export function useTechnologies() {
  function getTechnologyByName(technology: string) {
    return data[technology];
  }

  return {
    ...rawData,
    getTechnologyByName,
  };
}
