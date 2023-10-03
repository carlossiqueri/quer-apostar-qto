import { Game } from "@prisma/client";

export type FinishedGame = Pick<Game, "homeTeamScore" | "awayTeamScore">;
