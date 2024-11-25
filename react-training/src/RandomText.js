import React, { Component } from "react";

class RandomText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomTextList: [], 
      isLoaded: false,   
    };
  }

  
  componentDidMount() {
    this.generateRandomTextWithDelay();
  }

  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.randomTextList !== this.state.randomTextList) {
      
    }
  }

  
  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId); 
    }
  }

 
  generateRandomTextWithDelay = () => {
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


    this.timeoutId = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * wordList.length);
      const randomTextList = wordList[randomIndex];


      this.setState({
        randomTextList,
        isLoaded: true,
      });
    }, 10000);
  };

  render() {
    const { randomTextList, isLoaded } = this.state;

    return (
      <div>
        <h2>Random Text</h2>
        {isLoaded ? (
          <ul>
            {randomTextList.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        ) : (
          <p>Loading items, please wait...</p> 
        )}
      </div>
    );
  }
}

export default RandomText;
