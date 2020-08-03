import React from 'react';
import { Card, Jumbotron } from "react-bootstrap";
import projects from '../Data/projects.json'

export default function Projects() {
    return (
        <div>
            <Jumbotron>
                <h1>Projects</h1>
                <p>
                    This is a list of most of the projects I worked on during the last theree month order by significacne.
                </p>
            </Jumbotron>
            <div className="container mx-auto" >
                {
                    projects && (
                        projects.map(project =>
                            <div key={project.id} onClick={() => window.location.href = `/project/${project.id}`}>
                                <Card className="project" >
                                    <Card.Body>
                                        <Card.Title><strong>Title: </strong>{project.projectname} </Card.Title>
                                        <Card.Text className="mt-4">
                                            <strong>Description: </strong>{project.discription}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}