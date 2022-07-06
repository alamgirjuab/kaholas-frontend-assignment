import imgOne from './img/1.jpg';
import imgTwo from './img/2.jpg';
import imgThree from './img/3.jpg';
import imgFour from './img/4.png';
import { BsStarFill } from 'react-icons/bs';
import { MdArrowForwardIos } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';
import { TiArrowForwardOutline } from 'react-icons/ti';

function App() {
  return (
    <div className="container">
      {/*----------------------- 
        | Left Content Section |
        -----------------------*/}
      <div className='my-5'>
        <h1 className="fw-bold">Summer Art Camp! 5 Days of Artists and Painting Monet,
          <br /> Van Gogh, Matisse, & More</h1>
        <small>Multi-Day Course</small>
      </div>
      <div className="row">
        <div className='col-md-6'>
          <div>
            <p className='me-5'>In this 5 day class we will explore artists Monet, Matisse, Van
              Gogh, among others and then recreate paintings using crayon
              and watercolor. Students will have fun learning about the artists
              & creating their own art inspired by their work.</p>
          </div>
          <div className='d-flex align-items-center'>
            <img className='img-fluid' src={imgFour} alt="" />
            <h5 className='ms-1 text-primary'>Kimberly R Moseler</h5>
          </div>
          <div className='mt-3'>
            <div>
              <BsStarFill className='text-warning' />
              <BsStarFill className='text-warning' />
              <BsStarFill className='text-warning' />
              <BsStarFill className='text-warning' />
              <BsStarFill className='text-warning' />
              <span className='ms-2'>467 total reviews for this teacher</span>
            </div>
            <div>
              <BsStarFill className='text-warning' />
              <BsStarFill className='text-warning' />
              <BsStarFill className='text-warning' />
              <BsStarFill className='text-warning' />
              <BsStarFill className='text-warning' />
              <span className='ms-2'>5 reviews for this class</span>
              <h5 className='mt-3'>completed by 21 learners</h5>
              <div className='mt-4'>
                <button type='button' className='btn btn-primary rounded-pill me-5'>See Class Schedule <MdArrowForwardIos /></button>
                <span className='fs-5 text-primary fw-bold me-5'><FiHeart className='me-2' />Save</span>
                <span className='fs-5 text-primary fw-bold'><TiArrowForwardOutline className='me-2' />Share</span>
              </div>
            </div>
          </div>

          {/*-----------------------
            | Right Image Section |
            ----------------------*/}
        </div>
        <div className='col-md-6 d-flex'>
          <div className='me-1'>
            <img className='img-fluid' src={imgOne} alt="" />
          </div>
          <div>
            <div className='my-1'><img className='img-fluid' src={imgTwo} alt="" /></div>
            <div className='mt-1'><img className='img-fluid' src={imgThree} alt="" /></div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
