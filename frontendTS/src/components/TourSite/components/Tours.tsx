import Card from "./Card"
import "./Tours.css"
function Tours({tours,removeTour}:{tours:{id:number,name:string,info:string,image:string,price:string}[],removeTour:(id:number)=>void}) {
    return (
        <div className="">
            <div className=" mx-auto">
                <h2 className="head m-auto my-4">Plan with love</h2>
            </div>

            <div className="grid grid-cols-3 gap-3 max-w-[1200px] m-auto">
                {
                    tours.map((tour)=><Card key={tour.id} {...tour} removeTour={removeTour}></Card>)
                }
            </div>
        </div>
    )
}

export default Tours