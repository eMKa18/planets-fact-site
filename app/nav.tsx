import Link from "next/link";
import { PlanetData } from "./data";

export default function Nav({planets}: {planets: Array<PlanetData>}) {
    return (
        <nav className="border-4 border-white">
            <p>THE PLANETS</p>
            <ul>
                {planets.map((planet: any) => (
                    <li key={planet.name}>
                        <Link className="px-2" href={`/${planet.name}`}>{planet.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}