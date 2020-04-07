import React ,{useEffect} from 'react';


const Card=({data})=>{
  return(
     <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12 my-2">
    <div class="card card-container-2">
      <div class="card-body" style={{color:"#474747",fontWeight:"700",fontSize:'20px'}}>
        <div class="card-title mb-0" style={{fontWeight:"700",fontSize:'20px'}}>#{data.id}</div>
        <div class="card-text">
        <div className="ml-2 mr-auto rounded mb-3 mt-5 bar-1" >
        </div>
        <div className="ml-2 mr-auto rounded mb-3 bar-2">
        </div>
        </div>
        {/* <div> */}
        <div className="text-left ml-2 mt-5" style={{color:"#474747",fontWeight:"700,fo"}}>
        Quantity: <span className="pl-2">{data.quantity}</span>
        
      
      </div>
      </div>
    </div>
  </div>
  )
}
const Disrtibution=({rootdata})=>{

useEffect(()=>{
console.log(rootdata);
},[rootdata])

    return(
        <div>
        <div className="row dist-container py-4">
        {rootdata.length<=0 && (<div className="text-danger mx-auto">No Items to show</div>)}
       {rootdata.length>0 &&  rootdata.map((e,i)=>(<Card key={i} data={e}/>))}
       
  

</div>
</div>
    )
}
export default Disrtibution;