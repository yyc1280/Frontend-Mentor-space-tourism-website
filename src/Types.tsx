type Destination = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};
type Crew = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
};

type Technology = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

type Data = {
  destinations: Destination[];
  crew: Crew[];
  technology: Technology[];
};

export type { Destination, Crew, Technology, Data };
