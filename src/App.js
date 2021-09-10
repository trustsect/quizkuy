import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent'
import { Row, Col, Container, Button } from 'react-bootstrap'
// import InputData from './components/InputData'

export default function App() {
  const questions = [
  {
    "questionText": "Ibukota Indonesia Adalah?",
    "answerOptions": [
      { "answerText": "Tangerang", "isCorrect": false },
      { "answerText": "Bogor", "isCorrect": false },
      { "answerText": "Bekasi", "isCorrect": false },
      { "answerText": "Jakarta", "isCorrect": true }
    ]
  },
  {
    "questionText": "JABODETABEK Terdiri Dari Wilayah?",
    "answerOptions": [
      { "answerText": "Jakarta, Bogor, Depok, Tangerang, Bekasi", "isCorrect": true },
      { "answerText": "Jawa, Bondowoso, Denpasar, Tulunganggun, Bengawan Solo", "isCorrect": false },
      { "answerText": "Kota Kota di Jawa Barat", "isCorrect": false },
      { "answerText": "Semua Benar", "isCorrect": false }
    ]
  },
  {
    "questionText": "f(x) = 2x + 3",
    "answerOptions": [
      { "answerText": "x = -3/2", "isCorrect": true },
      { "answerText": "x = -3/3", "isCorrect": false },
      { "answerText": "x = 3/3", "isCorrect": false },
      { "answerText": "x = 2/3", "isCorrect": false }
    ]
  },
  {
    "questionText": "Alat Musik Sasando Berasal Dari Daerah?",
    "answerOptions": [
      { "answerText": "Nusa Tenggara Timur", "isCorrect": true },
      { "answerText": "Nusa Tenggara Barat", "isCorrect": false },
      { "answerText": "Kalimantan Barat", "isCorrect": false },
      { "answerText": "Sulawesi Timur", "isCorrect": false }
    ]
  }
  ,
  {
    "questionText": "Kepanjangan Dari HTML Adalah?",
    "answerOptions": [
      { "answerText": "HyperText Markup Language", "isCorrect": true },
      { "answerText": "HyperText Mobile Language", "isCorrect": false },
      { "answerText": "HyperText Markup Low", "isCorrect": false },
      { "answerText": "HyperTools Mobile Language", "isCorrect": false }
    ]
  }
];

  useEffect(() => {
    document.body.style.backgroundColor = "#f1f2f6";
  });
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const nilai = score*2;
  return (
    <>
      <NavbarComponent />
        <Container>
          <div className='app pt-5'>
            <div className='mt-3 bg-white question-box p-3 rounded-3 mx-auto'>
            {showScore ? (
              <div className='score-section'>
                Score : {nilai} <br/>
                Benar : {score}
              </div>

            ) : (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='question-text my-3'>{questions[currentQuestion].questionText}</div>
              </div>

              <div className='answer-section'>
                <Row>
                  {questions[currentQuestion].answerOptions.map((answerOption) => (
                    <Col sm="auto" className="w-100">
                      <Button
                        className='mb-1 border-light w-100'
                        style={{
                          background: '#54a0ff',
                        }}
                        onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                      >
                        {answerOption.answerText}
                      </Button>
                    </Col>
                  ))}
                </Row>
              </div>
            </>
          )}
          </div>
        </div>
      </Container>
    </>
  );
}
