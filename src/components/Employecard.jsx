// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaUserAlt } from "react-icons/fa";
import "../css/employe.css";

function Employecard(props) {
  return (
    //   <div className="card">
    //     <div class="img-user">
    //       {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
    //       <FaUserAlt size={140} color="#750541" />
    //     </div>
    //     <div id="txt1">{props.name}</div>
    //     <div id="role">
    //       <u>__</u>Web Developer<u>__</u>
    //     </div>
    //     <div className="data">
    //       <div className="names">ID :</div>
    //       <div className="values">{props.id}</div>
    //     </div>
    //     <div className="data">
    //       <div className="names">DEGREE :</div>
    //       <div className="values">BCA</div>
    //     </div>
    //     <div className="datas">
    //       <div className="names">DOB :</div>
    //       <div className="values">08/12/1999</div>
    //     </div>
    //     <div className="datas">
    //       <div className="names">PHONE:</div>
    //       <div className="values">7338807758</div>
    //     </div>
    //     <div className="datas">
    //       <div className="names">EMAIL:</div>
    //       <div className="values">nandhini@gmail.com</div>
    //     </div>
    //     <div>
    //       <button>
    //         {props.btnTxt}
    //       </button>
    //     </div>
    //   </div>

    //    <div id="page">
    <div class="empcontainer">
      {/* <img class="img" src="./asset/user.jpg" />  */}
      <div class="img-user">
        <FaUserAlt size={140} color="#750541" />
      </div>
      <div class="box">
        <div class="name">{props.name}</div>
        {/* <button type="button" onClick={() => props.btnfn()}>
          {props.btnTxt}
        </button> */}

        <button
          type="button"
          onClick={
            props.data ? () => props.btnfn(props.data) : () => props.btnfn()
          }
        >
          {props.btnTxt}
        </button>
      </div>
      <div class="id">{props.id}</div>
      {/* <div class="age">{props.age}</div> */}
    </div>
    //   </div>
  );
}

export default Employecard;
