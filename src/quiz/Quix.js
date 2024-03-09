import React from 'react';
import './Quiz.css'

export default class Quiz extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            questions: [
                {   
                    id:1,
                    questionText: 'What is the capital of France?',
                    answerOptions: [
                        { id:1 ,answerText: 'New York', isCorrect: false },
                        { id:2 ,answerText: 'London', isCorrect: false },
                        { id:3 ,answerText: 'Paris', isCorrect: true },
                        { id:4 ,answerText: 'Dublin', isCorrect: false },
                    ],
                },
                {
                    id:2,
                    questionText: 'Who is CEO of Tesla?',
                    answerOptions: [
                        { id:1 ,answerText: 'Jeff Bezos', isCorrect: false },
                        { id:2 ,answerText: 'Elon Musk', isCorrect: true },
                        { id:3 ,answerText: 'Bill Gates', isCorrect: false },
                        { id:4 ,answerText: 'Tony Stark', isCorrect: false },
                    ],
                },
                {
                    id:3,
                    questionText: 'The iPhone was created by which company?',
                    answerOptions: [
                        { id:1 ,answerText: 'Apple', isCorrect: true },
                        { id:2 ,answerText: 'Intel', isCorrect: false },
                        { id:3 ,answerText: 'Amazon', isCorrect: false },
                        { id:4 ,answerText: 'Microsoft', isCorrect: false },
                    ],
                },
                {
                    id:4,
                    questionText: 'How many Harry Potter books are there?',
                    answerOptions: [
                        { id:1 ,answerText: '1', isCorrect: false },
                        { id:2 ,answerText: '4', isCorrect: false },
                        { id:3 ,answerText: '6', isCorrect: false },
                        { id:4 ,answerText: '7', isCorrect: true },
                    ],
                },
            ],
            currentQuestion: 0,
            showScore: false,
            score: 0
        }
    }

    clickHandler(){
        if(this.state.questions.length < 3){
            this.setState(prevState =>{
                return {currentQuestion: prevState.currentQuestion +1}
            })
        }
    }

    render() {
        return (
            <div className='app'>
                {/* next div is for showing user score */}
                    <div className='score-section'>
                       {` You scored ${this.state.currentQuestion} out of 4`}
                    </div>
                    {this.state.questions.map(question =>(
                        <div key={question.id}>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>{this.state.currentQuestion}</span>/ 4
                            </div>
                            <div className='question-text'>{question.questionText}</div>
                        </div>
                        <div className='answer-section'>
                            
                                {question.answerOptions.map(answer =>(<button onClick={event =>this.clickHandler(event)} key={answer.id}>{answer.answerText}</button>))}
                                
                        </div>
                        </div>
                    ))}
            </div>
        )
    }
}
