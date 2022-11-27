import React from 'react';
const Blogs = () => {
    return (
        <div>
            <h1 className='text-3xl mt-5 text-center font-bold text-blue-600'>Blogs</h1>
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 shadow-xl mb-5">
                <div className="grid gap-6 row-gap-10 lg:grid-cols-1">
                    <div className="lg:py-6 lg:pr-16">
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        <svg
                                            className="w-4 text-gray-600"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <line
                                                fill="none"
                                                strokeMiterlimit="10"
                                                x1="12"
                                                y1="2"
                                                x2="12"
                                                y2="22"
                                            />
                                            <polyline
                                                fill="none"
                                                strokeMiterlimit="10"
                                                points="19,15 12,22 5,15"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-lg font-bold">1. What are the different ways to manage a state in a React application?</p>
                                <p className="text-black font-semibold">
                                    The Four Kinds of React State to Manage
                                    <li>Local state: useState,useReducer </li>
                                    <li>Global state: useContext, useReducer, Redux</li>
                                    <li>Server state:useState, useEffect, ReactQuery</li>
                                    <li>URL state: useHistory,useLocation, useParams</li>
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        <svg
                                            className="w-4 text-gray-600"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <line
                                                fill="none"
                                                strokeMiterlimit="10"
                                                x1="12"
                                                y1="2"
                                                x2="12"
                                                y2="22"
                                            />
                                            <polyline
                                                fill="none"
                                                strokeMiterlimit="10"
                                                points="19,15 12,22 5,15"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-lg font-bold">2. How does prototypical inheritance work?</p>
                                <p className="text-black font-semibold">
                                    Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
                                    When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        <svg
                                            className="w-4 text-gray-600"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <line
                                                fill="none"
                                                strokeMiterlimit="10"
                                                x1="12"
                                                y1="2"
                                                x2="12"
                                                y2="22"
                                            />
                                            <polyline
                                                fill="none"
                                                strokeMiterlimit="10"
                                                points="19,15 12,22 5,15"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-lg font-bold">3.  What is a unit test? Why should we write unit tests?</p>
                                <p className="text-black font-semibold">
                                    Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                                    Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        <svg
                                            className="w-4 text-gray-600"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <line
                                                fill="none"
                                                strokeMiterlimit="10"
                                                x1="12"
                                                y1="2"
                                                x2="12"
                                                y2="22"
                                            />
                                            <polyline
                                                fill="none"
                                                strokeMiterlimit="10"
                                                points="19,15 12,22 5,15"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-lg font-bold">4.  React vs. Angular vs. Vue?</p>
                                <p className="text-black font-semibold">
                                    <span className='text-2xl text-blue-700 font-bold'>React</span>
                                    <br />
                                    React is the JavaScript library of User Interfaces. It is build single-page applications and also allows you to create reusable UI components.
                                    <br />
                                    <span className='text-xl font-bold'># Popularity </span>
                                    <br />
                                    React has gained a lot of popularity in recent years and is considered one of the best frameworks for web development. There are more developers who keep React as a priority for creating wonderful websites. Companies like Uber, Airbnb, Netflix, Yahoo!, and The New York Times use React for their front-end development.
                                    <br />
                                    <span className='text-xl font-bold'># Architecture</span>
                                    <br />
                                    It does not follow any specific pattern, developers have the freedom to choose any design pattern. It begins with a single root component. Each can be nested with another component. It can also include third-party components such as state management routing, animation, etc for specific purposes. Here, the components are the large building block that defines reusable items used through the application.
                                    <br />
                                    <span className='text-xl font-bold'># Ecosystem</span>
                                    <br />
                                    React has excellent open-source packages that could be used for developing applications. Front-end applications rely on global state management (Redux) used to store information. Also, React has React Native which allows you to build native iOS and Android applications. React uses JavaScript which acts as a powerpack for the whole new application. It combines UI templates and JavaScript logic called JSX which is the scripting language for React.
                                    <br />
                                    <span className='text-xl font-bold'># Features</span>
                                    <br />
                                    React follows the “Learn Once, Write Anywhere” feature which helps developers to integrate new features without the need of rewriting the existing code. It also has declarative views for each state which will efficiently update and render the components as per the change in data. It has virtual DOM (Document Object Model defines how the document is accessed and manipulated) which helps in updating the changes made by the developer quickly to the website keeping rest of the other things the same. Now, with all this information, if you are sure to move to React, React JS (Basic to Advanced) – Self-Paced will guide you through the theoretical knowledge along with having practical hands-on.
                                </p>
                                <p className="text-black font-semibold">
                                    <span className='text-2xl text-blue-700 font-bold'>Angular</span>
                                    <br />
                                    Angular, developed by Google, was released in the year 2010. It is a TypeScript-based framework that uses a regular DOM. Angular provides a set of tools using which a complex, reactive UI can be built. It is primarily aimed at creating SPAs (Single Page Applications) and performs various operations such as routing, state management, PWA, testing, and building, having a size of 143K.
                                    <br />
                                    <span className='text-xl font-bold'># Popularity </span>
                                    <br />
                                    Angular is used by Google, Upwork, and MS Office and since this framework was implemented before React, it is more popular providing a highly functional framework to create larger applications.
                                    <br />
                                    <span className='text-xl font-bold'># Architecture</span>
                                    <br />
                                    Angular follows MVC (Model-View-Controller) architecture, also you don’t have restrictions in following only MVC architecture. Since Angular is also component-based, you can choose any design pattern. The Angular framework contains modules, templates, services, and components in the architecture which follows several operations while implementing an application.
                                    <br />
                                    <span className='text-xl font-bold'>#  Ecosystem</span>
                                    <br />
                                    Angular also performs state management, inspired by Redux in React. You can build cross-platform mobile applications using NativeScript. The technology MEAN is based on Angular which is the trendy one these days, used mostly by developers. Angular material fills all the needs of UI and helps developers in building an aesthetic, consistent, and fully functional UI. It uses templates with Angular directives.
                                    <br />
                                    <span className='text-xl font-bold'># Features</span>
                                    <br />
                                    The new version of Angular8 comes with immense features such as it supports cross-platform, two-way data binding, a set of directives, declarative UI, a real DOM, CLI (Command Line Interface), and many more.
                                </p>
                                <p className="text-black font-semibold">
                                    <span className='text-2xl text-blue-700 font-bold'>Vue</span>
                                    <br />
                                    Vue was developed by a former Google employee and was released in the year 2014. It was developed to make the best version of Angular and make a custom tool. It is used for developing single-page engaging and high-quality web applications. It lets you extend directives (HTML with HTML attributes), and also provides built-in directives and user-defined directives. It is the lightest framework having a size of 23K.
                                    <br />
                                    <span className='text-xl font-bold'># Popularity </span>
                                    <br />
                                    Vue has become so popular these days and it is one of the hottest topics in terms of technology. Companies that use Vue as their front-end development framework are UpWork, Netflix, and Nintendo. It has a good rating on GitHub making it so popular.
                                    <br />
                                    <span className='text-xl font-bold'>#  Architecture</span>
                                    <br />
                                    Vue is called a progressive framework where you can extend functionality using third-party packages. It follows the MVVM (Model View ViewModel) pattern but is also not strictly linked to it. It also has SFCs (Single File Components) which can be transpiled into JS code using tools like Webpack.
                                    <br />
                                    <span className='text-xl font-bold'># Ecosystem</span>
                                    <br />
                                    Vue comes with various libraries used for creating a full-fledged UI. Vuex is the state management library for Vue applications. To speed up your development, it has input components and advanced elements. It has a brilliant feature of integrating with Laravel. It can play a role of a library and a framework both depending on the project’s requirement. It uses HTML-based template syntax.
                                    <br />
                                    <span className='text-xl font-bold'># Features</span>
                                    <br />
                                    Several features of Vue include two-way data binding for HTML interface manipulation, virtual DOM to update the changes made in the website quickly, custom directives for managing data changes, components for reusing codes, and transitions that provides methods when a UI element is removed or inserted in the DOM.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        <svg
                                            className="w-6 text-gray-600"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <polyline
                                                fill="none"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeMiterlimit="10"
                                                points="6,12 10,16 18,8"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-1">
                                <p className="mb-2 text-lg font-bold">Thank you for reading</p>
                                <p className="text-gray-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;