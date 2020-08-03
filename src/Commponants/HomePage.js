import React from 'react';
import { Card, Jumbotron } from "react-bootstrap";

export default function HomePge() {
    return (

        <div style={{ margin: "30px" }}>
            <Jumbotron>
                <h1>Mariam Khoudier</h1>
                <p>
                    Welcome to Mariam Khoudier's Portfolio
                </p>
                <h3>Background</h3>
                <p>
                    I joined Service  NSW February 2018 as a DSR, I came first as a Traininee form HVTC, 
                    after one year I was able to secure my possion as a permenent DSR in service NSW, 
                    service NSW is considered my first profissional workplace where I got to work with amazing team in Wynyard Service Center, 
                    Service NSW continues to support me by allowing me to join this program and explore new ways to help our cutomers.
                </p>
                <h3>Why I'm here?</h3>
                <p>
                    I belived in Service NSW mission with is The way they put customers in heart of everyhing and innovate to deliver, 
                    and I love helping our customer and reach to the point to make them happy of the serviceby solving thier problems ,
                     especilly in this challining times where the services we provide to our customers means a lot to them,
                      So working in the development teams allows to see things from a different lense and help our customers from a different possions,
                     I want to build the best error free experience to our customer wether they are internal customers like DSR and CSR or externl customers.
                </p>
                <h3>What I have Learnt during the course </h3>
                <p>
                    <h1>Java script</h1>
                    <ul>
                        <li>Git Basics, Variables, Basic Operators, Data Types</li>
                        <li>If Statements, Arrays, For and While loops</li>
                        <li>Objects and Functions</li>
                        <li>AND and OR Logical Operators, Array Extension Methods, More Mathematical Operators</li>
                        <li> String extension methods </li>
                        <li>Throwing and Handling Exceptions, Classes</li>
                        <li>Classes: Getters and Setters, Inheritance</li>
                        <li>Arrow functions, throwing and handling exceptions, default values in methods</li>
                        <li>File operations with Node, JSON</li>
                        <li>ES6 Promises and async/await, intro to TDD </li>
                    </ul>

                </p>

                <h3>React</h3>
                <ul>
                    <li>Create componants</li>
                    <li>Componant composation</li>
                    <li>React Router</li>
                    <li>React hooks(useState,useEffect</li>
                    <li> React Bootstrab  </li>
                    <li>Fetch API</li>
                    <li>Promises</li>
                    <li>Handling events</li>
                    <li>Forms</li>

                </ul>

                <h3>Express server</h3>
                <ul>
                    <li>Create componants</li>
                    <li>Componant composation</li>
                    <li>React Router</li>
                    <li>React hooks(useState,useEffect</li>
                    <li> React Bootstrab  </li>
                    <li>Fetch API</li>
                    <li>Promises</li>
                    <li>Handling events</li>
                    <li>Forms</li>

                </ul>

                <h1>Please find out sources below I used during the course</h1>
                <ul>
                    <li> <a href="https://www.w3schools.com/">W3School</a></li>
                    <li><a href="https://reactjs.org/">React</a></li>
                    <li> <a href="https://reactrouter.com/">React Router</a></li>
                    <li>  <a href="https://getbootstrap.com/">Bootstrap</a></li>
                    <li>  <a href="https://codewithmosh.com/p/mastering-react"> React with Mosh</a></li>
                    <li>  <a href="https://stackoverflow.com/"> stackoverflow</a></li>
                    <li><a href=" https://www.youtube.com/watch?v=2nZiB1JItbY&list=PLDyQo7g0_nsX8_gZAB8KD1lL4j4halQBJ">Java script that I follow in youtube</a></li>
                    <li>  <a href=" https://trello.com/b/QH9rzFga/group-3-project "> Trello</a></li>
                    <li><a href="https://www.npmjs.com/package/node-persist">Node persist</a></li>
                </ul>

                <p>



                </p>


            </Jumbotron>
            <button style={{ width: "200px" }} type="button" onClick={() => { window.location.href = "/View-Projects" }} className="btn btn-danger">Projects</button>
        </div>
    )
}
