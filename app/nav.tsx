export default function Nav() {
    return (
        <nav className="border-4 border-white">
            <p>THE PLANETS</p>
            <a className="px-2" href="/earth">Earth</a>
            <a className="px-2" href="/jupiter">Jupiter</a>
            <a className="px-2" href="/mars">Mars</a>
            <a className="px-2" href="/neptune">Neptune</a>
            <a className="px-2" href="/saturn">Saturn</a>
            <a className="px-2" href="/uranus">Uranus</a>
            <a className="px-2" href="/venus">Venus</a>
            <a className="px-2" href="/mercury">Mercury</a>
        </nav>
    )
}