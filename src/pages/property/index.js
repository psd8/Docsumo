//Core
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//Components
import AddProperty from '../addProperty';
import Button from '../../components/Button';

//Styles
import style from "./property.scss";

export default function Property() {
  const [properties, setProperties] = useState([]);
  const [isShowAddPropertyForm, setIsShowAddPropertyForm] = useState(false);
  
  /******************* 
  @purpose : Component mount method for landing page
  @Parameter : {}
  @Author : Prashant
  ******************/
  useEffect(() => {
    //Fetch Peroperties
  },[]);

  /******************* 
  @purpose : Render property listing landing page
  @Parameter : {}
  @Author : Prashant
  ******************/
  return (
    <Container fluid>
      <Row>
        <Col lg={2} sm={2} className={style.sidebar}>
          Filter
        </Col>
        <Col lg={10}>
          <div className='w-25'>
            <Button  text="Add Property" onClick={() => setIsShowAddPropertyForm(visible => !visible)} />
          </div>
          <Col lg={8} sm={8}>
              No Records Found
          </Col>
        </Col>
      </Row>
      <AddProperty show={isShowAddPropertyForm} onHide={() => setIsShowAddPropertyForm(visible => !visible)} />
    </Container>
  );
}
