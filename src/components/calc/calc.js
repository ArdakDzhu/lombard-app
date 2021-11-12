import React, { useEffect, useState } from 'react';
import styles from './calc.module.scss';

export default function Calc() {

    const [result, setResult] = useState('');
    const [inputSum, setInputSum] = useState(0);
    const [inputDays, setInputDays] = useState(0);
    const [sel, setSel] = useState('Золото');
    const [resultAll, setResultAll] = useState('');

    useEffect(()=> {
        if (sel === 'Золото') {
            if (inputSum < 49999) {
                const result = (inputSum * 0.0027) * inputDays
                setResult(result)
            } 
            if (inputSum > 49999) {
                const result = (inputSum * 0.0025) * inputDays
                setResult(result)
            } 
            if (inputSum > 79999) {
                const result = (inputSum * 0.0022) * inputDays
                setResult(result)
            } 
            if (inputSum > 99999) {
                const result = (inputSum * 0.002) * inputDays
                setResult(result)                
            }
        }

        if (sel === 'Авто') {
            if (inputSum < 49999) {
                const result = (inputSum * 0.0027) * inputDays
                setResult(result)
            } 
            if (inputSum > 49999) {
                const result = (inputSum * 0.0025) * inputDays
                setResult(result)
            } 
            if (inputSum > 79999) {
                const result = (inputSum * 0.0022) * inputDays
                setResult(result)
            } 
            if (inputSum > 99999) {
                const result = (inputSum * 0.002) * inputDays
                setResult(result)                
            }
        }

        if (sel === 'Электроника') {
            if (inputSum < 9999) {
                const result = (inputSum * 0.005) * inputDays
                setResult(result)
            } 
            if (inputSum > 9999) {
                const result = (inputSum * 0.004) * inputDays
                setResult(result)
            } 
        }

    },[inputSum, inputDays, sel])

    useEffect(() => {
        const setResultAllValue = +inputSum + result;
        setResultAll(setResultAllValue)
    })

    return (
        <div className={styles.container}>
            <label>
                Выберите вид залога:
                <select onChange={(event) => setSel(event.target.value)}>
                    <option>Золото</option>
                    <option>Авто</option>
                    <option>Электроника</option>
                </select>
            </label>
            
            <label>
                Сумма займа:
                <input onChange={(event) => setInputSum(event.target.value)} type="number" placeholder="Введите сумму"/>   
            </label>
            
            <label>
                Срок займа:
                <input onChange={(event) => setInputDays(event.target.value)} type="number" placeholder="Кол-во дней"/>   
            </label>   
            
            <label>
                Сумма %:
                <span>{result} сом</span>   
            </label>   

            <label>
                Сумма возврата:
                <span>{resultAll} сом</span>   
            </label>                
        </div>
    )
};
