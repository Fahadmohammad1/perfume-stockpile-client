import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto my-7">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne">
            <button
              className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Difference between javascript and nodejs
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <strong>Javascript</strong> is a simple programming language. It's
              a updated version of ECMA script. It runs in any browser with V8
              engine. javascript can easily add HTML and play with DOM. On the
              other hand <strong>Node.js</strong> is a javascript runtime.
              Node.js cannot run html and can't play with DOM. It just helps the
              JS to run on the server side. It is running environment for
              javascript programming language. Node.js let the javascript run on
              the server side.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingTwo">
            <button
              className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              When should you use nodejs and when should you use mongodb?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <strong>Node.js</strong> is a Javascript runtime that helps JS to
              run on server side. We should use node.js for connect the database
              with our client side.
              <br />
              <strong>MongoDB</strong> is database where we can store our data.
              We should use MongoDB for storing the data of client side. We can
              read, add, update, and delete the data of MongoDB with the help of
              node.js.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Differences between sql and nosql databases.
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <strong>SQL</strong> database is a database that vertically
              scalable. SQL database use structured query language. It's a
              relational database.
              <br />
              <strong>NoSQL</strong> database is a non-relational database that
              has dynamic schemas. Which is used for unstructured data. NoSQL is
              horizontally scalable.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What is the purpose of jwt and how does it work?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <strong>JSON Web Token</strong>(JWT) is used for create Access
              tokens for an web based application. JWT genarate a token for a
              user for authentication.Than it sends the token to the server.
              Server confirms the identity of a user and give authorization to
              that user by the help of JWT. Sometimes it's use a limited time
              token for high security. It basically used for validate user
              authorization.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
