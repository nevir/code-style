export interface Thing {
  name: string;
  score: number;
}

export function incrementThing(thing: Thing): Thing {
  return { ...thing, score: thing.score + 1 };
}
