type DestinationData = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};
type CrewData = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
};

type TechnologyData = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

type Data = {
  destinations: DestinationData[];
  crew: CrewData[];
  technology: TechnologyData[];
};

export type { DestinationData, CrewData, TechnologyData, Data };
