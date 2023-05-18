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
                                <div class="col image"><img src="https://miro.medium.com/v2/resize:fit:1400/1*ijm3fdsPs-6yuvhMbJp0Gw.png" alt="" />
                                </div>
                                <div class="col image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIq9Yq3WdAC3BtDi4F6vqNq-746De2ucwWLeY0GsZSfPRsvYtVrt1Btk6UWTg-dnU1gZU&usqp=CAU"alt="" />
                                </div>
                                <div class="col image"><img src="https://miro.medium.com/v2/resize:fit:1400/1*T14D4D0BHlkZpFystK_GqQ.png" alt="" />
                                </div>
                                <div class="col image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5sOc7XWZTc7s7k3mHFjBXXhtnWLBl9sDD2pAV-CUHW7W6cD9nHY5KUDK3edDoEhz4IDY&usqp=CAU" alt="" />
                                </div>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div class="container my-4">
                            <div class="row">
                                <div class="col image"><img src="https://miro.medium.com/v2/resize:fit:1400/1*5eT7cM3edqYnHTdmDz2PgA.png" alt="" /></div>
                                <div class="col image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpkL6NiTkBijBb4XCG_qRVBNRDjbn116Jfdp8x9yy_4Us1uEmBKtIx3qur2d_mlP_NdBs&usqp=CAU" alt="" /></div>
                                <div class="col image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE5cYApiQUXAQmDRG3YGr19UhWLrQ-fY9ZVIQVD76ybQzQWJ6nmlVuBVRWwsGIu-QyGC4&usqp=CAU" alt="" /></div>
                                <div class="col image"><img src="   https://images.squarespace-cdn.com/content/v1/591849d0e3df28cc11f713d2/1603278593559-X7ATXX1NEWC55D0XQKBX/uni_logo_strathclyde_glasgow_1280_510.jpg" alt="" /></div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div class="container my-4">
                            <div class="row">
                                <div class="col image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Mzbxmln8JzT5OTfHFjS0PY_Yxs-LFGMnCw&usqp=CAU" alt=""
                                /></div>
                                <div class="col image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkcmNGb-hlvTH-q48QbC1r88q0MVlPdFNk3w&usqp=CAU" alt="" />
                                </div>
                                <div class="col image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROhp34mHJWvX_J65klmtRTfzqRyjRb5wjDmQ&usqp=CAU" alt="" /></div>
                                <div class="col image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_GxKExJ5Ii3dXCiIATWLDGlzlh5TEb0BIQ&usqp=CAU" alt="" />
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