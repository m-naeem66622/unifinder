import React, { useState } from 'react'
import Table from './Table';
import Loader from './Loader';
import axios from 'axios';
import { useListContext } from '../providers/ListProvider';

function Showcase() {

    const { list, setList } = useListContext()
    const [loading, setLoading] = useState(false);
    const [inputData, setInputData] = useState({ name: "", country: "" })


    const handleOnSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        if (!inputData.name && !inputData.country) {
            return;
        }

        requestHandler();
    }

    const handleOnChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    const requestHandler = async () => {
        const esc = encodeURIComponent;
        const query = Object.keys(inputData)
            .map(function (k) {
                if (inputData[k]) {
                    return esc(k) + '=' + esc(inputData[k]);
                }
            }).filter(Boolean).join('&');

        const res = await axios.get('http://universities.hipolabs.com/search?' + query);

        setList(res.data);
        setLoading(false);
    }

    return (
        <>
            <main className="mt-4">
                <h2 className='text-center'>Let's Find Out Your Future</h2>
                <form onSubmit={handleOnSubmit} className='row g-3 mt-3'>
                    <strong>Note: At least one field is required.</strong>
                    <div className="col col-12 col-md-6">
                        <input type="text" className="form-control" placeholder="Enter University Name" aria-label="name" id="name" value={inputData.name} onChange={handleOnChange} name="name" />
                    </div>
                    <div className="col col-12 col-md-4">
                        <input type="text" className="form-control" placeholder="Enter Country" aria-label="country" id="country" value={inputData.country} onChange={handleOnChange} name="country" />
                    </div>
                    <div className="col col-12 col-md-2">
                        <button disabled={loading || !inputData.name && !inputData.country} type="submit" className="btn btn-primary mb-3 w-100">Let's Find</button>
                    </div>
                </form>
            </main>

            {loading && <Loader />}
            {(list.length !== 0 && !loading) && <Table data={list} />}
        </>
    )
}

export default Showcase