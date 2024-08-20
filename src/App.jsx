import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Menu from './pages/menu/Menu';
import PhoneLogin from './pages/menu/pages/PhonePage/PhoneLogin';
import LoginPone from './pages/menu/pages/form/LoginPone';
import { useEffect, useState } from 'react';
import RegisterPhone from './pages/menu/pages/form/RegisterPhone';
import About from './pages/menu/pages/About';
import Service from './pages/menu/pages/Service';
import { ToastContainer } from 'react-toastify';
import Dashbord from './pages/home/dashbord/dashbord';
import { useDispatch, useSelector } from 'react-redux';
import Witdraw from './pages/home/dashbord/charts/component/wallet/Witdaw';
import Banks from './pages/home/dashbord/charts/component/wallet/BanksDepo';
import Skrill from './pages/home/dashbord/charts/component/wallet/Skrill';
import Paypal from './pages/home/dashbord/charts/component/wallet/Paypal';
import MasterCard from './pages/home/dashbord/charts/component/wallet/MasterCard';
import DoesNotWork from './pages/home/dashbord/charts/component/wallet/DoesNotwork';
import CashWidraw from './pages/home/dashbord/charts/component/wallet/pull/CashWidraw';
import BanksPull from './pages/home/dashbord/charts/component/wallet/pull/BanksPull';
import MasterCardPull from './pages/home/dashbord/charts/component/wallet/pull/components/MasterCardPull';
import SkrillPull from './pages/home/dashbord/charts/component/wallet/pull/components/SkrillPull';
import PaypalPull from './pages/home/dashbord/charts/component/wallet/pull/components/PaypalPull';
import LoadingPage from './pages/home/dashbord/LoadingPage';
import axios from 'axios';
import { getUserById } from './redux/api/authApi';
import { useRef } from 'react';
import VerFyEmail from './pages/menu/pages/verFyEmail';
import ForgatEmail from './pages/menu/pages/forgatPass/ForgatEmail';
import ResetPass from './pages/menu/pages/forgatPass/ResetPass';

function App() {

  const [sidiabrH,setSidibarH] = useState(false)
  const [sidibar,setsidibar] = useState(true)
  const [imgBank,setImgBank] =useState("")
  const {user} = useSelector(state=> state.auth)
  const {userAdmin} = useSelector(state=> state.auth)


  return (
    <Router>
    <ToastContainer />
    <Routes>
      <Route path='*' element={user ? <Dashbord  /> : <Menu sidiabrH={sidiabrH}  setSidibarH={setSidibarH}  sidibar={sidibar}  setsidibar={setsidibar} />} />
      <Route path='/' element={user ? <Dashbord  /> : <Menu sidiabrH={sidiabrH}  setSidibarH={setSidibarH}  sidibar={sidibar}  setsidibar={setsidibar} />} />
      <Route path='/Login' element={!user ? (<LoginPone sidiabrH={sidiabrH}setSidibarH={setSidibarH} sidibar={sidibar}setsidibar={setsidibar}/>) : user?._id ? (<Dashbord />) : ( <Menu /> ) }/>
      <Route path='/Register' element={!user ? <RegisterPhone sidiabrH={sidiabrH}  setSidibarH={setSidibarH}  sidibar={sidibar}  setsidibar={setsidibar} /> : <Dashbord/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Service' element={<Service/>} />
      <Route path='/Dashbord' element={user?.verfyEmail ? <Dashbord user={userAdmin} /> :window.innerWidth < 700 ? <LoginPone sidiabrH={sidiabrH}  setSidibarH={setSidibarH}  sidibar={sidibar}  setsidibar={setsidibar}  /> : <Menu />  } />
      <Route path='/Dashbord/witdraw' element={user?.verfyEmail && <Witdraw  />} />
      <Route path='/Dashbord/Deposit' element={user?.verfyEmail && <Banks setImgBank={setImgBank}/>} />
      <Route path='/Dashbord/Deposit/skrill' element={user?.verfyEmail && <Skrill imgBank={imgBank}/>} />
      <Route path='/Dashbord/Deposit/paypal' element={user?.verfyEmail && <Paypal user={user} imgBank={imgBank}/>} />
      <Route path='/Dashbord/Deposit/master-card' element={user?.verfyEmail && < MasterCard  imgBank={imgBank}/>} />
      <Route path='/Dashbord/Deposit/Does-not-word' element={user?.verfyEmail && <DoesNotWork  imgBank={imgBank}/>} />
      <Route path='/Dashbord/Pull/Master-card' element={user?.verfyEmail && <MasterCardPull  imgBank={imgBank}/>} />
      <Route path='/Dashbord/Pull/Skrill' element={user?.verfyEmail && <SkrillPull  imgBank={imgBank}/>} />
      <Route path='/Dashbord/Pull/Paypal' element={user?.verfyEmail && <PaypalPull  imgBank={imgBank}/>} />
      <Route path='/Dashbord/Pull/' element={user?.verfyEmail && <BanksPull setImgBank={setImgBank} />} />
      <Route path='/:userId/verify/:token' element={ <VerFyEmail/> } />
      <Route path='/reset-password/' element={<ForgatEmail/>} />
      <Route path='/reset-password/:userId/:token' element={<ResetPass/>} />
    </Routes>
    </Router>
  );
}

export default App;
