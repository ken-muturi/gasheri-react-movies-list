import React, { useState, useEffect } from "react";

const apiUrL = "http://localhost:4000/api";

const Index = () => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${apiUrL}/movies`).then((res) => res.json());
      setmovies(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="pagetitle">
        <h1>Blank Page</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">Pages</li>
            <li className="breadcrumb-item active">Blank</li>
          </ol>
        </nav>
      </div>
      <section className="section">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">movielist</h5>
            <table className="table table-hover  table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">title</th>
                  <th scope="col">reqs</th>
                  <th scope="col">status</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie, index) => {
                  return (
                    <tr>
                      <th scope="row">{++index}</th>
                      <td>{movie.title}</td>
                      <td>{movie.reqs}</td>
                      <td>{movie.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
