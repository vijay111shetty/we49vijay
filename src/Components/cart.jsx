import PropTypes from 'prop-types';
import './cart.css';

function cart_design(vals){
    return(
    <>  
    <div className='col'>
    <div className="card">
        <div className='cart-card'>
            <div className='cart-type'>{vals.type}</div>
            <h1>{vals.cost}</h1>
            <div className='cart-vals'>
                <div>{vals.users}</div>
                <div>{vals.storage}</div>
                <div>{vals.projects}</div>
                <div>{vals.access}</div>
                <div>{vals.project1}</div>
                <div>{vals.support}</div>
                <div>{vals.domain}</div>
                <div>{vals.status}</div>
            </div>
            <div className='cart-button'>
            <button>BUTTON</button>
            </div>
            </div>
            </div>
        </div>
    </>
    )
    // <><div>{vals.type}</div>
    // <div>{vals.cost}</div>
    // <div>{vals.users}</div>
    // <div>{vals.storage}</div>
    // <div>{vals.projects}</div>
    // <div>{vals.access}</div>
    // <div>{vals.projects1}</div>
    // <div>{vals.support}</div>
    // <div>{vals.domain}</div>
    // <div>{vals.status}</div></>
}
cart_design.propTypes = {
    type : PropTypes.string,
    cost : PropTypes.string,
    users : PropTypes.string,
    storage : PropTypes.string,
    projects : PropTypes.string,
    access : PropTypes.string,
    project1 : PropTypes.string,
    support : PropTypes.string,
    domain : PropTypes.string,
    status : PropTypes.string
}

export default cart_design;