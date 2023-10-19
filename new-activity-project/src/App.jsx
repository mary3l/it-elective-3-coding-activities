// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useEffect, useState } from "react";
import Post from "./components/Post";
import useFetch from "./hooks/useFetch";
// import "./App.css";

function App() {
  //hooks in React
  const [number, setNumber] = useState(); //fetching what the user clicked (based on what number they clicked)
  // const [post, setPost] = useState(null); //for fetching the post

  // const fetchPost = async (id) => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts/" + id
  //     );
  //     const data = await response.json();
  //     setPost(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     console.log("Done");
  //   }
  // };

  // useEffect(() => {
  //   // fetch("https://jsonplaceholder.typicode.com/posts/" + number) //post the link in which what number you clicked then get the data from the link
  //   //   // return promise either succes or failure
  //   //   // if success
  //   //   .then((response) => response.json(1))
  //   //   .then((data) => setPost(data))
  //   //   //if failure return the error in the console
  //   //   .catch((error) => console.log(error)); //catch and know the error
  //   fetchPost(number);
  // }, [number]); //if the numbers changes this will run the function

  const { data } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/",
    number
  );

  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Remove");
    };
  }, []);
  return (
    <>
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        {data && <Post title={data.title} body={data.body} />}
        {number}
        <div className="flex items-center gap-3 mt-3">
          {Array.from({ length: 5 }).map((value, index) => {
            return (
              <div
                key={`pagination -${index}`}
                className="p-4 border font-bold hover:cursor-pointer"
                onClick={() => setNumber(index + 1)}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
