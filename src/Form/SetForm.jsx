const SetupForm = () => {
    return (
        <main>
            <section className="quiz quiz-small">
                <h2>
                    setup quiz
                </h2>
                <div className="form-control">
                    <label htmlFor="amount">number of questions</label>
                    <input type="number" name="amount" id="amount" className="form-input" min={1} max={20}></input>
                </div>
                <div className="form-control">
                    <label htmlFor="category">
                        Category
                    </label>
                    <select name="category" id="category" className="form-input">
                        <option value="sports">
                            Sports
                        </option>
                        <option value="history">
                            History
                        </option>
                        <option value="politics">
                            Politics
                        </option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="difficulty">Difficulty</label>
                    <select name="difficulty" id="difficulty" className="form-input">
                        <option value="easy">
                            easy
                        </option>
                        <option value="medium">
                            medium
                        </option>
                        <option value="hard">
                            hard
                        </option>
                    </select>
                    <p className="error">can't generate questions, try again</p>
                    <button type="submit" className="submit-btn">start</button>
                </div>
            </section>
        </main>
    )
}

export default SetupForm