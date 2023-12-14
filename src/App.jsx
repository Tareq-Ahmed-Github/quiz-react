import { useState } from "react";
import QuizResult from "./components/QuizResult";

function App() {
  const quesSet = [
    {
      question: "Who is the CEO of facebook?",
      options: ["Zuckerburg", "Durjoy", "Farabi", "Tareq"],
      answer: 1,
    },
    {
      question: "When did the World war I occur?",
      options: ["1942", "1824", "1917", "1947"],
      answer: 3,
    },
    {
      question: "Where is Ifel tower?",
      options: ["London", "Paris", "Sydney", "Turkey"],
      answer: 2,
    },
    {
      question: "Where can we see Quala?",
      options: ["Australia", "America", "Canada", "Germany"],
      answer: 1,
    },
  ];

  const [cur, setCur] = useState(0);
  const [ans, setAns] = useState(0);
  const [marks, setMarks] = useState(0);
  const [res, setRes] = useState(false);

  const updateMarks = () => {
    if (ans === quesSet[cur].answer) {
      setMarks(marks + 1);
    }
  };

  const nextQues = () => {
    updateMarks();
    if (cur < quesSet.length - 1) {
      setCur(cur + 1);
      setAns(0);
    } else {
      setRes(true);
    }
  };

  const prevQues = () => {
    updateMarks();
    if (cur > 0) {
      setCur(cur - 1);
      setAns(0);
    }
  };

  return (
    <>
      <div className="bg-light border rounded mx-auto w-3/4 my-20 p-10">
        <p className="text-gray-800 text-center font-bold mb-5">
          Simple Quiz App
        </p>

        <div className="container">
          {res ? (
            <QuizResult obtainedMarks={marks} totalMarks={quesSet.length} />
          ) : (
            <div className="">
              <div className="bg-gray-900 text-yellow-400 p-5 mb-2 rounded">
                <p>{cur + 1}.</p>
                <p className="">{quesSet[cur].question}</p>
              </div>

              <div className="bg-gray-800 flex gap-12 p-5 mb-2 rounded">
                {quesSet[cur].options.map((option, i) => {
                  return (
                    <button
                      className={`bg-gray-700 hover:bg-slate-600 text-yellow-400 w-32 py-1 rounded ${
                        ans == i + 1 ? "bg-slate-500" : null
                      }`}
                      key={i}
                      onClick={() => setAns(i + 1)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              <div className=" flex justify-between py-2">
                <input
                  className="w-28 py-1 bg-slate-50 shadow-lg text-gray-900 rounded"
                  type="button"
                  value="Previous"
                  id="next-button"
                  onClick={prevQues}
                />
                <input
                  className="w-28 py-1 bg-slate-50 shadow-lg text-gray-900 rounded"
                  type="button"
                  value="Next"
                  id="next-button"
                  onClick={nextQues}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
