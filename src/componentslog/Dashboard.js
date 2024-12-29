import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { logout } = useAuth();
    return (
        <>
        <div style={{ padding: '1rem' }} className='d-flex justify-content-center flex-column'>
            <h1 className='text-center'>Dashboard</h1>
            <h4 className='text-center'>Welcome to the protected dashboard!</h4>

                  <h4 className='text-center'>Thankyou for joining <strong>HERITGE JEWELERS</strong></h4>
          
        </div>
        <div className='d-flex justify-content-center'>
         <button className='btn btn-outline-danger btn-lg' onClick={logout} >
         Logout
     </button> 
     </div>
     <div className='mb-50'>
     <hr/>
     <div className='d-flex justify-content-between'>
        <p title='03152612751'>Powered by: shehbaz ahmed</p>
        <p>A developer under development </p>
        <p>cordination with leading jwelers</p>
     </div>
     </div>
     </>
    );
};

export default Dashboard;
