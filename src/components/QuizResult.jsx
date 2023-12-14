const QuizResult = (props) => {
  const level = (props.obtainedMarks / props.totalMarks) * 100;

  return (
    <div className="my-10 border rounded p-10 shadow-sm bg-gray-900 text-yellow-400">
      <h1 className="font-semibold italic text-center">
        {level >= 80
          ? "Excellent!"
          : level > 50
          ? "Well done!"
          : level > 20
          ? "You need more practice!"
          : "You need to work hard!"}
      </h1>
      <br />
      <h1 className="text-center">
        {" "}
        You got {level}{" "}
        <span>points.</span>
      </h1>
      <button
        className="bg-gray-800 hover:bg-gray-700 w-28 py-1 rounded mt-10 mx-auto block"
        onClick={() => window.location.reload()}
      >
        Restart
      </button>
    </div>
  );
};

export default QuizResult;
