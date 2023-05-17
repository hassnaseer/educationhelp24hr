import Carousel from 'react-bootstrap/Carousel';
import img12 from '../Images/download (13).png';
import img1 from '../Images/download-removebg-preview-3.png';
import img2 from '../Images/download-removebg-preview.png';
import img3 from '../Images/bristol.png';
import img4 from '../Images/download (4).png';
import img5 from '../Images/download (5).png';
import img6 from '../Images/download (6).png';
import img7 from '../Images/12.png';
import img8 from '../Images/download (5).png';
import img9 from '../Images/download (6).png';
import img10 from '../Images/download (6).png';
import img11 from '../Images/download (10).png';
import img13 from '../Images/13.png';
import img14 from '../Images/14.png'
import img15 from '../Images/15.png'

import './index.css';
function NoTransitionExample() {
    return (
        <>
            <div className="container">
                <Carousel slide={false}>
                    <Carousel.Item>
                        <div class="container my-4">

                            <div class="row">
                                <div class="col image"><img src={img4} alt="" />
                                </div>
                                <div class="col image"><img src={img5} alt="" />
                                </div>
                                <div class="col image"><img src={img6} alt="" />
                                </div>
                                <div class="col image"><img src={img7} alt="" />
                                </div>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div class="container my-4">
                            <div class="row">
                                <div class="col image"><img src={img8} alt="" /></div>
                                <div class="col image"><img src={img13} alt="" /></div>
                                <div class="col image"><img src={img14} alt="" /></div>
                                <div class="col image"><img src={img14} alt="" /></div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div class="container my-4">
                            <div class="row">
                                <div class="col image"><img src={img12} alt=""
                                /></div>
                                <div class="col image"><img src={img1} alt="" />
                                </div>
                                <div class="col image"><img src={img2} alt="" /></div>
                                <div class="col image"><img src={img3} alt="" />
                                </div>
                            </div>

                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default NoTransitionExample;