import React from 'react'
import { useListContext } from '../providers/ListProvider'
import { useParams } from 'react-router-dom'

function Individual() {
    const { list } = useListContext()
    const params = useParams()
    const { index } = params;
    const university = list[index - 1];
    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center mb-4">University Information</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <table className="table table-dark">
                            <tbody>
                                <tr>
                                    <th scope="row">Name:</th>
                                    <td>{university.name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Country:</th>
                                    <td>{university.country}</td>
                                </tr>
                                <tr>
                                    <th scope="row">State/Province:</th>
                                    <td>{university["state-province"]?university["state-province"]:"Nil"}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Domains:</th>
                                    <td>
                                        <ul className="list-unstyled">
                                            {university.domains.map((domain,i) => <li key={i}><a target='_blank' href={domain}>{domain}</a></li>)}
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Web Pages:</th>
                                    <td>
                                        <ul className="list-unstyled">
                                        {university.web_pages.map((web_page, i) => <li key={i}><a target='_blank' href={web_page}>{web_page}</a></li>)}
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Alpha Two Code:</th>
                                    <td>{university.alpha_two_code}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Individual