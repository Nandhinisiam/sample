import Employecard from "../components/Employecard";
import "../css/employedetail.css";
import { useNavigate } from "react-router-dom";

function EmployeDetail() {
  let navigate = useNavigate();

  let employe = {
    Name: "Aurora",
    Age: 53,
    Email: "ante.blandit@disparturient.ca",
    "Date of joining": "10/06/2019",
    "Phone number": "1628101902299",
    Street: "493 Iaculis Rd.",
    City: "Lewiston",
    Zip: "42591-180",
    Region: "Maine",
    Country: "Sudan",
    Info: "est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia",
    EmployeeID: 101,
  };

  if (sessionStorage.getItem("emp")) {
    employe = JSON.parse(sessionStorage.getItem("emp"));
  }

  const back = () => {
    // alert("back");
    navigate("/employelist");
  };

  return (
    <div className="equal-height-container">
      <div className="first">
        <Employecard
          name={employe.Name}
          id={employe.EmployeeID}
          btnfn={back}
          btnTxt="Back"
        ></Employecard>
      </div>
      <div className="second">
        <table className="table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{employe.Name}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{employe.Age}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{employe.Email}</td>
            </tr>
            <tr>
              <th>Date of joining</th>
              <td>{employe["Date of joining"]}</td>
            </tr>
            <tr>
              <th>Phone number</th>
              <td>{employe["Phone number"]}</td>
            </tr>
            <tr>
              <th>Street</th>
              <td>{employe.Street}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{employe.City}</td>
            </tr>
            <tr>
              <th>Zip</th>
              <td>{employe.Zip}</td>
            </tr>
            <tr>
              <th>Region</th>
              <td>{employe.Region}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{employe.Country}</td>
            </tr>
            <tr>
              <th>Info</th>
              <td>{employe.Info}</td>
            </tr>
            <tr>
              <th>EmployeeID</th>
              <td>{employe.EmployeeID}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeDetail;
