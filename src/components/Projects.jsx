import { useState } from "react"
import { AppConfig } from "./AppConfig"
import { SmallCard, BigCard } from "./Card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Projects() {
    const [projectsState, setProjects] = useState(
        AppConfig.projects.map((project) => ({ ...project, open: false }))
      );
      const [openedCard, setOpenedCard] = useState(null);
    
      function handleOpenCard(index) {
        if (openedCard === index) {
          setOpenedCard(null);
        } else {
          setOpenedCard(index);
        }
      }


    return (
        <div className="flex flex-wrap justify-center items-center">
            {projectsState.map((project, index) => (
                <>
                    {openedCard === index ? (
                        <div onClick={() => handleOpenCard(index)} className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out">
                            <BigCard project={project} />
                        </div>
                    ) : (
                        <div onClick={() => handleOpenCard(index)} className={`transition-all duration-300 ease-in-out relative w-full max-w-sm mx-auto my-4 p-4 rounded-lg hover:bg-violet-400 cursor-pointer shadow-md`}>
                            <SmallCard project={project} />
                        </div>
                    )}
                </>
            ))}
      </div>
    )
}

export { Projects }