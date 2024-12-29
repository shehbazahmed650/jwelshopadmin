import { useState, useEffect } from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import axios from 'axios';

DataTable.use(DT);

function Giftcard() {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)
    useEffect(() => {

        axios
            .get('https://aptech.heritagejewels.com.pk/microservices/transaction.php')
            .then((response) => {
                setData(response.data)
                console.log(response.data[0])
                setShow(true)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])


    return (
        <>



            <div className='row my-3'>
                <div className='col-md-4'>

                </div>

                <div className='col-md-4'>
                    <h1 className='text-center'>All transaction details</h1>

                </div>
                <div className='col-md-4'>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-1'>

                </div>
                <div className='col-md-10'>

                    {


                        show ?


                            <DataTable className="Display mx-5 table table-bordered">
                                <thead>
                                    <tr>
                                     
                                      <th>User Id</th>
                                        <th>Card Number</th>
                                       
                                        <th>Amount Withdrawn</th>
                                        <th>Card Date/Time</th>
                                    </tr>
                                </thead>
                                <tbody>

{/* 
                                "id": 1,
    "datecreated": "2024-12-26 13:01:44",
    "cardnumber": "DML202",
    "amount": 100,
    "userid": 1 */}



                                    {data.length > 0 ? (
                                        data.map((item) => (
                                            <tr key={item.id}>
                                           
                                              <td>{item.id}</td>
                                                <td>{item.cardnumber}</td>
                                               
                                                <td>{item.amount}</td>
                                                <td>{item.datecreated}</td>
                                            </tr>
                                        ))
                                    ) : "N0 data Availablee"

                                    }

                                </tbody>
                            </DataTable> : ""

                    }
                    <div className='col-md-1'>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Giftcard
