import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Image } from 'antd';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;
function SingleBeer() {
    const params = useParams()
    const url = "https://ih-beers-api2.herokuapp.com/beers/"
    const [beer, setBeer] = useState([])
    useEffect(() => {
        async function getBeer() {
            try {
                const response = await axios.get(`${url}/${params.beerId}`)
                setBeer(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBeer()
    }, [])
    return (
        <>
            <div className='singleBeer'>
                <img src={beer.image_url} width="50" />
                <div className='flex'>
                    <h2>{beer.name}</h2>
                    <p className='text-gray attenuation'>{beer.attenuation_level}</p>
                </div>
                <div className='flex'>
                    <p className='text-gray'>{beer.tagline}</p>
                    <p>{beer.first_brewed}</p>
                </div>
                <p className='text-left'>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </div>
        </>
    )
}
export default SingleBeer