import './TailedBeastdescription.css';

function TailedBeastdescription({data:{TaiedBeast,Description,Jinchuriki}}){
    return (
        <div className="container">
          <div className="tailed-beast">
            <img src= {TaiedBeast.image} />
            <h3>{TaiedBeast.name}</h3>
          </div>
          <div className="description">
            <h2>{Description.Title}</h2>
            <p>{Description.para}</p>
          </div>
          <div className="jinchuriki">
            <h3>{Jinchuriki.name}</h3>
            <img src={Jinchuriki.image} />
          </div>
        </div>
    );
}

export default TailedBeastdescription;