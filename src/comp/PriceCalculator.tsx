import React, { useEffect, useState } from 'react';
import './PriceCalculator.css'; // 引入样式文件

const PriceCalculator: React.FC = () => {
    const [count, setCount] = useState<number>(1);
    const [weight, setWeight] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [result, setResult] = useState<number>(0);


    const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setCount(value);
    };


    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setWeight(value);
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setPrice(value);
    };
    
    function calculatePrice () {
        if (weight <= 0 || price <= 0) {
            setResult(0);
            return;
        }

        const pricePerGram = price / (weight*count);
        const priceFor500g = pricePerGram * 500;
        console.log(`price is `, price, `weight is `, weight)
        setResult(parseFloat(priceFor500g.toFixed(2))); // 保留两位小数
    };

    useEffect(() => {
        calculatePrice()
    }, [weight, price, count]);


    const handleReset = () => {
        setWeight(0);
        setPrice(0);
        setCount(1);
        setResult(0);
    };

    return (
        <div className="price-calculator-container">
            <h1>500g商品价格计算器</h1>
            <div className="input-group">
                <label>商品价格(元):</label>
                <input
                    type="number"
                    placeholder="请输入商品价格"
                    value={price === 0 ? '' : price}
                    onChange={handlePriceChange}
                />
            </div>
            <div className="input-group">
                <label>商品重量(克):</label>
                <input
                    type="number"
                    placeholder="请输入商品重量"
                    value={weight === 0 ? '' : weight}
                    onChange={handleWeightChange}
                />
            </div>
            <div className="input-group">
                <label>商品数量:</label>
                <input
                    type="number"
                    placeholder="请输入商品数量"
                    value={count}
                    onChange={handleCountChange}
                />
            </div>
            {result !== 0 && <p className="result">500克价格: {result} 元</p>}
            <button className="calculate-button" onClick={handleReset}>重置</button>
        </div>
    );
};

export default PriceCalculator;