import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Banks({setSkriil,setBanks,setImgBank,setmasterCard,setpaypal}) {

    const navigate = useNavigate()


  return (
     <div className="Account">
        <div className="Account-container text-white">
        <div className="account-btn-close col-12">
            <h1 onClick={()=>navigate(-1)} >
              <FaArrowRight/>
            </h1>
            </div>
            <div className="Banks-text">
            <h6>
                Choose Your Preferred Bank for a Secure Top-Up
            </h6>
            <p>
                Select from a wide range of trusted banks to seamlessly top up your META2FX account. Enjoy fast and secure transactions tailored to your needs.
            </p>
            </div>
        <div className="Account-Banks">
        <div className="Banks-img ">
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717434997/hiepadjbxu3f9vnmx44g.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717434997/hiepadjbxu3f9vnmx44g.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717435021/xgkee5spkncbjnd3os2s.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717435021/xgkee5spkncbjnd3os2s.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717435042/py5gb7lp7yzdcsjp2mud.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717435042/py5gb7lp7yzdcsjp2mud.png" alt="" />
     </div>
     <div className="Banks-img ">
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717435061/rxlcqu537vod5zxjy0ir.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717435061/rxlcqu537vod5zxjy0ir.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717435089/c7mc1dvultskp05jfo4o.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717435089/c7mc1dvultskp05jfo4o.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717435112/hswrjyzb4h8t8qrqivml.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717435112/hswrjyzb4h8t8qrqivml.png" alt="" />
     </div>
     <div className="Banks-img ">
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717435130/t4kmw86wrnx9rpclvnvk.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717435130/t4kmw86wrnx9rpclvnvk.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717435154/f82yfsqwakjmvhu1verb.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717435154/f82yfsqwakjmvhu1verb.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717435178/hqxy9f6c4wxhsaxdrb4t.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717435178/hqxy9f6c4wxhsaxdrb4t.png" alt="" />
     </div>
     <div className="Banks-img ">
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717435198/jr12xsoi5dlsilnvabbh.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717435198/jr12xsoi5dlsilnvabbh.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717438871/rfrfc0qbyi21u2wivz9t.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717438871/rfrfc0qbyi21u2wivz9t.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717438911/cfdwzvb6owl3ooqciio7.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717438911/cfdwzvb6owl3ooqciio7.png" alt="" />
     </div>
     <div className="Banks-img ">
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717438940/qn3ks2abcyv75xq9xcxj.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717438940/qn3ks2abcyv75xq9xcxj.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717438963/vzkgl8txodnltxjrrxqv.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717438963/vzkgl8txodnltxjrrxqv.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717438991/xv2nql90tdniyzbwrqlv.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717438991/xv2nql90tdniyzbwrqlv.png" alt="" />
     </div>
     <div className="Banks-img ">
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717439012/ugbmzt1vxpip2o6hqfms.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717439012/ugbmzt1vxpip2o6hqfms.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717439033/gg4kmnqp7voewhhoui5n.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717439033/gg4kmnqp7voewhhoui5n.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717439058/n4ghmen8aaynb4tn4fvf.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717439058/n4ghmen8aaynb4tn4fvf.png" alt="" />
     </div>
     <div className="Banks-img ">
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717439080/nkzxmw4sq6rie2fqehbe.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717439080/nkzxmw4sq6rie2fqehbe.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717439099/pbz5f2ffgiyhn47tdrmm.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717439099/pbz5f2ffgiyhn47tdrmm.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717439156/sngovs5tlsfvmidnztig.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717439156/sngovs5tlsfvmidnztig.png" alt="" />
     </div>
     <div className="Banks-img ">
     <img  src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717439175/slzw4nvgnlafsqswzfzy.png" alt="" />
    {/*master card */} <img onClick={()=>setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717434835/dxfrcquleskvxffiapxg.png")+navigate('/Dashbord/Deposit/master-card')} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717434835/dxfrcquleskvxffiapxg.png" alt="" />
     <img  src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717584107/wee1h7uvcbaylsthigd6.png" alt="" />
     </div>
     <div className="Banks-img ">
     <img  onClick={()=>setImgBank('http://res.cloudinary.com/dvivzto6g/image/upload/v1717439258/imh48yxvt8lfxzorojwk.png')} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717439258/imh48yxvt8lfxzorojwk.png" alt="" />
   {/*paypal */}    <img onClick={()=>setImgBank('http://res.cloudinary.com/dvivzto6g/image/upload/v1717434571/knuisrpcyfio0umiyxpb.png')+navigate('/Dashbord/Deposit/paypal')} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717434571/knuisrpcyfio0umiyxpb.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717435130/t4kmw86wrnx9rpclvnvk.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717439226/l08imrljmmxcq6rx4as8.png" alt="" />
     </div>
     <div className="Banks-img ">
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717584175/ti1or98hy5kopvsssnnl.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717584175/ti1or98hy5kopvsssnnl.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717584207/wwsjsvr0sc5lf1u7ydb7.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717584207/wwsjsvr0sc5lf1u7ydb7.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717584228/bmvpz4xndtahwqznddlk.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717584228/bmvpz4xndtahwqznddlk.png" alt="" />
     </div>
     <div className="Banks-img ">
     <img  src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717584253/gprzzfgza5ucezctaers.png" alt="" />
   {/*skrill*/}    <img onClick={()=>setImgBank('https://res.cloudinary.com/dvivzto6g/image/upload/v1717433831/dvctnecf3vyla7urfa6u.png')+navigate('/Dashbord/Deposit/skrill')} src="https://res.cloudinary.com/dvivzto6g/image/upload/v1717433831/dvctnecf3vyla7urfa6u.png" alt="" />
     <img  src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717584279/a5esrlpobenwmrlnrenf.png" alt="" />
     </div>
     <div className="Banks-img ">
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717584305/qoiovuc0soz5chmkttov.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717584305/qoiovuc0soz5chmkttov.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717584328/e7vdkpbncybyire0j01s.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717584328/e7vdkpbncybyire0j01s.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717584354/pwddnmkdyjiarggaa9zw.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717584354/pwddnmkdyjiarggaa9zw.png" alt="" />
     </div>
     <div className="Banks-img ">
    {/*visa*/}   <img onClick={()=>setBanks(false)+setmasterCard(true)} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717434605/bcuakypcrspzjhtcvrf2.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717584376/bz07ufdwl6zhldlk4rvx.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717584376/bz07ufdwl6zhldlk4rvx.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717584406/tvfkshylkzmrvpvcuew5.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717584406/tvfkshylkzmrvpvcuew5.png" alt="" />
     </div>
     <div className="Banks-img ">
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717584426/f0sktlehqfmvbmflnpem.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717584426/f0sktlehqfmvbmflnpem.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717584451/lbzjj45myw3mjthio3z9.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717584451/lbzjj45myw3mjthio3z9.png" alt="" />
     </div>
     <div className="Banks-img ">
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717584490/kkocdq5o4vjupttqwcar.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717584490/kkocdq5o4vjupttqwcar.png" alt="" />
     <img onClick={()=>navigate('Does-not-word')+setImgBank("http://res.cloudinary.com/dvivzto6g/image/upload/v1717584523/e5dl9jtio0rttdszlie7.png")} src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717584523/e5dl9jtio0rttdszlie7.png" alt="" />
     </div>
        </div>
       </div>
     </div>
  )
}

export default Banks

