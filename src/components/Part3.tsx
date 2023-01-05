import RocketNfts from "../assets/images/RocketNfts.png"
import Digitaliza from "../assets/images/Digitaliza.png"
import RocketFlix from "../assets/images/Rocketflix.png"
import FEALVES from "../assets/images/FEALVES.png"

function Part3(){
    return(
        <div className="flex flex-col items-center justify-center py-20">
            <div className="">
                <a className="text-7xl text-[#DACCC5]">Projetos</a>
            </div>
            <div className="grid gap-8 grid-cols-2 w-7/12 mt-10 justify-center items-center">
                <div className="flex flex-col space-y-1 text-center">
                    <img src={RocketNfts} className="rounded shadow-md shadow-white hover:shadow-sm hover:shadow-white"></img>
                    <a className="text-xl font-semibold text-[#DACCC5]">Rocket NFTs</a>
                    <a className="text-lg text-[#DACCC5]">Landing page completa, feita para estudo, sobre NFTs.</a>
                </div>
                <div className="flex flex-col space-y-1 text-center">
                    <img src={Digitaliza} className="rounded shadow-md shadow-white hover:shadow-sm hover:shadow-white"></img>
                    <a className="text-xl font-semibold text-[#DACCC5]">Digitaliza</a>
                    <a className="text-lg text-[#DACCC5]">Site feito para e Digitaliza, empresa de Alagoas.</a>
                </div>
                <div className="flex flex-col space-y-1 text-center">
                    <img src={RocketFlix} className="rounded shadow-md shadow-white hover:shadow-sm hover:shadow-white"></img>
                    <a className="text-xl font-semibold text-[#DACCC5]">Rocket Flix</a>
                    <a className="text-lg text-[#DACCC5]">Aplicação web que escolhe filme aleatoriamente.</a>
                </div>
                <div className="flex flex-col space-y-1 text-center">
                    <img src={FEALVES} className="rounded shadow-md shadow-white hover:shadow-sm hover:shadow-white"></img>
                    <a className="text-xl font-semibold text-[#DACCC5]">App jogador caro</a>
                    <a className="text-lg text-[#DACCC5]">Site feito para e Digitaliza, empresa de Alagoas.</a>
                </div>
            </div>
        </div>
    )
}

export default Part3;
