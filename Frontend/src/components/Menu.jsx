import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/menu.css";
import Category from "./Category";
import axios from 'axios'
import { useEffect } from "react";

const Menu = ()  => {

    const [products,setProducts]=useState({});

    const fetchFromApi = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/products");
            return response.data;  
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    useEffect(() => {
        fetchFromApi().then((data)=>{setProducts(data)})
    }, []);

return (
<div className="menu" >

    <div className="bg-dark text-white text-center sliding-bar p-2 ">
        welcome to chicken george,use a cupoon code for discount 🚀
    </div>
    <Container className="menu-section">
        <Row>
            <Col xs={3} className="sticiky-sidebar" id="noScrolldiv">
            {/* Fixed Sidebar Navigation */}
            <ul>
                <li><a href="#fresh-chicken">Fresh chicken</a></li>
                <ul>
                    <li><a href="#raw-chicken">Raw chicken</a></li>
                    <li><a href="#crumbed-chicken">Crumbed chicken</a></li>
                    <li><a href="#marinated-chicken">Marinated-chicken</a></li>
                </ul>
                <li><a href="#cooked-chicken">Cooked Chicken</a></li>
                <ul>
                    <li><a href="#chicken">Chicken</a></li>
                    <li><a href="#combos">Combos</a></li>
                    <li><a href="#drinks">Drinks</a></li>
                    <li><a href="#sides">Sides</a></li>
                    <li><a href="#others">Others</a></li>
                </ul>
            </ul>
        
            </Col>
            <Col xs={9}>
            {/* Scrollable Menu Content */}
        <div className="scroll-content ">

            <h5 >Fresh Chicken</h5>
            <p id="fresh-chicken">Our fresh chicken is naturally raw, expertly prepared to ensure top quality and perfect </p>

            <h5 id="raw-chicken">Raw Chicken</h5>
            <Category items={products.rawChicken} />
            <h5 id="crumbed-chicken">Crumbed Chicken</h5>
            <Category items={products.crumbedChicken}/>
            <h5 id="marinated-chicken">Marinated Chicken</h5>
            <Category items={products.marinatedChicken} /> 

            <h5 >Cooked Chicken</h5>
            <p id="cooked-chicken">This is cooked chicken.</p>
            
            <h5 id="chicken">Chicken</h5>
            <Category items={products.cooked} categoryid={"chicken"}/>
            <h5 id="combos">Combos</h5>
            <Category items={products.combo}/>

            <h5 id="drinks">Drinks</h5>
            <Category items={products.drinks} />

            <h5 id="sides">Sides</h5>
            <Category items={products.sides} /> 
            <h5 id="others">Others</h5>
            <Category items={products.others}/> 
            </div>
            </Col>
        </Row>
    </Container>
</div>

    
);
};

export default Menu;
