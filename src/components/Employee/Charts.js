import React, {useEffect, useState, useRef} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Line,Pie } from 'react-chartjs-2';
//import '../styles/charts.css';
import Card from 'react-bootstrap/Card';

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

//ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
ArcElement,
Title,
Tooltip,
Legend
);

const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Example months
  datasets: [
    {
      label: 'Donations over Time',
      data: [300, 400, 450, 600, 700, 800], // Example donation data
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
  ],
};

// Options for Line Chart
const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Donation Trends',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Data for Pie Chart
const pieChartData = {
  labels: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'], // Blood types
  datasets: [
    {
      label: 'Blood Donations by Type',
      data: [25, 10, 30, 15, 20, 10, 5, 5], // Example blood type donations
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(199, 199, 199, 0.6)',
        'rgba(63, 81, 181, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(199, 199, 199, 1)',
        'rgba(63, 81, 181, 1)',
      ],
      borderWidth: 1,
    },
  ],
};




// Line chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Donation Trends',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const Dashboad=()=> {
    return (
        
            <div style={{marginLeft:'3%'}}>
    <Row style={{display:"flex"}}>
       
    <Col>
    
    <Card style={{ width:'400px' ,height:'270px', borderRadius:'20px', backgroundColor: 'rgba(0,0,0,0.8)',marginRight:"20px"}}>
      <Card.Body>
      <Line data={lineChartData} options={lineChartOptions} />
      
      </Card.Body>
    </Card>
    

    </Col>

    <Col>
    
    <Card style={{ width:'400px' ,height:'270px', borderRadius:'20px',backgroundColor: 'rgba(0,0,0,0.8)'}}>
      <Card.Body>
      <Pie data={pieChartData} style={{height:'100px'}}/>
        
    
      </Card.Body>
    </Card>
    

    </Col>
   
    </Row>

    </div>
        
    );
}
export default Dashboad;