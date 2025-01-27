const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  const Header = (props) => {
    console.log("Header-komponentti");
    console.log(props);
    return (
      <>
        <h1>{props.course.name}</h1>
      </>
    );
  };

  const Content = (props) => {
    console.log("Content-komponentti");
    console.log(props);
    return (
      <>
        {props.parts.map((part, index) => (
          <p key={index}>
            {part.name} {part.exercises}
          </p>
        ))}
      </>
    );
  };

  const Total = (props) => {
    console.log("Total-komponentti");
    console.log(props);
    const totalExercises = props.parts.reduce(
      (sum, part) => sum + part.exercises,
      0
    );

    return (
      <>
        <p>Number of exercises {totalExercises}</p>
      </>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
