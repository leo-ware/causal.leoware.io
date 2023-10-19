import Link from "@docusaurus/Link"
import React from "react"
const { default: Layout } = require("@theme/Layout")

const About = () => {
    return (
        <Layout>
            <div className="container" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "60vh",
            }}>
                <h1 className="hero__title">About</h1>
                <p style={{maxWidth: "650px", float: "center"}}>
                    I started this project as a personal reference while I was
                    working on my undergraduate capstone,
                    <Link to="https://leo-ware.github.io/pqp"> pqp</Link>.
                    Gradually, I'm trying to grow it into a full-sized intro course
                    on the topic. I hope you find it useful!
                </p>
            </div>
        </Layout>
    )
}

export default About