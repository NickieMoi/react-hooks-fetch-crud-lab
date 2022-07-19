import React, { useState, useEffect  } from "react";
import QuestionItem from "./QuestionItem.js";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  // const [isSett, setIsest] = useState(false)
  // const [myId, setMyId] = useState('')

  useEffect(() => {
    fetch("http://localhost:3000/questions")
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(res => {
      setQuestions(res);
      // setIsest(true);
    });
  }, [])



  // const toFilterDelete = questions.filter(que => {
  //   if(myId === ''){
  //     return true
  //   } else {
  //     return myId !== que.id
  //   }
  // })
  function handleDeleteClick(id){
    // setMyId(id)
    fetch(`http://localhost:4000/questions/${id}`, {
      method : "DELETE"
    })
    .then(res => res.json())

    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(res => {
      setQuestions(res);
      // setIsest(true);
    });
  }

  const questionItem = questions.map(quest => (
    <QuestionItem question = { quest}/>
    <QuestionItem question = { quest } onDelete = { handleDeleteClick }/>
  ))
  console.log(questions)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionItem}
      </ul>
    </section>
  );
}
export default QuestionList;W