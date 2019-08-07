import React from 'react'

function Flex (){
    return(
        <React.Fragment>
            <div className="px-3">

                <div className="pt-3">
                    <div className="grid">
                        <div className="col-12 pb-3">
                            <h1>Flex</h1>
                            <hr/>
                        </div>
                        <div className="col-12 mb-3">
                            <span className="obj-test d-flex">objeto 1</span>
                        </div>
                        <div className="col-12 mb-3">
                            <span className="obj-test d-flex-inline">objeto 1</span>
                        </div>
                        <div className="col-12 example p-3">
                            example
                        </div>
                    </div>
                </div>

                <div className="pt-3">
                    <div className="grid">
                        <div className="col-12 pb-3">
                            <h2>Dirección items</h2>
                            <hr/>
                        </div>
                        <div className="col-12 bg-light border mb-3">
                            <div className="d-flex flex-row">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                            <div className="d-flex flex-row-reverse">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex flex-md-column mb-3">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                            <div className="d-flex flex-column-reverse">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 example p-3">
                            example
                        </div>
                    </div>
                </div>

                <div className="pt-3">
                    <div className="grid">
                        <div className="col-12 pb-3">
                            <h2>Justificar contenido</h2>
                            <hr/>
                        </div>
                        <div className="col-12 bg-light border mb-3">
                            <div className="d-flex justify-content-start">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light border mb-3">
                            <div className="d-flex justify-content-center">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light border mb-3">
                            <div className="d-flex justify-content-end">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light border mb-3">
                            <div className="d-flex justify-content-around">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light border mb-3">
                            <div className="d-flex justify-content-between">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light border mb-3">
                            <div className="d-flex justify-content-stretch h-120">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 example p-3">
                            example
                        </div>
                    </div>
                </div>

                <div className="pt-3">
                    <div className="grid">
                        <div className="col-12 pb-3">
                            <h2>Alinear items</h2>
                            <hr/>
                        </div>
                        <div className="col-12 bg-light border mb-3">
                            <div className="d-flex align-items-start h-120">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light border mb-3">
                            <div className="d-flex align-items-center h-120">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light border mb-3">
                            <div className="d-flex align-items-end h-120">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light border mb-3">
                            <div className="d-flex align-items-baseline h-120">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light border mb-3">
                            <div className="d-flex align-items-stretch h-120">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 example p-3">
                            example
                        </div>
                    </div>
                </div>

                <div className="pt-3">
                    <div className="grid">
                        <div className="col-12 pb-3">
                            <h2>Alinear items selfs</h2>
                            <hr/>
                        </div>
                        <div className="col-12 bg-light border mb-3">
                            <div className="d-flex h-120">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test align-self-start">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light border mb-3">
                            <div className="d-flex h-120">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test align-self-center">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light border mb-3">
                            <div className="d-flex h-120">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test align-self-end">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light border mb-3">
                            <div className="d-flex h-120">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test align-self-baseline">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light border mb-3">
                            <div className="d-flex h-120">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test align-self-stretch">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 example p-3">
                            example
                        </div>
                    </div>
                </div>

                <div className="pt-3">
                    <div className="grid">
                        <div className="col-12 pb-3">
                            <h2>LLenar</h2>
                            <hr/>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex">
                                <span className="obj-test flex-fill">objeto 1</span>
                                <span className="obj-test flex-fill">objeto 2</span>
                                <span className="obj-test flex-fill">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 example p-3">
                            example
                        </div>
                    </div>
                </div>

                <div className="pt-3">
                    <div className="grid">
                        <div className="col-12 pb-3">
                            <h2>Crecer y encogerse</h2>
                            <hr/>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test flex-grow-1">objeto 2</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex">
                                <span className="obj-test w-100">objeto 1</span>
                                <span className="obj-test flex-shrink-1">objeto 2</span>
                            </div>
                        </div>
                        <div className="col-12 example p-3">
                            example
                        </div>
                    </div>
                </div>

                <div className="pt-3">
                    <div className="grid">
                        <div className="col-12 pb-3">
                            <h2>Auto margenes</h2>
                            <hr/>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex border">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex border">
                                <span className="obj-test mr-auto">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex border">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test ml-auto">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 example p-3">
                            example
                        </div>
                    </div>
                </div>

                <div className="pt-3">
                    <div className="grid">
                        <div className="col-12 pb-3">
                            <h2>Auto margenes con alinear items</h2>
                            <hr/>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex align-items-start flex-column border h-200">
                                <span className="obj-test mb-auto">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex align-items-end flex-column border h-200">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test mt-auto">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 example p-3">
                            example
                        </div>
                    </div>
                </div>

                <div className="pt-3">
                    <div className="grid">
                        <div className="col-12 pb-3">
                            <h2>Envolver</h2>
                            <hr/>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex flex-nowrap border">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex flex-wrap border">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                                <span className="obj-test">objeto 4</span>
                                <span className="obj-test">objeto 5</span>
                                <span className="obj-test">objeto 6</span>
                                <span className="obj-test">objeto 6</span>
                                <span className="obj-test">objeto 7</span>
                                <span className="obj-test">objeto 8</span>
                                <span className="obj-test">objeto 9</span>
                                <span className="obj-test">objeto 10</span>
                                <span className="obj-test">objeto 11</span>
                                <span className="obj-test">objeto 12</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex flex-wrap-reverse border">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                                <span className="obj-test">objeto 4</span>
                                <span className="obj-test">objeto 5</span>
                                <span className="obj-test">objeto 6</span>
                                <span className="obj-test">objeto 6</span>
                                <span className="obj-test">objeto 7</span>
                                <span className="obj-test">objeto 8</span>
                                <span className="obj-test">objeto 9</span>
                                <span className="obj-test">objeto 10</span>
                                <span className="obj-test">objeto 11</span>
                                <span className="obj-test">objeto 12</span>
                            </div>
                        </div>
                        <div className="col-12 example p-3">
                            example
                        </div>
                    </div>
                </div>

                <div className="pt-3">
                    <div className="grid">
                        <div className="col-12 pb-3">
                            <h2>Orden</h2>
                            <hr/>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex">
                                <span className="obj-test order-3">objeto 1</span>
                                <span className="obj-test order-2">objeto 2</span>
                                <span className="obj-test order-1">objeto 3</span>
                            </div>
                        </div>
                        <div className="col-12 example p-3">
                            example
                        </div>
                    </div>
                </div>

                <div className="pt-3">
                    <div className="grid">
                        <div className="col-12 pb-3">
                            <h2>Alinear contenido</h2>
                            <hr/>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex align-content-start flex-wrap border h-200">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                                <span className="obj-test">objeto 4</span>
                                <span className="obj-test">objeto 5</span>
                                <span className="obj-test">objeto 6</span>
                                <span className="obj-test">objeto 6</span>
                                <span className="obj-test">objeto 7</span>
                                <span className="obj-test">objeto 8</span>
                                <span className="obj-test">objeto 9</span>
                                <span className="obj-test">objeto 10</span>
                                <span className="obj-test">objeto 11</span>
                                <span className="obj-test">objeto 12</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex align-content-center flex-wrap border h-200">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                                <span className="obj-test">objeto 4</span>
                                <span className="obj-test">objeto 5</span>
                                <span className="obj-test">objeto 6</span>
                                <span className="obj-test">objeto 6</span>
                                <span className="obj-test">objeto 7</span>
                                <span className="obj-test">objeto 8</span>
                                <span className="obj-test">objeto 9</span>
                                <span className="obj-test">objeto 10</span>
                                <span className="obj-test">objeto 11</span>
                                <span className="obj-test">objeto 12</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex align-content-end flex-wrap border h-200">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                                <span className="obj-test">objeto 4</span>
                                <span className="obj-test">objeto 5</span>
                                <span className="obj-test">objeto 6</span>
                                <span className="obj-test">objeto 6</span>
                                <span className="obj-test">objeto 7</span>
                                <span className="obj-test">objeto 8</span>
                                <span className="obj-test">objeto 9</span>
                                <span className="obj-test">objeto 10</span>
                                <span className="obj-test">objeto 11</span>
                                <span className="obj-test">objeto 12</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex align-content-around flex-wrap border h-200">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                                <span className="obj-test">objeto 4</span>
                                <span className="obj-test">objeto 5</span>
                                <span className="obj-test">objeto 6</span>
                                <span className="obj-test">objeto 6</span>
                                <span className="obj-test">objeto 7</span>
                                <span className="obj-test">objeto 8</span>
                                <span className="obj-test">objeto 9</span>
                                <span className="obj-test">objeto 10</span>
                                <span className="obj-test">objeto 11</span>
                                <span className="obj-test">objeto 12</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex align-content-between flex-wrap border h-200">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                                <span className="obj-test">objeto 4</span>
                                <span className="obj-test">objeto 5</span>
                                <span className="obj-test">objeto 6</span>
                                <span className="obj-test">objeto 6</span>
                                <span className="obj-test">objeto 7</span>
                                <span className="obj-test">objeto 8</span>
                                <span className="obj-test">objeto 9</span>
                                <span className="obj-test">objeto 10</span>
                                <span className="obj-test">objeto 11</span>
                                <span className="obj-test">objeto 12</span>
                            </div>
                        </div>
                        <div className="col-12 bg-light mb-3">
                            <div className="d-flex align-content-stretch flex-wrap border h-200">
                                <span className="obj-test">objeto 1</span>
                                <span className="obj-test">objeto 2</span>
                                <span className="obj-test">objeto 3</span>
                                <span className="obj-test">objeto 4</span>
                                <span className="obj-test">objeto 5</span>
                                <span className="obj-test">objeto 6</span>
                                <span className="obj-test">objeto 6</span>
                                <span className="obj-test">objeto 7</span>
                                <span className="obj-test">objeto 8</span>
                                <span className="obj-test">objeto 9</span>
                                <span className="obj-test">objeto 10</span>
                                <span className="obj-test">objeto 11</span>
                                <span className="obj-test">objeto 12</span>
                            </div>
                        </div>
                        <div className="col-12 example p-3">
                            example
                        </div>
                    </div>
                </div>


            </div>
        </React.Fragment>
    )
}

export default Flex