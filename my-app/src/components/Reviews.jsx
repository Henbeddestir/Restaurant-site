import React from "react";
import {Card, CardBody, CardText, CardFooter, CardTitle} from 'react-bootstrap';
import './Reviews.css';
import {AiFillStar} from "react-icons/ai"


export function Reviews() {
    return(
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1"> Reviews</h2>
        

        <div className="row g-4">
           <div className="col-lg-6">
               <Card className="h-100 shadow">
                  <CardBody>
                    <div className="p-4">
                        <CardText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Temporibus maiores, necessitatibus inventore excepturi facere est.
                             
                        
                        </CardText>
                           <p className="text-center reviews-stars">
                            <AiFillStar />
                             <AiFillStar />
                             <AiFillStar />
                             <AiFillStar />
                             <AiFillStar />
                            </p>
                            
                            

                    </div>
                  </CardBody>
               </Card>
           </div>

           <div className="col-lg-6">
               <Card className="h-100 shadow">
                  <CardBody>
                    <div className="p-4">
                        <CardText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Temporibus maiores, necessitatibus inventore excepturi facere est.
                             
                        
                        </CardText>
                           <p className="text-center reviews-stars">
                            <AiFillStar />
                             <AiFillStar />
                             <AiFillStar />
                             <AiFillStar />
                             <AiFillStar />
                            </p>
                            
                            

                    </div>
                  </CardBody>
               </Card>
           </div>


           <div className="col-lg-6">
               <Card className="h-100 shadow">
                  <CardBody>
                    <div className="p-4">
                        <CardText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Temporibus maiores, necessitatibus inventore excepturi facere est.
                             
                        
                        </CardText>
                           <p className="text-center reviews-stars">
                            <AiFillStar />
                             <AiFillStar />
                             <AiFillStar />
                             <AiFillStar />
                             <AiFillStar />
                            </p>
                            
                           

                    </div>
                  </CardBody>
               </Card>
           </div>
           <div className="col-lg-6">
               <Card className="h-100 shadow">
                  <CardBody>
                    <div className="p-4">
                        <CardText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Temporibus maiores, necessitatibus inventore excepturi facere est.
                             
                        
                        </CardText>
                           <p className="text-center reviews-stars">
                            <AiFillStar />
                             <AiFillStar />
                             <AiFillStar />
                             <AiFillStar />
                             <AiFillStar />
                            </p>
                            
                            

                    </div>
                  </CardBody>
               </Card>
           </div>
           



        







           </div>

        </div>

    )
}