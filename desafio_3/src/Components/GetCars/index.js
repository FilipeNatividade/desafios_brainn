import { useStateApp } from "../../Providers/StatesApp";

const GetCars = () => {
  const { result } = useStateApp();
  



  return (
    <div>
      {
        result.map(item => (
          <div key={item.plate} style={{border:'2px solid red', margin:'15px 0'}}>
          <p>{item.image}</p>
          <br/>
          <p>{item.brandModel}</p>
          <br/>
          <p>{item.color}</p>
          <br/>
          <p>{item.plate}</p>
          <br/>
          <p>{item.year}</p>
          </div>
        ))
      }
    </div>
  );
};

export default GetCars;
