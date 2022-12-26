import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreaters } from '../state/index'

const Shop = () => {
    const dispatch = useDispatch();
    const balance = useSelector(state => state.amount)
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreaters, dispatch);
    return (
        <>
            <div className="container text-center">
                <h2 className='mt-2'>Deposit/Withdraw Money</h2>
                <button className='btn btn-primary' onClick={()=>withdrawMoney(100)}>-</button>
                <span className='mx-3'>Update Balance ({balance})</span>
                <button className='btn btn-primary' onClick={()=>depositMoney(100)}>+</button>
            </div>
        </>
    )
}

export default Shop