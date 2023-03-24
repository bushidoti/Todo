import React , {Fragment} from "react";


const Form = () => {
    return (
        <Fragment>
            <div className='d-grid' style={{height: '100vh'}}>
                <div className={'div_bg  rounded-9 d-flex justify-content-start' } style={{width: '75%' , height: '75%' , placeSelf: 'center'}} dir={'rtl'}>
                        <div className="input-group m-4">
                            <input type="text" className="form-control rounded-5" placeholder="کار مورد نظر را بنویسید"
                                   aria-label="کار مورد نظر را بنویسید" aria-describedby="button-addon2"></input>
                                <button className="btn rounded-5 form-control  glow-on-hover me-1 " type="button" id="button-addon2">ثبت</button>
                        </div>


                </div>

            </div>
        </Fragment>

    )
};

export default Form;