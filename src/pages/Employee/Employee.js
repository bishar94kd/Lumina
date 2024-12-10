import React, {useState,useEffect} from "react";

import TestComponentsPage from '../../components/Employee/TestComponentsPage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Topic from '../../components/Employee/Topic'
import Blacktable from '../../components/Employee/Blacktable';
import Section from '../../components/Employee/Section'
import EmployeeAccount from '../../pages/Employee/EmployeeAccounts'


const Employee=()=> {
    const form = () => {
        const popupform = document.getElementById("popupform");
        popupform.style.display = "block";
        popupform.style.opacity = "100%";
        const page = document.getElementById("page");
        page.style.opacity = "20%";
    };
    
    return (
        <div>
        <div id="page">
        
        <Container fluid>
        <Row style={{display:"flex", maxWidth:"100%"}}>
         <Col sm={4}>       
       <TestComponentsPage></TestComponentsPage>
       </Col>
       <Col sm={8}>
        <Section></Section>
        <br/>
        
        
        <Topic></Topic>
        <Blacktable></Blacktable>
       
       </Col>
       </Row>
       </Container>
       
        </div>
        <div id="popupform">
         <EmployeeAccount></EmployeeAccount>
        </div>
        </div>
    );
    }
    export default Employee;