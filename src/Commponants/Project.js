import React, { useEffect, useState } from "react"
import { Card, Jumbotron } from "react-bootstrap";
import projects from '../Data/projects.json'
import { useParams } from 'react-router-dom';



export default function Project() {
    let { id } = useParams();
    let [project, setProject] = useState();
    useEffect(() => {
        let foundProject = projects.find(p => p.id == id);
        setProject(foundProject);
    });

    return (

        <div> {(project && (<Jumbotron>
            <h1>Project Details</h1>
            <Card>
                <Card.Body>
                    <Card.Title><strong>Title: </strong>{project.projectname} </Card.Title>
                    <Card.Text className="mt-4">
                        <strong>Description: </strong>{project.discription}
                    </Card.Text>
                    <Card.Text className="mt-4">
                        <strong>Github: </strong>{project.github}
                    </Card.Text>
                    <Card.Text className="mt-4">
                        <strong>Lerning: </strong>{project.lerning.map(learning => <ul>
                            <li>
                                <label>{learning}</label>
                            </li>
                        </ul>)}
                    </Card.Text>
                    <Card.Text className="mt-4">
                        <strong>Challenges: </strong>{project.challenges.map(challenge => <ul>
                            <li>
                                <label>{challenge}</label>
                            </li>
                        </ul>)}
                    </Card.Text>
                    <Card.Text className="mt-4">
                        <strong>Technology Used: </strong>{project.technologyUsed.map(technology => <ul>
                            <li>
                                <label>{technology}</label>
                            </li>
                        </ul>)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Jumbotron>))}
        </div>
    );
}
