import axios from 'axios';
import React, { useState } from 'react';
import img from '../images/rdem.png'

function Redeem() {
    const [amount, setAmount] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [info, setInfo] = useState('');

    const handleRedeem = () => {
        if (amount <= 0) {
            setInfo('Please enter a valid amount.');
            return;
        }

        if (!cardNumber) {
            setInfo('Please enter a valid card number.');
            return;
        }
        const payload = {
            cardNumber: cardNumber,
            amount: amount,
            userId: '1'
        };

        axios.post('https://aptech.heritagejewels.com.pk/microservices/addtransaction.php', payload)
            .then((response) => {
                console.log(response.data); 
                let res = JSON.parse(response.data)
                if (res.success === true) {
                    setInfo(
                        <>
                            <div className='d-flex justify-content-center flex-column'>
                                <img src={img} alt='confirmation'/>
                                <h1 className='text-center'> Congratulations! </h1>
                                <h3 className='text-center'> redemption succesful</h3>
                            </div>
                        </>
                    )
                    setTimeout(() => {
                        setInfo('')
                    }, 5000);
                } else {
                    setInfo("Redeem failed")
                }
            })
            .catch((error) => {
                console.error(error);
                setInfo('Error occurred. Please try again.');
            });
    };

    return (
        <div className="container-fluid">
            <div className="d-flex flex-column justify-content-center">

                <input
                    className="form-control mt-5" type="text" placeholder="Enter card number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                <input
                    className="form-control mt-2" type="number" placeholder="Enter redeem amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <br />
                <button
                    className="btn btn-outline-success" onClick={handleRedeem}> Redeem </button>
                {info && <p>{info}</p>}
            </div>
        </div>
    );
}

export default Redeem;