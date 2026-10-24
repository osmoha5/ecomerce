import {useState, useEffect} from 'react'
import { IoMdMenu } from "react-icons/io";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom"
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from 'react-redux';

function Header(){

    const numberOfItem = useSelector((state)=> state.cart.items)
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen= ()=>{
        setIsOpen(true)
    }
    const handleClose = ()=>{
        setIsOpen(false)
    }
    useEffect(()=>{
        const handlescroll = ()=>{
            if(window.scrollY > 50){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handlescroll);
        return () => window.removeEventListener('scroll', handlescroll);
    }, []);

    return (
    <div className={`fixed lg:mt-20 ${isOpen === true ? "mt-52" : "mt-16"} lg:flex max-w-250 w-full mt-20 itema-center justify-between ${isScrolled ? 'bg-gray-500' : 'bg-orange-800'} w-250 p-2 place-self-center mt-4 bg-blue-800 text-white rounded-2xl`}>
         <h1 className="text-xl font-bold">E-suuq</h1>
          <ul style={{display: isOpen === true ? "block" : ""}} className="lg:flex hidden space-x-4 text-2xl cursor-pointer">
          <Link to="/">
          <li>Home</li>
          </Link>
           <Link to="/Products">
            <li>products</li>
            </Link>
           
            <Link to="/AboutUs">
            <li>About</li>
            </Link>
            
            <Link to="contacts">
            <li>contacts</li>
            </Link>
          </ul>
          <div className='hidden lg:flex'style={{display: isOpen === true ? "block" : ""}}  >
            <button className="bg-orange-500 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded mx-4 cursor-pointer">sign In</button>
            <button className="bg-green-500 hover:bg-yellow-700 text-white font-bold py-1 px-4 rounded cursor-pointer">sign Up</button>
          </div>
          <div className='lg:hidden absolute right-4 top-2'>
            <IoMdMenu style={{display: isOpen === true ?  "none" : "block"}} onClick={handleOpen} className='text-3xl' />
             <MdOutlineRestaurantMenu onClick={handleClose} style={{display: isOpen === true ? "block" : "none"}} className='text-3xl' />

          </div>
          <Link to='/Cart'>
          <div className='relative'>
            <p className='text-3xl'><TiShoppingCart /></p>
            <p className='bg-blue-800 w-5 h-5 rounded-full text-white text-center leading-5 absolute top-4 right-4'>{numberOfItem.length}</p>
          </div>
          </Link>
    </div>
    )
} export default Header