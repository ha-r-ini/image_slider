import { Fragment,useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Cart({cartitems,setcartitems}){
    const [complete, setcomplete]= useState(false);
    function increasequantity(item){
        if(item.product.stock == item.qty){
            return;
        }
        const updateditems = cartitems.map((i)=>{
            if(i.product._id == item.product._id){
                i.qty++;
            }
            return i;
        })
        setcartitems(updateditems);
    }
    function decreasequantity(item){
        if(item.qty >1){
            const updateditems = cartitems.map((i)=>{
                if(i.product._id == item.product._id){
                    i.qty--;
                }
                return i;
            })
            setcartitems(updateditems);   
        }
        return;
    }
    function removeitem(item){
        const updateditems = cartitems.filter((i)=>{
            if(i.product._id !== item.product._id){
             return true;
            }

        })
        setcartitems(updateditems);   
    }

    function placeorderhandler(){
        fetch(process.env.REACT_APP_API_URL+'/orders',{
            method : 'POST',
            headers :{"content-type":"application/json"},
            body:JSON.stringify(cartitems)}  
        )
        .then(()=>{
            setcartitems([]);
            setcomplete(true);
            toast.success("Order placed successfully");
        })

    }

    return (cartitems.length > 0?
    <><div className="container container-fluid">
        <h2 className="mt-5">Your Cart: <b>{cartitems.length}</b></h2>
        
        <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
               {cartitems.map((item)=>
               (<Fragment>
               <hr />
                <div className="cart-item">
                    <div className="row">
                        <div className="col-4 col-lg-3">
                            <img src={item.product.images[0].image} alt={item.product.name} height="90" width="115"/>
                        </div>
                        <div className="col-5 col-lg-3">
                        <Link to={"/product/"+item.product._id}>{item.product.name}</Link>
                        </div>
                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                            <p id="card_item_price">${item.product.price}</p>
                        </div>
                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                            <div className="stockCounter d-inline">
                                <span className="btn btn-danger minus" onClick={()=>{decreasequantity(item)}}>-</span>
                                <input type="number" className="form-control count d-inline" value={item.qty} readOnly />

								<span className="btn btn-primary plus" onClick={()=>{increasequantity(item)}}>+</span>
                            </div>
                        </div>
                        <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                            <i id="delete_cart_item"  onClick = {()=>{removeitem(item)}}className="fa fa-trash btn btn-danger"></i>
                        </div>
                    </div>
                </div>
               </Fragment>))} 
            </div>

            <div className="col-12 col-lg-3 my-4">
                <div id="order_summary">
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Subtotal:  <span className="order-summary-values">{cartitems.reduce((acc,item)=>(acc+item.qty),0)} units</span></p>
                    <p>Est. total: <span className="order-summary-values">${cartitems.reduce((acc,item)=>(acc+item.product.price *item.qty),0)}</span></p>
    
                    <hr />
                    <button id="checkout_btn" className="btn btn-primary btn-block" onClick={placeorderhandler}>Place Order</button>
                </div>
            </div>
        </div>
    </div></>:(!complete ?<h1 className="mt-5">Cart is empty</h1>: <><h1 className="mt-5">order complete!</h1><p>your order has been placed successfully</p></>) 
        
    );
}