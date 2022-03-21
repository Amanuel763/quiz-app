import { useContext, createContext, useState } from 'react';
import axios from 'axios';


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [waiting, setWaiting] = useState(true)
    const [loading, setLoading] = useState(false)
    const [question, setQuestion] = useState([])
    const [index, setIndex] = useState(0)
    const [correct, setCorrect] = useState(true)
    const [error, setError] = useState(false)
    const [quiz, setQuiz] = useState({
        amount: 10,
        category: "sports",
        difficulty: "ease",
    });

    const [modal, setModal] = useState(false);

    const fetchQuestions = async () => {
        setLoading(true);
        setWaiting(false);
        const response = await axios("https://opentdb.com/api.php?amount=10").catch((err) => console.log(err))
        if (response) {
            const data = response.data.results;
            if (data.length) {
                setQuestions(data);
                setLoading(false);
                setWaiting(false);
                setError(false);
            } else {
                setWaiting(true);
                setLoading(true);
            }
        } else {
            setWaiting(true);
        }
    }
    return <AppContext.Provider>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };

