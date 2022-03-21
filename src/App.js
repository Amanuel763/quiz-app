import './App.css';
import SetupForm from './Form/SetForm'
import Modal from './Modal/modal'
import Loading from './Loading/Loading'

function App() {
  return (
    <main>
      <section className='quiz'>
        <p className='correct-answers'>
          Correct Answers: 1
        </p>
        <article className='container'>
          <h2>
            text
          </h2>
          <div className='btn-container'>

          </div>
        </article>
        <button className='next-question'>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
