import { Card, Col, Row } from 'antd';
import Beers from '../../assets/beers.png'
import NewBeer from '../../assets/new-beer.png'
import RandomBear from '../../assets/random-beer.png'
import { Link } from "react-router-dom";

const { Meta } = Card;
function HomePage() {
    return (
        <>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <Link to={'/all_beers'}>
                            <Card
                                hoverable
                                style={{ width: 400 }}
                                cover={<img alt="example" src={Beers} />}
                            >
                                <Meta title="All Beers" description="www.instagram.com" />
                            </Card>
                        </Link>
                    </Col>
                    <Col span={8}>
                        <Link to={'/new_beer'}>
                            <Card
                                hoverable
                                style={{ width: 400 }}
                                cover={<img alt="example" src={NewBeer} />}
                            >
                                <Meta title="New Beer" description="www.instagram.com" />
                            </Card>
                        </Link>
                    </Col>
                    <Col span={8}>
                        <Link to={'/'}>
                            <Card
                                hoverable
                                style={{ width: 400 }}
                                cover={<img alt="example" src={RandomBear} />}
                            >
                                <Meta title="Random Beer" description="www.instagram.com" />
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default HomePage