import React from 'react'

function Grid (){
    return(
        <React.Fragment>
            <div className="px-3">
                <div className="pt-3">
                    <div className="grid">
                        <div className="col-12 pb-3">
                            <h1>Grid</h1>
                            <hr/>
                        </div>
                        <div className="col-12 obj-test mb-1">12 col</div>
                        
                        <div className="col-12 col-md-5 obj-test mb-1">5 col</div>
                        <div className="col-12 col-md-1 obj-test mb-1">1 col</div>
                        <div className="col-12 col-md-6 obj-test mb-1">6 col</div>

                        <div className="col-6 col-md-4 obj-test mb-1">4 col</div>
                        <div className="col-6 col-md-2 obj-test mb-1">2 col</div>
                        <div className="col-6 col-md-2 obj-test mb-1">2 col</div>
                        <div className="col-6 col-md-4 obj-test mb-1">4 col</div>

                        <div className="col-6 col-md-3 obj-test mb-1">3 col</div>
                        <div className="col-6 col-md-3 obj-test mb-1">3 col</div>
                        <div className="col-6 col-md-1 obj-test mb-1">1 col</div>
                        <div className="col-6 col-md-1 obj-test mb-1">1 col</div>
                        <div className="col-12 col-md-1 obj-test mb-1">1 col</div>
                        <div className="col-12 col-md-3 obj-test mb-1">3 col</div>

                        <div className="col-12 example p-3">
                            example
                        </div>
                    </div>
                </div>
                
                <div className="pt-3">
                    <div className="grid">
                        <div className="col-12 pb-3">
                            <h2>Alineación</h2>
                            <hr/>

                            <div className="grid bg-light border h-120 align-items-start my-2">
                                <div className="col-4 obj-test">col 1</div>
                                <div className="col-4 obj-test">col 2</div>
                                <div className="col-4 obj-test">col 3</div>
                            </div>

                            <div className="grid bg-light border h-120 align-items-center my-2">
                                <div className="col-4 obj-test">col 1</div>
                                <div className="col-4 obj-test">col 2</div>
                                <div className="col-4 obj-test">col 3</div>
                            </div>

                            <div className="grid bg-light border h-120 align-items-end my-2">
                                <div className="col-4 obj-test">col 1</div>
                                <div className="col-4 obj-test">col 2</div>
                                <div className="col-4 obj-test">col 3</div>
                            </div>

                            <div className="grid bg-light border h-120 align-items-baseline my-2">
                                <div className="col-4 obj-test">col 1</div>
                                <div className="col-4 obj-test">col 2</div>
                                <div className="col-4 obj-test">col 3</div>
                            </div>

                            <div className="grid bg-light border h-120 align-items-stretch my-2">
                                <div className="col-4 obj-test">col 1</div>
                                <div className="col-4 obj-test">col 2</div>
                                <div className="col-4 obj-test">col 3</div>
                            </div>

                            <div className="grid bg-light border h-120 my-2">
                                <div className="col-4 obj-test align-self-start">col 1</div>
                                <div className="col-4 obj-test align-self-center">col 2</div>
                                <div className="col-4 obj-test align-self-end">col 3</div>
                            </div>

                            <div className="example p-3">
                                example
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-3">
                    <div className="grid">
                        <div className="col-12 pb-3">
                            <h2>Orden</h2>
                            <hr/>

                            <div className="grid bg-light my-2">
                                <div className="col-4 obj-test order-md-3">orden 1</div>
                                <div className="col-4 obj-test order-md-2">orden 2</div>
                                <div className="col-4 obj-test order-md-1">orden 3</div>
                            </div>

                            <div className="example p-3">
                                example
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </React.Fragment>
    )
}

export default Grid