import { AppConfig } from "./AppConfig"

function Header() {
    return (
        <h1 className="border-b-2 border-slate-700 bg-violet-200 text-slate-700 text-6xl py-4 text-center">{AppConfig.name}</h1>
    )
}

export { Header }