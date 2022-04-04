import React from "react";

const Blogs = () => {
  return (
    <div className="border-3 mt-3">
      <h3 className="text-center mb-2">Question and Ansering section</h3>
      <h3 className="bg-info p-3">Ques No 1: What is context API ?</h3>
      <p>
        Ans: The Context API is a React structure that enables you to exchange
        unique details and assists in solving prop-drilling from all levels of
        your application.
      </p>
      <h3 className="bg-info p-3">
        Ques No 2: What is cementic element in html ?
      </h3>
      <p>
        Ans: Semantic HTML elements are those that clearly describe their
        meaning in a human- and machine-readable way. Elements such as header ,
        footer and article are all considered semantic because they accurately
        describe the purpose of the element and the type of content that is
        inside them.
      </p>
      <h3 className="bg-info p-3">
        Ques No 3: What is inline and block level element ?
      </h3>
      <p>
        Ans: There are two display values: block and inline. Block level
        elements take up as much space as possible by default. Each block level
        element will start a new line on the page, stacking down the page. In
        addition to stacking vertically, block level elements will also take up
        as much horizontal space as possible. The p element is an example of a
        block level element. Each new paragraph tag will appear on its own line
        vertically. Paragraphs with longer content will stretch all the way to
        the edge of the page.
      </p>
    </div>
  );
};

export default Blogs;
