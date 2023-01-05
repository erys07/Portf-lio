import Header from "../components/Header"
import Part1 from "../components/Part1"
import Part2 from "../components/Part2"
import Part3 from "../components/Part3"
import Part4 from "../components/Part4"
import Footer from "../components/Footer"

function Main(){
    return(
        <div>
            <div className="bg-[#32274B]">
                <div>
                    <Header></Header>
                </div>
                <div>
                    <Part1></Part1>
                </div>
            </div>
            <div className="bg-[#4E447F]">
                <Part2></Part2>
            </div>
            <div className="bg-[#32274B]">
                <Part3></Part3>
            </div>
            <div className="bg-[#4E447F]">
                <Part4></Part4>
            </div>
            <div className="bg-[#32274B]">
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Main;