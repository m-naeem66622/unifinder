import React from 'react'
import { Link } from 'react-router-dom';

function Table(props) {
    return (
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Country</th>
                    <th scope="col">State/Province</th>
                    <th style={{ width: "1rem" }}></th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((u, i) => {
                    return (
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{u.name}</td>
                            <td>{u.country}</td>
                            <td>{u["state-province"] ? u["state-province"] : "-"}</td>
                            <td><Link to={`/university/${i + 1}/${u.domains[0]}`}>View</Link></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table