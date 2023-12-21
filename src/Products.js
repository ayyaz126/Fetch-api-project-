import React, { useEffect, useState } from 'react'

function Products() {
  const [Data , setData ]= useState([]);
  useEffect(() => {
   fetch("https://fakestoreapi.com/users").then((res)=> res.json()).then((output) =>{
     setData(output);
   })
 }, []);
        
    //  useEffect (()=>{
    //   fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((output)=>{
    //     setData(output);
    //   })
    //  },[])
  return (
    <div>
              <div className="fixed-top">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
      </div>
      <hr/> 
      <hr/>
      <hr/>
      <hr/>
       <div>
         <h1 className="text-center display-3  lead "> LIST DETAIL OF USERS  </h1>
           <table className=" table table-bordered" >
            <tr>
                
                 <th>  Id  </th>
                 <th> Email </th>
                 <th> Usernam </th>
                 <th> password </th>
                 <th colSpan={2} > name </th>
                 <th > Phone NO# </th>

                {/* <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description </th>
                <th>Category </th>
                <th>image</th>
                <th colSpan={2}> Rating </th> */}

            </tr>
             {Data.map((pny) =>(   
             <tr>
                 
                <td> {pny.id } </td>
                <td> {pny.email} </td>
                <td> {pny.username} </td>
                <td> {pny.password} </td>
                <td> {pny.name.firstname} </td>
                <td> {pny. name. lastname}  </td>  
                <td> {pny.phone}  </td>             
                

             </tr>
             ))}
           </table>
       </div>
    </div>
  )
}

export default Products