import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Typewriter from 'typewriter-effect'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lottie from 'lottie-react'
import animationData1 from '../assets/animation_lmi4ug57.json'
import animationData2 from '../assets/uGzpzKuZdp.json'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hom>
    <section className='Hero'>
    <Lottie className='infini' animationData={animationData2}/>
    <div className='Hero-heading'>
                    <Typewriter
 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome To")
                        .pauseFor(10)
                        .deleteAll()
                        .typeString('InfiniteLoop AI')
                        .start();
                }}
            />
    </div>
    <p className='Hero-para'>Pioneering AI-Powered Solutions for Business Excellence </p>
    <Link><Button variant='contained' className='B1'>Book Us</Button></Link>
    <Link to='/aboutus'><Button variant='outlined' className='B2'>About Us</Button></Link>
    </section>
    <div className="Us" id="aboutus">
        <h2>Who are we?</h2>
        <p>At Infiniteloop AI, we are dedicated to revolutionizing the future of automation through cutting-edge artificial intelligence solutions. Our mission is to empower businesses of all sizes to unlock their full potential by harnessing the power of AI to streamline operations, enhance efficiency, and drive innovation.</p>
    </div>
    <div className="promise">
        <h1>leverage InfiniteLoop AI's comprehensive<span className='ai'> AI development </span>expertise to maximize your businesses potential</h1>
    </div>
    <div>
    <h2 className='services' id="ourservices">Our Services</h2>
    <Lottie className='spin' animationData={animationData1}/>
    <Container className='cont'>
    <Row>
    <Col sm={4}>    
    <Card  className='cards-cust c1'>
      <Card.Body>
        <Card.Title className='ctitle'>GPT 3/4 Development</Card.Title>
        <Card.Text className='ctext1'>
            Language synthesis
            Knowledge response
            Chatbot development
            Model tuning
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col sm={4}>    
    <Card className='cards-cust'>
      <Card.Body>
        <Card.Title className='ctitle'>AI Consulting</Card.Title>
        <Card.Text className='ctext2'>
          Feasibility assessments
          Use case identification
          Performance evaluation
          Strategy development
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col sm={4}>    
    <Card className='cards-cust c3'>
      <Card.Body>
        <Card.Title className='ctitle'>Natural Language Processing</Card.Title>
        <Card.Text className='ctext3'>
          Document categorization
          Data mining
          Text summarization
          Entity identification
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
      </Row>
    </Container>
    </div>
    </Hom>
    <Footer/>
    </>
  )
}

const Hom  = styled.section`
    .Hero{
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color:  #6F6F6F;
        margin-bottom: 10rem;
        font-family: 'Share Tech Mono', monospace;
        margin-left:-1rem;
        margin-right:-1rem;
        
    }

    .Hero-heading{
        font-size: 3rem;
    }
    .Hero-para{
        font-size: 1.5rem;
    }

    .B1{
        background-color: #72d0ff;
        margin-right: 1rem;
    }
    .B2{
        border-color: #72d0ff;
        color: #72d0ff;
        margin-left: 1 rem;
    }
    .B1:hover{
        background-color: #ffff;
        color: #72d0ff;
    }
    .B2:hover{
        background-color: #72d0ff;
        border-color: #72d0ff;
        color: #ffff;
    }

    .Us{

        text-align: center;
        position: relative;
        margin-top:60rem;
        padding-top:7rem;
        padding-bottom:7rem;
        color:  #6F6F6F;
        background-color:#f7f7f7;
        font-size: 1.5rem;
        font-family: 'Share Tech Mono', monospace;
        margin-left:-1rem;
        margin-right:-1rem;
        padding-left:30rem;
        padding-right:30rem;
        font-weight:400;
        letter-spacing: 1px;
        
    }

    .promise{
        color: white;
        font-size: 2rem;
        background-color: black;
        text-align: center;
        padding-left: 30rem;
        padding-top:4rem;
        padding-bottom:4rem;
        padding-right: 30rem;
        margin-top:0px;
        font-family: 'Share Tech Mono', monospace;
        letter-spacing: 3px;
        margin-left:-1rem;
        margin-right:-1rem;
        
    }
    .ai{
        color:#72d0ff;
    }
    .cont{
        margin-top: 3rem;
    }
    .cards-cust{
        padding: 5rem;
        margin-top:3rem;
        margin-bottom:10rem;
        
        width: 20rem;
        border-radius: 1.5rem;
        //box-shadow: 0 4px 10px rgba(0,0,0,0.16), 0 4px 10px rgba(0,0,0,0.23);
    }

    .ctitle{
        font-size:1.5rem;
        color: #000000;
        text-align: center;
    }

    .c1{
      margin-left:-4rem;
    }
    .c3{
      margin-left:4rem;
    }

    .ctext1,.ctext2,.ctext3{
      text-align: center;
    }

    .services{
      margin-top: 5rem;
      margin-bottom: 3rem;
      text-align: center;
      font-family: 'Share Tech Mono', monospace;
      color: #72d0ff;

    }
    .spin{
      margin: 0 auto;
      max-width: 20rem;
      max-height: 20rem;
    }
    .infini{
      margin: 0 auto;
      max-width: 20rem;
      max-height: 20rem;

    }
`;
export default Home