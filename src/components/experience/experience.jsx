// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

// Recebe os parâmetros passadados para o Componenet na variável props
const Experience = (props) => (
    <section>
    <Card>
        <Row>
            <Col s={2} m={2}>
                <img src={props.avatar} className="circle responsive-img" alt={"Logo da Empresa"} />
                { props.name }
            </Col>

            <Col s={10} m={10}>
                <p><b>{props.title} na empresa {props.company}</b></p>
                <p>{props.description}</p>
            </Col>
        </Row>
    </Card>
        <div>

        </div>
    </section>
);

export default Experience;