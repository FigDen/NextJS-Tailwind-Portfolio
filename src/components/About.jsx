import { AppConfig } from "./AppConfig";

function About() {
    const skills = AppConfig.skills.map((skill, index) => {
        return (
            <div className="bg-violet-400 m-2 rounded-md" key={index}>
                <h1 className="p-4">{skill}</h1>
            </div>
        )
    })
    return (
        <div className="">
            <h1 className="text-slate-700 text-5xl">Skills</h1>
            <div className="flex justify-evenly">{skills}</div>
        </div>
    )
}

export { About }