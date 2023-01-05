import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { TbBrandJavascript } from "react-icons/tb"
import { GrReactjs } from "react-icons/gr"
import { SiTypescript } from "react-icons/si"
import { SiStyledcomponents } from "react-icons/si"
import { AiFillGithub } from "react-icons/ai"
import { FiFigma } from "react-icons/fi"
import { SiTailwindcss } from "react-icons/si"

function Part4(){
    return(
        <div className="flex flex-col items-center justify-center">
            <div className="mt-10">
                <a className="text-7xl text-[#DACCC5]">Habilidades</a>
            </div>
            <div className="grid grid-cols-5 gap-10 py-20">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-28 h-28 bg-white rounded">
                        <a className="text-7xl text-[#4E447F] hover:text-orange-600"><AiFillHtml5></AiFillHtml5></a>
                    </div>
                    <a className="font-semibold text-[#DACCC5]">HTML 5</a>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-28 h-28 bg-white rounded">
                        <a className="text-7xl text-[#4E447F] hover:text-blue-600"><DiCss3></DiCss3></a>
                    </div>
                    <a className="font-semibold text-[#DACCC5]">CSS 3</a>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-28 h-28 bg-white rounded">
                        <a className="text-7xl text-[#4E447F] hover:text-yellow-400"><TbBrandJavascript></TbBrandJavascript></a>
                    </div>
                    <a className="font-semibold text-[#DACCC5]">Javascript</a>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-28 h-28 bg-white rounded">
                        <a className="text-7xl text-[#4E447F] hover:text-blue-400"><GrReactjs></GrReactjs></a>
                    </div>
                    <a className="font-semibold text-[#DACCC5]">React JS</a>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-28 h-28 bg-white rounded">
                        <a className="text-7xl text-[#4E447F] hover:text-blue-400"><GrReactjs></GrReactjs></a>
                    </div>
                    <a className="font-semibold text-[#DACCC5]">React Native</a>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-28 h-28 bg-white rounded">
                        <a className="text-7xl text-[#4E447F] hover:text-pink-400"><SiStyledcomponents></SiStyledcomponents></a>
                    </div>
                    <a className="font-semibold text-[#DACCC5]">Styled Component</a>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-28 h-28 bg-white rounded">
                        <a className="text-7xl text-[#4E447F] hover:text-blue-500"><SiTypescript></SiTypescript></a>
                    </div>
                    <a className="font-semibold text-[#DACCC5]">Tailwind</a>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-28 h-28 bg-white rounded">
                        <a className="text-7xl text-[#4E447F] hover:text-black"><AiFillGithub>/</AiFillGithub></a>
                    </div>
                    <a className="font-semibold text-[#DACCC5]">Github</a>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-28 h-28 bg-white rounded">
                        <a className="text-7xl text-[#4E447F] hover:text-blue-400"><SiTailwindcss></SiTailwindcss></a>
                    </div>
                    <a className="font-semibold text-[#DACCC5]">Tailwind</a>
                </div>                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-28 h-28 bg-white rounded">
                        <a className="text-7xl text-[#4E447F] hover:text-green-500"><FiFigma></FiFigma></a>
                    </div>
                    <a className="font-semibold text-[#DACCC5]">Figma</a>
                </div>
            </div>
        </div>
    )
}

export default Part4;
