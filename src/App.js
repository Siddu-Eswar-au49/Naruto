import "./App.css";
import TailedBeastdescription from "./TailedBeast/TailedBeastdescription";


function getData(){
  return [
      {
          TaiedBeast:{
              name:"Shukaku",
              image:"https://wallpapercave.com/wp/wp1999802.jpg"
          },
          Description:{
              Title:"one tailed beast",
              para:"Shukaku, more commonly known as the One-Tail, is one of the nine tailed beasts. It was last sealed within Gaara of Sunagakure, after being sealed in two other jinchūriki before him. Shukaku's most notable ability is its sand manipulation, using it as an effective weapon and shield."
          },
          Jinchuriki:{
              name:"Gara",
              image:"https://wallpaperaccess.com/full/4576238.jpg"
          }
      },
      {
          TaiedBeast:{
              name:"Matatabi",
              image:"https://wallpapercave.com/wp/wp2286508.png"
          },
          Description:{
              Title:"two tailed beast",
              para:"Matatabi, more commonly known as the Two-Tails, is one of the nine tailed beasts. It was last sealed within Yugito Nii of Kumogakure. As a tailed beast, Matatabi has an enormous supply of chakra that it can transfer to others and can create the Tailed Beast Ball. As its appearance"
          },
          Jinchuriki:{
              name:"Yugito Nii",
              image:"https://wallpapercave.com/wp/wp7609626.jpg"
          }
      }
]
};

function App() {
  let data = getData();
  return (
    <div className="App">
      <h1>Naruto tailed beasts and jinchurikies</h1>
      <main>
        {
          data.map((item,index) => <TailedBeastdescription key={index.toString()} data={item}/>)
        }
      </main>
      <footer>
        <p>Follow us at @Naruto in instagram, #Naruto in twitter</p>
      </footer>
    </div>
  );
}

export default App;
