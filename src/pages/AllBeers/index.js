import { Image } from 'antd';
import { Col, Row } from 'antd';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import TopMenu from '../../components/Menu';

function AllBeers() {
    const url = "https://ih-beers-api2.herokuapp.com/beers"
    const [beers, setBeers] = useState([])
    useEffect(() => {
        async function fetchBeersAxios() {
            try {
                const response = await axios.get(url);
                setBeers(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchBeersAxios()
    }, [])
    async function handleChange(e) {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`);
            setBeers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <TopMenu></TopMenu>
            <h1>All Beers</h1>
            <input placeholder='Search' className='SearchInput' onChange={handleChange} />
            {beers.map(beer => {
                return (
                    <Row key={beer._id}>
                        <Col span={6}>
                            <Image
                                width={40}
                                src={beer.image_url}
                            />
                        </Col>
                        <Col span={18} align="start">
                            <Link to={`/single_beer/${beer._id}`}>
                                <h2>{beer.name}</h2>
                            </Link>
                            <p>{beer.description}</p>
                            <p><small><strong>Created by: </strong>{beer.contributed_by}</small></p>

                        </Col>
                    </Row>
                )
            })}

        </>
    )
}
export default AllBeers