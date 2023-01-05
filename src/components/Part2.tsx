import Foto from "../assets/images/Foto1.png"

function Part2(){
    return(
        <div className="flex flex-col lg:flex-row items-center justify-between px-56 py-32 space-x-5">
            <div>
                <img src={Foto} className="border-b-4 border-[#32274B]"></img>
            </div>
            <div className="md:w-8/12 lg:w-6/12">
                <div className="flex flex-col space-y-2 mt-10">
                    <a className="text-4xl lg:text-5xl text-[#DACCC5]">Sobre mim</a>
                    <a className="text-lg lg:text-xl font-semibold text-[#DACCC5]">Arapiraca, Alagoas</a>
                    <a className="text-lg lg:text-xl text-[#DACCC5]">Sou Erivaldo Cavalcante e sempre gostei de tecnologia, o que contribuiu para minha decisão de trilhar o caminho da programação e a ser um entusiasta de design. Possuo experiência em Desenvolvimento Web e Mobile. Atualmente faço desde o design ao desenvolvimento de projetos, Sejam eles Web ou Mobile.</a>
                    <a className="text-lg lg:text-xl text-[#DACCC5]">Hoje utilizo tecnologias como ReactJS, React Native, Typescript, Javascript e estudo Node.js, para desenvolvimento. E para design utilizo o figma.</a>
                </div>
            </div>
        </div>

    )
}

export default Part2;