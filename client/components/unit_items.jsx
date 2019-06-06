import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

function UnitItems(props){
    console.log('the units are: ', props)
    if (props.unitList.length < 1){
        return <h2>No units to display</h2>
    }
    const list = props.units.map(unit=>(
        <Row>
            <Card key={unit.id} >
                <CardImg top src={unit.image} />
                <CardBody>
                    <CardTitle></CardTitle>
                </CardBody>
            </Card>
        </Row>
    ))
};

export default UnitItems;