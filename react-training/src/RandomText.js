export default function RandomText() {
  function TextGenerator() {
    const wordList = [
      ["Buy groceries", "Finish project report", "Clean the house", "Call mom"],
      [
        "Exercise for 30 minutes",
        "Check email",
        "Prepare dinner",
        "Read a book",
      ],
      [
        "Attend meeting at 3 PM",
        "Walk the dog",
        "Pick up dry cleaning",
        "Organize desk",
      ],
    ];

    const randomIndex = Math.floor(Math.random() * wordList.length);
    console.log(randomIndex);
    const randomTextList = wordList[randomIndex];
    console.log(randomTextList);
    return randomTextList.map((value, index) => {
      return <li key={index}>{value}</li>;
    });
  }

  return (
    <div>
      <h2>Random Text</h2>
      <ul>{TextGenerator()}</ul>
    </div>
  );
}
