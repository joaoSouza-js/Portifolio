import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
import { useShortText } from "../../hooks/useShortText";

function ProjectCards(props) {
    const {
        textIsShortened,
        handleChangeTextShortened,
        shortTextResult,
        textNeedToBeShortened,
        showAllText,
        showShortText,
    } = useShortText({
        text: props.description,
        limit: 300,
        concat: "...",
    });

    console.log(textIsShortened);

    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>

                {textNeedToBeShortened === false && (
                    <Card.Text style={{ textAlign: "justify" }}>
                        {props.description}
                    </Card.Text>
                )}

                {textNeedToBeShortened === true && (
                    <button
                        onClick={handleChangeTextShortened}
                        style={{
                            all: "unset", // Remove all default styles
                            display: "inline", // Maintain inline behavior
                            cursor: "pointer", // Show pointer cursor on hover
                            // Add any additional styles you need
                        }}
                    >
                        <Card.Text style={{ textAlign: "justify" }}>
                            {textIsShortened
                                ? shortTextResult
                                : props.description}
                        </Card.Text>
                    </button>
                )}

                <Button
                    variant="primary"
                    href={props.ghLink}
                    style={{ marginTop: 16}}
                    target="_blank"
                    title={`visitar o projecto ${props.title} no github`}
                >
                    <BsGithub /> &nbsp;
                    {props.isBlog ? "Blog" : "GitHub"}
                </Button>
                {"\n"}
                {"\n"}

                {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

                {!props.isBlog && props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                    >
                        <CgWebsite /> &nbsp;
                        {"Demo"}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}
export default ProjectCards;
