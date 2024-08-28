import React from 'react'
import './About.css'
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

function About() {
  return (
    <div className='about-page'>
      <header className='mt-5'>
            <div className='container h-100 d-flex align-items-center justify-content-center'>
              <h1 className='text-light'>About</h1>


            </div>


      </header>


      <div className='container my-5'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           A autem rem quod nihil corporis, sed tenetur,
            aspernatur fuga porro vitae, numquam eveniet quasi labore.
            Aut repellat consequuntur quisquam facere numquam.
        </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quam consectetur minus quia deserunt excepturi corrupti nisi harum, tenetur aspernatur,
         qui necessitatibus ratione soluta nulla molestias totam fugiat, nemo natus beatae.</p>


         <div className='row'>
            <div className='col-lg-6'>
              <img src={AboutChef1} className='img-fluid my-4' alt=""/>

            </div>

         <div className="col-lg-6">
          <img src={AboutChef2} className='img-fluid my-4' alt=""/>
          </div>
      </div>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Veniam quia magni id labore nesciunt non, voluptate aliquam 
         dolorem inventore ratione numquam aperiam autem in voluptas 
         odio esse ipsum iusto earum!
      </p>
      
      
      </div>

      <div className='bg-dark text-light'>
                  <ImageGallery/>

      </div>


      <div className='my-5'>
          <Reviews />

      </div>

    </div>
  )
}

export default About;