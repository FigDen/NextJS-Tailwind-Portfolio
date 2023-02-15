import { useState } from "react"
import { AppConfig } from "./AppConfig"
import { SmallCard, BigCard } from "./Card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Projects() {
    const projects = AppConfig.projects.map((project, index) => {
        return(
            {
                name: project.name,
                link: project.link,
                image: project.image,
                description: project.description,
                open: false
            }
        )
    }) 

    const [projectsState, setProjects] = useState(projects)
    const [openedCard, setOpenedCard] = useState(null)
    const [lastOpenedCard, setLastOpenedCard] = useState(null)

    function handleOpenCard(index) {
        if (openedCard === index) {
            const newProjects = projectsState.slice()
            newProjects[openedCard] = false
            console.log('closing card', openedCard)
            setOpenedCard(null)
        } else {
            console.log('opening card', index)
            const newProjects = projectsState.slice()
            newProjects[index].open = true
            if (openedCard !== null) {
                newProjects[openedCard] = false
                console.log('closing card', openedCard)
            }
            setOpenedCard(index)
        }
    }
    
    // function closeCards() {
    //     console.log('close cards')
    //     const newProjects = projectsState.map(project => {
    //         project.open = false
    //     })
    // }

    const renderProjects = projectsState.map((project, index) => {
        let detailsHidden = 'hidden transition-all opacity-0 duration-300 ease-in-out'
        let backgroundColor = 'bg-violet-300'
        let detailHeight = 'transition-all duration-500 ease-in-out overflow-hidden max-h-0'
        if (openedCard === index) {
            detailsHidden = 'transition-all opacity-100 duration-300 ease-in-out'
            backgroundColor = 'bg-violet-400'
            detailHeight = 'transition-all duration-500 ease-in-out overflow-hidden max-h-full'
        }
        return (
            <>
                {openedCard === index ? (
                    <>
                    <div onClick={() => handleOpenCard(index)} className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out">
                        <BigCard project={project} />
                    </div>
                    </>
                ) : (
                    <div onClick={() => handleOpenCard(index)} className={`transition-all duration-300 ease-in-out relative w-full max-w-sm mx-auto my-4 p-4 rounded-lg ${backgroundColor} hover:bg-violet-400 cursor-pointer shadow-md`}>
                        <SmallCard project={project} />
                    </div>
                )}
            </>


        )
    })
    return (
        <div className="flex relative flex-wrap border-b-2 border-slate-700">
            {renderProjects}
        </div>
    )
}

export { Projects }