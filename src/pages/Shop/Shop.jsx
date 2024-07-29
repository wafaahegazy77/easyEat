import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import Headlines from '../../components/Headlines/Headlines'
import FilterCategCard from '../../components/FilterCategCard/FilterCategCard'
import Card from '../../components/Card/Card'
import { Nav, Tab } from 'react-bootstrap'

const Shop = () => {

    return (
        <>
            <BreadCrumbs/>
            <section className='products_sec section'>
                <div className="container">
                    <Headlines subtitle={"Our categories"} title={"Shop by category"}/>
                   
                    <div className="filter_box mb-5">
                        <Tab.Container id="projectsTab" defaultActiveKey="tab1">

                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item  className='col-lg-3 col-6'>
                                    <Nav.Link eventKey="tab1" >
                                        <FilterCategCard cat="Dessets" imgSrc="https://www.foodandwine.com/thmb/kHhXne4qG5U-kInXCqJTG3e2D1s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/coffee-cookie-crumble-XL-RECIPE0318_0-23b67c3237a449fbbb7226d2fc6db3e2.jpg"/>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item  className='col-lg-3 col-6'>
                                    <Nav.Link eventKey="tab2" >
                                        <FilterCategCard cat="Fast Food" imgSrc="https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/16/USAT/71607434007-getty-images-475895644.jpg?crop=1414,1413,x424,y0"/>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item  className='col-lg-3 col-6'>
                                    <Nav.Link eventKey="tab3" >
                                        <FilterCategCard cat="Sandwiches" imgSrc="https://www.eatthis.com/wp-content/uploads/sites/4/2023/03/green-goddess-baguetter-panera.jpg?quality=82&strip=1"/>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item  className='col-lg-3 col-6'>
                                    <Nav.Link eventKey="tab4" >
                                        <FilterCategCard cat="Grilled Cheese" imgSrc=" https://cdn.loveandlemons.com/wp-content/uploads/2023/01/grilled-cheese-sandwich.jpg"/>
                                    </Nav.Link>
                                </Nav.Item>
                            
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="tab1">
                                    <div className="products_box">
                                        <div className="row">
                                            <Card  />
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>

                        </Tab.Container>
                    </div>

                   

                </div>
            </section>
        </>
    )
}

export default Shop
