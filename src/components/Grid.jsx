import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import "../css/grid.css";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";

function Grid(props) {
  const [pageLimit, setPageLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(1);

  React.useEffect(() => {
    setLastPage(Math.ceil(props.data.length / pageLimit));
  }, [pageLimit, props.data]);

  const genrateButton = () => {
    const buttons = [];
    const start = page - 2 >= 1 ? page - 2 : 1;
    const end = page + 2 <= lastPage ? page + 2 : lastPage;
    for (let i = start; i <= end; i++) {
      buttons.push(i);
    }
    console.log(buttons);
    return buttons.map((e) => (
      <button
        className={e === page ? "btn currentPage" : "btn"}
        onClick={() => setPage(e)}
      >
        {e}
      </button>
     
    ));
    // return (
    //   <>
    //     <button className="btn currentPage" onClick={() => setPage(1)}>
    //       1
    //     </button>
    //     <button className="btn" onClick={() => setPage(2)}>
    //       2
    //     </button>
    //     <button className="btn" onClick={() => setPage(3)}>
    //       3
    //     </button>
    //     <button className="btn" onClick={() => setPage(4)}>
    //       4
    //     </button>
    //     <button className="btn" onClick={() => setPage(5)}>
    //       5
    //     </button>
    //   </>
    // );
  };

  const gendrateHead = (data) => {
    // console.log(data)
    console.log(Object.keys(data));
    let headingKey = Object.keys(data);
    // explain the line number 18
    // return headingKey.map((e) => {
    //   return <th>{e}</th>;
    // });
    return headingKey.map((e) => <th key={e}>{e}</th>);
    // another way to write the code
    // return (
    //   <>
    //     <th>PtId</th>
    //     <th>Id</th>
    //     <th>Name</th>
    //     <th>Email</th>
    //     <th>Body</th>
    //   </>
    // );
  };

  const gendrateData = (data) => {
    let dataValue = Object.values(data);
    return dataValue.map((e) => <td>{String(e)}</td>);
  };

  const gendrateBody = (data) => {
    // return <tr>{gendrateData(comments[1])}</tr>;

    let start = (page - 1) * pageLimit;
    let end = start + pageLimit;
    data = data.slice(start, end);
    return data.map((e) => <tr>{gendrateData(e)}</tr>);
  };

  return (
    <div>
      <div className="grid-form">
        <div>
          <button className="btn" onClick={() => setPage(1)}>
            First
          </button>
          <button
            className="btn"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            <GrLinkPrevious className="iconPrev" />
            Prev
          </button>
          {genrateButton()}
          <button
            className="btn"
            onClick={() => setPage(page + 1)}
            disabled={page === lastPage}
          >
            Next
            <GrLinkNext className="iconNext" />
          </button>
          <button className="btn" onClick={() => setPage(lastPage)}>
            Last
          </button>
          {/* <button className="btn" onClick={() => setPage(lastPage)}>
            <MdArrowDropDown className="iconDrop" size={25} />
          </button> */}
          <select
            style={{ height: 30}}
            value={pageLimit}
            onChange={(e) => setPageLimit(parseInt(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>
      <table className="tbl">
        <thead>
          <tr>{gendrateHead(props.data[0])}</tr>
        </thead>
        <tbody>
          {gendrateBody(props.data)}

          {/* <tr>
            <td className="postId">1</td>
            <td className="id">1</td>
            <td className="name">Nandhini</td>
            <td className="email">NandhiniVaradhan@gmail.com</td>
            <td className="body">hello</td>
          </tr>
          <tr>
            <td className="postId">2</td>
            <td className="id">2</td>
            <td className="name">Janani</td>
            <td className="email">Janani@gmail.com</td>
            <td className="body">Hello World</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;
