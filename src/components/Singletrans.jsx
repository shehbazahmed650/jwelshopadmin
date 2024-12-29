import { useEffect, useState } from 'react';
import Transhook from '../components/Singletransactionhook';

function Singletrans() {

    const [show, setShow] = useState(false)
    const { data, loading, error } = Transhook(`https://aptech.heritagejewels.com.pk/microservices/transaction.php?userid=1`)

    useEffect(() => {
        setShow(true)
    }, [])

    return (
        <>
            <div className='row my-3'>
                <div className='col-md-3'>

                </div>

                <div className='col-md-6'>
                    <h1 className='text-center'>Userwise Transaction details</h1>



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
                                            <div className="row">
                                                <div className="col-md-1"></div>
                                                <div className="col-md-10">
                                                    <div className='d-flex flex-column  align-content-center' key={item.datecreated} style={{ border: "solid 1px black", backgroundColor: "cornSilk", borderRadius: "5px" }}>
                                                        {/* "id": 1,
                                                 "datecreated": "2024-12-26 13:01:44",
                                                  "cardnumber": "DML202",
                                                     "amount": 100,
                                                     "userid": 1 */}
                                                        <h5>ID :  <span>{item.id}</span></h5>
                                                        <h5>Card Number :  <span>{item.cardnumber}</span></h5>
                                                        <h5>Amount Redeemed : <span>{item.amount} PKR</span></h5>
                                                        <h5>Card Creation Date / Time : <span>{item.datecreated}</span></h5>

                                                    </div>
                                                </div>
                                                <div className="col-md-1"></div>
                                            </div>
                                        </>


                                    ))

                                ) : ""



                            : ""
                    )
                    }
                </div >
                <div className='col-md-3'>
                </div>

            </div>
        </>

    )
}
export default Singletrans