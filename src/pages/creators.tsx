import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import * as styles from "../styles/creators.module.css";

const Creators = () => {
    return (
        <Layout pageTitle="Creators page">
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.sectionHeader}>Creating Content</h1>
                    <p>for the</p>
                    <h1 className={styles.sectionHeader}>
                        CSESoc Learning Platform
                    </h1>
                    <h2 className={styles.sectionHeader}>
                        Information for guest content creators
                    </h2>
                </div>
                <div>
                    <i>
                        Share your interests and expertise with the wider CSESoc
                        community. Submit your content ideas{" "}
                        <a href="https://cseso.cc/ContentCreatorForm">here</a>.
                    </i>
                    <p>
                        The CSESoc community is full of curious and creative
                        minds like you, each travelling on a unique journey
                        through the rapidly developing world of computing and
                        technology. CSESoc invites you to share your knowledge
                        and experience through an open platform dedicated to
                        technical educational content made by students, for the
                        students.
                    </p>
                    <h2 className={styles.sectionHeader}>
                        What is this CSESoc Learning Platform?
                    </h2>
                    <p>
                        The CSESoc Learning Platform will be a new website,
                        similar to the{" "}
                        <a href="https://media.csesoc.org.au/">
                            current media website
                        </a>
                        , to host technical educational content like articles,
                        videos and presentations made by members of the
                        community and made publicly available online. It is
                        currently under development and will be launched in
                        March 2022. Meanwhile, content creators are encouraged
                        to submit an outline of your ideas so we can work with
                        you to produce content for the platform's debut.
                    </p>
                    <h2 className={styles.sectionHeader}>
                        Who can create content for the CSESoc Learning Platform?
                    </h2>
                    <p>
                        The CSESoc Learning Platform is intended to be an open
                        area of learning and discussion for all members of the
                        CSESoc community. We value the perspectives and
                        experiences from people of all skill levels and
                        backgrounds, from budding beginners to seasoned
                        professionals. No matter what your interests are or how
                        much experience you have, there's always something you
                        can share that others will find valuable. Anyone
                        interested in sharing their learning with the community
                        is encouraged to work with us.
                    </p>
                    <h2 className={styles.sectionHeader}>
                        Why should I present my content on the CSESoc Learning
                        Platform?
                    </h2>
                    <ul>
                        <li>
                            Connect with CSESoc's global network of students,
                            alumni and sponsors
                        </li>
                        <li>
                            Share your passion with a community of keen and
                            curious learners
                        </li>
                        <li>
                            Demonstrate your communication skills and technical
                            expertise to potential employers
                        </li>
                        <li>
                            If you have an existing blog or channel, take
                            advantage of the expansive CSESoc audience to draw
                            attention to your own content platforms
                        </li>
                    </ul>
                    <h2 className={styles.sectionHeader}>
                        What kind of content can I present on the CSESoc
                        Learning Platform?
                    </h2>
                    <p>
                        The Learning Platform will be a home for technical
                        educational content that is not explored in the lectures
                        and tutorials of your uni courses, but nonetheless
                        highly relevant to students.
                    </p>
                    <p>
                        For inspiration, you could write an introductory
                        overview of a broad area like theory of computation, or
                        you could present a deep dive into something beyond the
                        scope of a uni course, like the inner workings of Git.
                        You could focus on explaining theoretical concepts like
                        algorithmic time complexity, or you teach something
                        practical like coding up a discord bot. Don't let our
                        imagination limit you!
                    </p>
                    <p>
                        Note: If you are interested in sharing non-technical
                        topics, CSESoc also has a home for that! Reach out to{" "}
                        <a href="media@csesoc.org.au">media@csesoc.org.au</a> to
                        discuss your idea with the media team :D
                    </p>
                    <h2 className={styles.sectionHeader}>
                        What format can I present my content in?{" "}
                    </h2>
                    <p>
                        Express yourself using a format that feels most natural
                        to you and your content. Here is a list of common
                        content formats:
                    </p>
                    <ul>
                        <li>
                            <b className={styles.inlineHeader}>
                                Article or blog post:{" "}
                            </b>
                            Write up a digital article complete with embedded
                            images, tables, graphs, code snippets and even
                            mathematical typesetting. We'll help you format your
                            article to publication quality.
                        </li>
                        <li>
                            <b className={styles.inlineHeader}>
                                Video or series of videos:
                            </b>{" "}
                            Hit record and talk through a presentation or a live
                            coding demo, or both! Do as many takes as you need
                            to get it just right. We'll help you edit your
                            recordings to make the final cut.
                        </li>
                        <li>
                            <b className={styles.inlineHeader}>
                                Live workshop or presentation:
                            </b>{" "}
                            Present a live workshop either in-person or online,
                            with a polished recording posted onto the website.
                            We'll handle all the logistics and stream setup to
                            make a smooth-running event for you and your
                            audience.
                        </li>
                        <li>
                            <b className={styles.inlineHeader}>
                                Infographic or reference sheet:
                            </b>{" "}
                            Create a concise overview that students can use at a
                            glance. We'll help with formatting and visual
                            aesthetics to make it readable and appealing.
                        </li>
                    </ul>
                    <p>
                        If you have other ideas for how you want to present your
                        content, we would love to know!
                    </p>
                    <h2 className={styles.sectionHeader}>
                        What support will CSESoc provide to me for creating
                        content?
                    </h2>
                    <p>
                        We want to make your content creation experience as
                        enjoyable and productive as possible. The CSESoc team
                        will handle all the tedious work of polishing,
                        publishing and promoting your work, so you can focus on
                        bringing out your best ideas. Here's what we will
                        provide:
                    </p>
                    <ul>
                        <li>
                            Graphical illustrations and animations to
                            effectively convey your ideas
                        </li>
                        <li>
                            Professional aesthetics and visual themes for the
                            presentation of your content
                        </li>
                        <li>
                            Promotion on CSESoc's high-traffic social media
                            platforms and newsletter
                        </li>
                    </ul>
                    <p>
                        Ready to step up to the stage? Submit your content ideas
                        here:{" "}
                        <a href="https://cseso.cc/ContentCreatorForm">
                            https://cseso.cc/ContentCreatorForm
                        </a>
                        .
                    </p>
                    <p>
                        If you have any questions, thoughts or suggestions,
                        please don't hesitate to reach out to us at{" "}
                        <a href="education@csesoc.org.au">
                            education@csesoc.org.au
                        </a>{" "}
                        :D
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Creators;
