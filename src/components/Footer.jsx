import App from "next/app"
import { AppConfig } from "./AppConfig"

function Footer() {
    return (
        <div className="">
            <h1>Contact Me</h1>
            <h1>{AppConfig.contact}</h1>
        </div>
        
    )
}

export { Footer }