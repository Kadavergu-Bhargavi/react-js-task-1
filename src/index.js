
// // import React from "react";
// // import  ReactDOM  from "react-dom/client";
// // import "./index1.css";

// //const BookList =() => {
// //return (
// //<section className="bookList">
// //<Book/>
// //<Book/>
// //<Book/>
//   // </section>
// //   );
// // };

// // const Book = () => {

// //      const authorName = "Dharmajan";

// //   return (
// //     <article className="book">
// //       <Image />
// //       <h1>{authorName.toUpperCase()}</h1>
// //       <p>{6 + 6}</p>
// //       <BookName />
// //     </article>
// //   );
// // };

// // const Image = () => {
// //    return (
// //    <img src="https://images-eu.ssl-images-amazon.com/images/I/61De10B-ooL._AC_UL600_SR600,400_.jpg" 
// //    alt="" 
// //    />
// //    );
// // };

// // const Author = () => <h1>Dharmajan</h1>;
// // const BookName = () =>
// //  <h1 style={{ color: "#617d98" , fontsize: "0.75rem"}}>habits</h1>;

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<BookList />)


// //PROPS


// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import "./index1.css";
  
// const firstBook = {
//   title: " Ikigai" ,
//   author: " Garcia" ,
//   img: "https://images-eu.ssl-images-amazon.com/images/I/61-hMfd7NGL._AC_UL600_SR600,400_.jpg",
// };


// function BookList() {
//   return (
//     <>
//     <section className ="bookList">
//     <Book 
//      title = {firstBook.title} 
//     author = {firstBook.author}
//     img = {firstBook.img}
//     />
//     <Book  
//     title = "habits" 
//     author = "James"
//     img ="https://images-eu.ssl-images-amazon.com/images/I/711c-uf6AFL._AC_UL600_SR600,400_.jpg" />
//     </section>
//     </>
//   );
// };

// const Book = (props) => {
//   //console.log(props);

//    const { title, author, img } = props;

//   return (
//     <article className="book">
//       <h1>{title}</h1>
//       <h2>{author}</h2>
//       <img src={img} />

//     </article>
//   );
// };
//const root= ReactDOM.createRoot(document.getElementById("root"));;
//root.render(<BookList />);

 //import React from "react";
 //import  ReactDOM  from "react-dom/client";
 //import "./index1.css";
  


//  import React from "react";
//   import  ReactDOM  from "react-dom/client";
//   import "./index1.css";


//   const names = ["john", "suhan", "peter"];

//   const newNames = names.map((names) => {
//      return <h1>{names}</h1>;
//   });


//   function BookList() {
//     return  <section>{newNames} </section>
//   }


//   const root= ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<BookList />);

// Events Basics
import React from "react";
import  ReactDOM  from "react-dom/client";
import "./index1.css";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James",
    img: "https://images-eu.ssl-images-amazon.com/images/I/81Ls+SBCLiL._AC_UL600_SR600,400_.jpg",
  },
  {
    id: 2,
    title: "Ikigai",
    author: "Garcia",
    img: "https://images-eu.ssl-images-amazon.com/images/I/814L+vq01mL._AC_UL600_SR600,400_.jpg",
  },
  {
    id: 3,
    title: "Psychology of Money",
    author: "Morgan",
    img: "https://images-eu.ssl-images-amazon.com/images/I/61-hMfd7NGL._AC_UL600_SR600,400_.jpg",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        const { title, author, img, id } = book;
        return <Book key={id} book={book} />;
      })}
    </section>
  );
}


const Book = (props) => {

   const handleClick = (e) => {
    console.log(e);
    alert("You Clicked a Button");
   };

   function complexExample(author, title){
     console.log(author);
     console.log(title);

   }



  const { img, author, title } = props.book;
  return (
  <article className="book" >
    <img src={img} alt="" />
    <h1 onClick={()=>console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={handleClick}>
      Click Me
    </button>
    <button type="button" onClick={() => complexExample(author, title)}>
      Give me Author Name and title
    </button>
  </article>
  );
};



const root= ReactDOM.createRoot(document.getElementById("root"));
 root.render(<BookList />);
