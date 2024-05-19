import Card from "./Card";
function Tours({tours, removeTourHandler}){
    return(
        <div className="container">
            <div>
                <h2 className="title"> Tour With Anish</h2>
            </div>
            <div className="cards">
                {
                    tours.map( (tour) =>{
                        return <Card {...tour} removeTourHandler={removeTourHandler}></Card>
                    })
                }
            </div>
        </div>
      

    );
}

export default Tours;