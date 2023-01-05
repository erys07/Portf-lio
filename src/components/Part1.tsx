import Image from "../assets/images/Image.svg"

function Part1(){
    return(
        <div className="flex flex-col lg:flex-row items-center justify-between px-56 py-20">
            <div className="flex flex-col space-y-2 mb-10 lg:mb-0">
                <a className="text-[#DACCC5] text-3xl lg:text-4xl">Oi, eu sou</a>
                <a className="text-[#DACCC5] text-4xl font-semibold lg:text-5xl">Erivaldo Cavalcante.</a>
                <a className="text-[#DACCC5] text-3xl lg:text-4xl">Desenvolvedor Front-end e Mobile</a>
            </div>
            <div>
                <img src={Image} className="w-[32rem] mt-5 md:mt-0"></img>
            </div>
        </div>
    )
}

export default Part1;
