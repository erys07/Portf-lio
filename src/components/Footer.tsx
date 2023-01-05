import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"

function Footer(){
    return(
        <div className="flex flex-row items-center justify-between p-10">
            <div className="flex flex-col">
                <a className="text-lg font-semibold text-[#DACCC5]">Email para contato: erivaldocavalcante010@gmail.com</a>
                <a className="text-lg font-semibold text-[#DACCC5]">Feito por Erivaldo Cavalcante</a>
            </div>
            <div className="flex flex-row space-x-2">
                <a href="https://github.com/erys07" className="text-6xl text-black"><AiFillGithub></AiFillGithub></a>
                <a href="https://www.linkedin.com/in/erivaldo-cavalcante-8618b3247/" className="text-6xl text-blue-600"><AiFillLinkedin></AiFillLinkedin></a>
            </div>
        </div>
    )
}

export default Footer;