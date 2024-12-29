import { useState } from 'react';
import Customhokk from './Customhokk';
import Redeem from './Redeem';

function Giftcard() {
    const [cardNum, setCardNum] = useState("")
    const [submittedCard, setSubmittedCard] = useState("")
    const [show, setShow] = useState(false)
    const { data, loading, error } = Customhokk(`https://aptech.heritagejewels.com.pk/microservices/singlecard.php?cardnumber=${submittedCard}`)
    function handleChange(e) {
        if (e.keyCode === 13) {
            setShow(true)
            setSubmittedCard(cardNum)
        }

    }

    return (
        <>
            <div className='row my-3'>
                <div className='col-md-3'>

                </div>

                <div className='col-md-6'>
                    <h1 className='text-center'>Swipe With Your Card Number</h1>

                    <input className='form-control' type="text" onKeyUp={handleChange} onChange={(e) => setCardNum(e.target.value)} value={cardNum} placeholder='Search' />


                </div>
                <div className='col-md-3'>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3'>

                </div>
                <div className='col-md-6' >

                    {(!data) ? error : (


                        show ?
                            loading ? (      // if loading turns true show loading else show datatable.  i have made loading true conditionaly
                                <h2>Please Wait loading in progress</h2>
                            ) :



                                data.length > 0 ? (
                                    data.map((item) => (

                                        <>
                                            <h3 className='text-center text-decoration-underline'>Individual Customer Details</h3>
                                            <div className='d-flex flex-column  align-content-center' key={item.cardnumber} style={{ border: "solid 1px black", backgroundColor: "cornSilk", borderRadius: "5px" }}>

                                                <h4>Card Number :  <span>{item.cardnumber}</span></h4>
                                                <h4>Card Balance : <span>{item.cardbalance} PKR</span></h4>
                                                <h4>Card Value : <span>{item.cardvalue} PKR</span></h4>
                                                <h4>Card Creation Date / Time : <span>{item.creadteddate}</span></h4>
                                            </div>
                                            <Redeem />
                                        </>


                                    ))

                                ) : <h1>
                                    Invalid Card number please put correct card number  </h1>



                            : ""
                    )
                    }
                </div>
                <div className='col-md-3'>
                </div>

            </div>
        </>

    )
}
export default Giftcard