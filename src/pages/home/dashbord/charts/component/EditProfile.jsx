import React, { useEffect, useState } from 'react'
import './css/EditProf.css'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import Country from './Components/Country';
import PhoneNumber from './Components/PhoneNumber';
import EditPass from './Components/EditPass';
import './css/editpass.css'
import {Blocks , ThreeDots} from 'react-loader-spinner' 
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaArrowRight,} from "react-icons/fa";
import {useDispatch, useSelector} from 'react-redux'
import Swal from 'sweetalert2'
import { Logout } from '../../../../../redux/api/authApi';

function EditProfile({userInfo,setAccount,setMont}) {

    const [user,setUser] = useState(JSON.parse(localStorage.getItem('userInfo')))
    const [fileImage,setfileImg] = useState(null)
    const [loadingFile,setloadingFile] = useState(false)
    const [loadingUpdate,setloadingUpdate] = useState(false)
    const [editapss,setEditPass] = useState(false)
    const [username,setusername] = useState(user?.username)
    const [adress,setadress] = useState(user?.adress)
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [sexy,setsexy] = useState('Men')
    const [age,setage] = useState(user?.age)
    const [phone, setPhone] = useState(user?.phone);
    const [city,setcity] = useState(user?.city)
    const [codepostale,setcodepostale] = useState(user?.codepostale)
    const [editPass,seteditPass] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const upload = () => {
        const fileSettig = document.getElementById('fileSettigImg');
        fileSettig.click();
      };

    const handleFileChange = (e) => {
        setfileImg(e.target.files[0]);
        console.log(e.target.files[0]);
      };

    useEffect(()=>{
        const formdata = new FormData()
        formdata.append('image',fileImage)
        if(fileImage){
            setloadingFile(true)
            const updateImgProfile = async()=>{
                await axios.post(`${process.env.REACT_APP_API_URL}/api/v2002/auth/img/${user?._id}`,formdata,{
                    headers : {
                      Authorization : 'bearer ' + user.token
                    }
                   }
                ).then((res)=>{
                    setloadingFile(false)
                    localStorage.setItem('userAdmin',JSON.stringify(res.data))
                    toast.success('The image has been modified successfully')
                    setMont(res.data)
                }).catch(err=>{
                    console.log(err);
                })
            }
            updateImgProfile()
        }
    },[fileImage])
    const updateCompte = async()=>{
        setloadingUpdate(true)
        await axios.put(`${process.env.REACT_APP_API_URL}/api/v2002/auth/profile/${user?._id}`,{
                username : username === "" ? null : username , 
                adress : adress === "" ? null : adress , 
                sexy : sexy === "" ? null : sexy , 
                age : age === "" ? null : age , 
                phoneNumber : !phone ? null : phone , 
                city : city === "" ? null : city , 
                codepostale : codepostale === "" ? null : codepostale , 
        },{
            headers : {
              Authorization : 'bearer ' + user.token
            }
           }).then((res)=>{
            console.log(res.data);
            toast.success('Personal information has been successfully modified')
            setloadingUpdate(false)
            localStorage.setItem('userInfo',JSON.stringify(res.data))
            setTimeout(()=>{
                window.location.reload()
            },1000)
        }).catch((err)=>{
            console.log(err);
        })
    }


  return (
   <div className="Account">
    <div className="Account-container">
    <div className="account-btn-close col-12">
            <h1 onClick={()=>setAccount(false)} className='text-white'>
              <FaArrowRight/>
            </h1>
            </div>
    <div className="Setting">
    <div className="container">
          <div className="profile">
            <h5><FaRegUserCircle /> {user?.username}  </h5>
            <div className="img-Profile">
            {loadingFile ? <Blocks
  height="40"
  width="40"
  color="#4fa94d"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  visible={true}
  /> :  <img id='img-profile-sittings' src={fileImage ? URL.createObjectURL(fileImage) :  user?.profileImg?.url} alt="" />}
               <input onChange={handleFileChange} type="file" id='fileSettigImg' hidden />
                <p >
                <FaCamera onClick={upload} />
                </p>
            </div>
           <div className="inp">
                <h6>username</h6>
            <div className="inp-username">
                <input onChange={(e)=>setusername(e.target.value)} value={username} type="text" placeholder={user?.username ? user?.username :  'username'} />
            </div>
                <h6>age</h6>
            <div className="inp-username">
                <input onChange={(e)=>setage(e.target.value)} value={age} type="Number" placeholder={user?.age ? user?.age : 'age'} />
            </div>
                 <h6>Phone Number</h6>
            <div className="inp-username">
                <PhoneNumber phone={phone} setPhone={setPhone} />
            </div>
                 <h6>sexy</h6>
                 <select onChange={(e)=>setsexy(e.target.value)} >
                    <option  value="men">Men</option>
                    <option  value="woman">Woman</option>
                 </select>
                <h6>city</h6>
            <div className="inp-username">
            <input onChange={(e)=>setcity(e.target.value)} value={city} type="text" placeholder={user?.city ? user?.city : 'city'} />
            </div>
                <h6>adress</h6>
            <div className="inp-username">
            <input onChange={(e)=>setadress(e.target.value)}  value={adress} type="text" placeholder={user?.adress ? user?.adress : 'adress'} />
            </div>
                <h6>code postal</h6>
            <div className="inp-username">
            <input  onChange={(e)=>setcodepostale(e.target.value)} value={codepostale} type="number" placeholder={user?.codepostale ? user?.codepostale : 'code-postal'} />
            </div>
            <div className="edit-pass ">
                <a onClick={()=> seteditPass(true)} className='btn-edit-pass '>Edit Pass!</a>
                 {editPass && <EditPass/>}
            </div>
            <div className="btn-setting">
                <p className={"text-dark"} >série orale ou écrite de mots perçus comme constituant</p>
                <button onClick={updateCompte} className='btn btn-success'>
                {loadingUpdate? <ThreeDots
                        visible={true}
                        height="30"
                        width="30"
                        color="white"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        /> :  'Update' }
            </button>
            </div>
           </div>
                <p className={"text-dark "} >Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une ...
                </p>
          </div>
    </div>
   </div>
    </div>
   </div>
  )
}

export default EditProfile
