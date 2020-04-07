import React,{useState,useEffect} from 'react';
import data_list from './data.json';

const Card=({item,setQuan,quan,setRootdata,rootdata})=>{
    // console.log(id,data[id],data[id].items,data,"<<<<")
  return(
     <div className="col-sm-12 mt-3">
    <div className="card card-container">
      <div className="card-body">
        <div className="card-title mb-0" style={{fontWeight:"700",fontSize:'20px'}}>#{item}</div>
        <div className="card-text">
        <div className="mr-2 ml-auto rounded mb-3 blank-content" >
        </div>
        <div className="mr-2 ml-auto rounded mb-3 blank-content">
        </div>
        </div>
        {/* <div> */}
        <div className="text-right mr-4">
<div>
        <i className="fa fa-minus circle-icon" aria-hidden="true" onClick={(id)=>{
            if(quan[item]>0){
               
               setQuan({...quan,[item]:quan[item]-1});
              
              
            }
        }}></i>
        <span style={{padding:"0px 25px 0px 25px"}}>{quan[item]}</span>
        <i className="fa fa-plus circle-icon" aria-hidden="true" onClick={(id)=>{
                
               console.log(item,quan[item],"<<")
                setQuan({...quan,[item]:quan[item]+1})
                console.log(quan)
                // setData([...data,{...item,items:item.items+1}])

        }}></i>
</div>
        
      <div style={{margin:'18px 5px 0px 0px'}}> { rootdata.filter((e)=>e.id===item).length===1 ? <i className="fa fa-trash" aria-hidden="true" onClick={()=>{
          let k=rootdata;
          k=k.filter((e)=>e.id!==item)
          setRootdata(k)
          
      }}></i>:<button href="#" className="btn btn-order" onClick={()=>{
          if(quan[item]>0){
              setRootdata([...rootdata,{id:item,quantity:quan[item]}])
              setQuan({...quan,[item]:0})
          }
      }}>Order</button>
}

      </div>

      </div>
      </div>
    </div>
  </div>
  )
}

const User=({setRootdata,rootdata})=>{
        const [data,setData]=useState(data_list);
        const [quan,setQuan]=useState({43535:0,56595:0,36789:0,45679:0})
    

        useEffect(()=>{
            console.log(1235)
            // setData()
        },[quan,rootdata])

    return(
        <div>
        <h5 className="ml-5 mt-5 card-container">User Side</h5>
        <div className="row">
        
            {data.map((e,i)=>(<Card key={i} quan={quan} setQuan={setQuan}  item={e} rootdata={rootdata} setRootdata={setRootdata}/>))}
 
 </div>
</div>


    )
}
export default User;