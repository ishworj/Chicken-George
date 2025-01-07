import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/menu.css";
import Category from "./Category";

const Menu = ()  => {
    const rawChicken = [
        {name:"Nepali khana",desc:"hello this is nep khana",price:"whole for &50",imgSrc:"/FreshChicken/breastfillets.jpg"},
        {name:"bangali khana",desc:"hello this is nep khana",price:"whole for &500",imgSrc:"/FreshChicken/legs.jpg"},
        {name:"bangali khana",desc:"hello this is nep khana",price:"whole for &500",imgSrc:"/FreshChicken/liver.jpg"},
        {name:"bangali khana",desc:"hello this is nep khana",price:"whole for &500",imgSrc:"/FreshChicken/maryland.jpg"},
        {name:"bangali khana",desc:"hello this is nep khana",price:"whole for &500",imgSrc:"/FreshChicken/mince.jpg"},
        {name:"bangali khana",desc:"hello this is nep khana",price:"whole for &500",imgSrc:"/FreshChicken/thighfillets.jpg"},
        {name:"bangali khana",desc:"hello this is nep khana",price:"whole for &500",imgSrc:"/FreshChicken/wholechicken.jpg"},

    ]

    const chicken = [
        {name: "Barbecue Chicken", desc: "hello this is barbecue chicken", price: "whole for $50", imgSrc: "/HotFood/barbique chicken.jpg"},
        {name: "Chicken Drumsticks", desc: "hello this is chicken drumsticks", price: "whole for $50", imgSrc: "/HotFood/Chicken-drumstics.jpg"},
        {name: "Chips", desc: "hello this is chips", price: "whole for $50", imgSrc: "/HotFood/chips.jpg"},
        {name: "Gravy", desc: "hello this is gravy", price: "whole for $50", imgSrc: "/HotFood/gravy.jpg"},
        {name: "Midwings", desc: "hello this is midwings", price: "whole for $50", imgSrc: "/HotFood/midwings.jpg"},
        {name: "Rissoles", desc: "hello this is rissoles", price: "whole for $50", imgSrc: "/HotFood/rissoles.jpg"},
        {name: "Sauces", desc: "hello this is sauces", price: "whole for $50", imgSrc: "/HotFood/Sauces.jpg"},
        {name: "Sausage Rolls", desc: "hello this is sausage rolls", price: "whole for $50", imgSrc: "/HotFood/sausage rolls.jpg"},
        {name: "Tenderloins", desc: "hello this is tenderloins", price: "whole for $50", imgSrc: "/HotFood/tenderlions.jpg"},
        {name: "Wedges", desc: "hello this is wedges", price: "whole for $50", imgSrc: "/HotFood/wedges.jpg"}
    ];
    

    const combos = [
        {name:"Nepali khana",desc:"hello this is nep khana",price:"whole for &50",imgSrc:"/Combos/midwingscombo.jpg"},
        {name:"Nepali khana",desc:"hello this is nep khana",price:"whole for &50",imgSrc:"/Combos/quaterchickencombo.jpg"},
        {name:"Nepali khana",desc:"hello this is nep khana",price:"whole for &50",imgSrc:"/Combos/rollcombo.jpg"},
        {name:"Nepali khana",desc:"hello this is nep khana",price:"whole for &50",imgSrc:"/Combos/tendercombo.jpg"},
        

    ]

    const drinks =[
        {name:"Dew",desc:"hello this is dew",price:"whole for $50",imgSrc:"/Drinks/dew.jpg"},
{name:"Lemonade",desc:"hello this is lemonade",price:"whole for $50",imgSrc:"/Drinks/lemonade.jpg"},
{name:"Pepsi",desc:"hello this is pepsi",price:"whole for $50",imgSrc:"/Drinks/pepsi.jpg"},
{name:"Sprite",desc:"hello this is sprite",price:"whole for $50",imgSrc:"/Drinks/sprite.jpg"},
{name:"Water",desc:"hello this is water",price:"whole for $50",imgSrc:"/Drinks/water.jpg"},

    ]

  return (
<div className="menu" >

    <div className="bg-dark text-white text-center sliding-bar ">
        welcome to chicken george
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
                    <li><a href="#sides">Sides</a></li>
                    <li><a href="#drinks">Drinks</a></li>
                </ul>
            </ul>
        
            </Col>
            <Col xs={9}>
            {/* Scrollable Menu Content */}
        <div className="scroll-content ">

            <h4 >Fresh Chicken</h4>
            <p id="fresh-chicken">Our fresh chicken is naturally raw, expertly prepared to ensure top quality and perfect for creating your favorite dishes. Always fresh, never frozen!</p>

            <h5 >Raw Chicken</h5>
            <Category items={rawChicken} categoryid={"raw-chicken"}/>
            {/* <h5 >Crumbed Chicken</h5>
            <Category items={items} categoryid={"crumbed-chicken"}/>
            <h5 >Marinated Chicken</h5>
            <Category items={items} categoryid={"marinated-chicken"}/> */}

            <h4 >Cooked Chicken</h4>
            <p id="cooked-chicken">This is cooked chicken.</p>
            
            <h5 >Chicken</h5>
            <Category items={chicken} categoryid={"chicken"}/>
            <h5 >Combos</h5>
            <Category items={combos} categoryid={"combos"}/>
            {/* <h5 >Sides</h5>
            <Category items={items} categoryid={"sides"}/> */}
            <h5 >Drinks</h5>
            <Category items={drinks} categoryid={"drinks"}/>
            </div>
            </Col>
         </Row>
    </Container>
</div>

    
  );
};

export default Menu;
