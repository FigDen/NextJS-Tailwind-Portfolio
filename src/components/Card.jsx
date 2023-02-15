import Image from "next/image"

function SmallCard(props) {
    return (
        <>
            <div>
                <h1 className="text-slate-900 font-bold">{props.project.name}</h1>
                {/* <i class="fa-solid fa-up-right-and-down-left-from-center"></i> */}
            </div>
            <Image
                src={props.project.image} 
                alt={`${props.project.name} picture`}
                width={300}
                height={300}
            />
            {/* <p className={`${detailsHidden}`}>{project.link}</p> */}
        </>
    )
}

function BigCard(props) {
    return (
        <>
            <div className="w-full max-w-screen-lg mx-auto my-4 rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                    <Image
                        src={props.project.image}
                        alt={`${props.project.name} picture`}
                        width={900}
                        height={900}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                        <h2 className="text-4xl font-bold text-white mb-2">{props.project.name}</h2>
                        <p className="text-xl text-white">{props.project.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export { SmallCard, BigCard }