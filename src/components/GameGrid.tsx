import { useState } from "react";

interface GameResponse {
    count: number;
    results: Game[];
}

interface Game {
    id: number;
    name: string;
}

const GameGrid = () => {
    const [games, setGames] = useState()

    return <div>GameGrid</div>
}

export default GameGrid;