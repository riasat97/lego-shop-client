import React from 'react';
import { Accordion } from 'flowbite-react';
import useTitle from '../../utilities/useTitle';

const ref = React.createRef();

const Blogs = () => {
    useTitle()
    return (
        <div className='max-w-7xl mx-auto px-10'>
            <div className="divider my-12 text-5xl font-extrabold">All Blogs</div>

            <div ref={ref}>
                <Accordion alwaysOpen={true}>
                    <Accordion.Panel>
                        <Accordion.Title>
                            What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                In authentication systems, access tokens and refresh tokens are frequently employed. A credential that allows access to particular resources or services is called an access token. It serves to authenticate and authorize API queries and is often fleeting. A refresh token, on the other hand, is a persistent credential used to get a new access token when the existing one expires. The workflow normally entails giving a valid set of credentials to an authentication server in order to acquire an access token. When the access token expires, the refresh token can be used to request a new access token from the server without having to re-authenticate the user. Access tokens and refresh tokens should be safely kept on the client side to avoid unwanted access. Common techniques include keeping them in safe HTTP-only cookies, on the device's secure keychain, or in local storage with the proper security protections. The precise storage strategy is determined by the application's particular needs and security constraints.


                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Compare SQL and NoSQL databases?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Two different kinds of databases are utilized to store and retrieve data: SQL and NoSQL. Relational databases, usually referred to as SQL databases, are structured and use tables with predetermined schemas to store data. They query and manipulate data using SQL (Structured Query Language). Strong data consistency, support for complex relationships, and suitability for applications needing structured data and transactions are all features of SQL databases.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Instead than relying on rigid schemas, NoSQL databases, sometimes referred to as non-relational databases, offer a flexible data model. They are capable of working with both structured and unstructured data. Depending on the exact database type, NoSQL databases use a variety of data types, including key-value, document, columnar, or graph. NoSQL databases are excellent for applications with fast changing or unexpected data patterns since they are built for high scalability, high performance, and processing massive amounts of data.
                                The decision between SQL and NoSQL databases is based on the application's particular needs, including data format, scalability, and performance demands.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            What is express js? What is Nest JS?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-500">
                                A quick and simple web application framework for Node.js is called Express.js. It offers a quick and adaptable solution to create APIs and web apps. With regards to HTTP requests, routing, middleware, and view rendering, Express.js focuses on offering a comprehensive set of functionalities. Because of its vast ecosystem of middleware and plugins and lightweight design, it is well-known for facilitating the development of new functionality by developers. Express.js allows developers to arrange and organize their code however they see fit and is appropriate for creating small to medium-sized apps.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-500">
                                The progressive TypeScript-based framework NestJS, on the other hand, is used to create scalable and effective server-side applications. It is based on Express.js and makes use of TypeScript's decorators, dependency injection, and strong typing features. NestJS allows developers to design highly modular and maintainable codebases since it adheres to the modular architectural paradigm, which was inspired by Angular. It is ideal for creating enterprise-level applications because it comes with built-in support for features like routing, controllers, services, modules, and dependency injection. To increase developer efficiency, NestJS also contains a wealth of tools, including CLI generators and testing utilities.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            What is MongoDB aggregate and how does it work?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                The aggregate in MongoDB is a potent architecture for processing and analyzing data in a versatile and effective way. It enables you to retrieve aggregated results based on multiple criteria and execute complicated operations on groups of documents.
                                A pipeline, or a series of phases applied to the documents, makes up the overall framework. Each step runs a certain operation on the data before sending the findings to the following stage. Operations including filtering, sorting, grouping, projecting, joining, and other steps may be present.
                                You can conduct complicated data transformations, aggregations, and calculations by combining several phases in a pipeline. You can run sophisticated queries and manipulate large amounts of data since the aggregate framework offers a broad variety of operators and functions.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>

        </div>
    );
};

export default Blogs;