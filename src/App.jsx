import React, { useState } from 'react'
import Head from './components/Head'
import TableRow from './components/TableRow'
import Error from './components/Error';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  // Mahsulot qo'shish uchun funksiya start//
  function AddProduct() {
    const newProduct = {
      id:Math.random(),
      name: name,
      price: price
    }
    if(name.length>0 && price.length>0){
      setData([...data, newProduct]);
      notify();
    }else{
      notifyError();
    }

    setName('');
    setPrice('')
  }
  //Mahsulotni olib tashlash fuksiyasi//
  function Delete(delData){
    setData(data.filter((item)=>{return  item.id!=delData.id}))
  }
  /// Mahsulot qo'shish funksiyasi end//
  function notify(){
    toast.success("Mahsulot muvaffaqiyatli qo'shildi!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  function notifyError(){
    toast.error("Kerakli qatorlarni to'ldiring", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  const [color,bcolor]=useState('lightblue');
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className='card w-50 p-4 d-flex flex-column align-items-center mt-5' style={{backgroundColor:color}}>  
          <div className="div w-100 d-flex">
            <button className='btn btn-outline-dark m-2' onClick={()=>bcolor('grey')}>Black</button>
            <button className='btn btn-outline-primary m-2' onClick={()=>bcolor('white')}>White</button>
          </div>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='form-control w-75 m-1' placeholder='Maxsulot nomini kiriting...' />
        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className='form-control w-75 m-1' placeholder='Maxsulot narxini kiriting...' />
        <button className='btn btn-success w-50 mx-auto m-2' onClick={AddProduct} >Maxsulot qo'shish</button>

        {data.length ?
          <table className='table table-bordered'>
            <Head />
            <tbody>
              {data.map((item, ind) => <TableRow item={item} index={ind} delete={Delete} />)}
            </tbody>
          </table>
          :
          <Error />
        }

      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      </div>
  )
}

