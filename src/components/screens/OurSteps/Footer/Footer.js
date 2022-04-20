import React, { useState } from 'react';
import './Footer.css';
import * as Animations from 'react-scroll';
import {  
  FaInstagram,
  FaYoutube,  
  FaSearchLocation
} from 'react-icons/fa';
import { MdCall, MdMailOutline } from 'react-icons/md';
import * as Datas from '../../../component/Datas/Datas';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
function Footer() {

  const initial = {
    contactflag: false,
    mailflag: false,
    contact_number_flag: true,
  };
  const [state, setState] = useState(initial);

  const handlecontact = () => {
    let number = 0;
    if (Datas.contact_number.length > 0) {
      if (state.contact_number_flag) {
        number = Datas.contact_number[0].Number;
        console.log(number);
      }
      else {
        number = Datas.contact_number[1].Number;
      }
    }

    var clipboard = navigator.clipboard;
    if (clipboard === undefined) {
      console.log('clipboard is undefined');
      window.open(`tel:${number}`);
    } else {
      clipboard.writeText(number).then(function () {
        console.log('Copied to clipboard successfully!');

      }, function () {
        console.error('Unable to write to clipboard. :-(');
      });
    }
    let conttext = !state.contact_number_flag ? "Secondary Contact Number is Copied" : "Primay Contact Number is Copied";
    toast(`${conttext}`, {
      position: "top-center",
      // autoClose: 5000,
      // hideProgressBar: false,
      // closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      // progress: undefined, 
    });
    if (Datas.contact_number.length > 1) {
      setState({
        ...state,        
        contact_number_flag: !state.contact_number_flag
      })
    }
    setState({
      ...state,
      contactflag: !state.contactflag,      
    })
  };
  const handlemail = async () => {
    var clipboard = navigator.clipboard;
    let subject = 'Order%20Request';
    let body = 'Hi,%0A We are trying to contact you,%0A Please contact Me  %0A Name: \'Your Contact Number\' %0A Number \'Your Contact Number\'%0A Location: \'Your Location\' %0A Date: \'Event Date\' ';
    if (clipboard === undefined) {
      console.log('clipboard is undefined');
      window.open(`mailto:${Datas.mail_id}?subject=${subject}&body=${body}`);
    } else {
      clipboard.writeText(Datas.mail_id).then(function () {
        console.log('Copied to clipboard successfully!');

      }, function () {
        console.error('Unable to write to clipboard. :-(');
      });
    }
    // textField.innerText = 'foo bar baz';
    toast("Mail Id is Copied!", {
      position: "top-center",
      // autoClose: 5000,
      // hideProgressBar: false,
      // closeOnClick: true,
      pauseOnHover: true,
      // draggable: true,
      // progress: undefined, 
    });


    // alert("Copied")

    setState({
      ...state,
      mailflag: !state.mailflag
    })
  };
  return (
    <div>
      <div className='footer-container'>

        {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}

        <div className='footer-links'>

          <div className='footer-link-wrapper'>
            {/* <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <ContactUS/>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div> */}
            <div className='footer-link-items'>
              <h2>About Us</h2>
              {/* <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link> */}
              <Link to='/'>Activities</Link>
              <Link
                className='map-img-link'
                to={Datas.Map_link}
                target='_blank'
                aria-label='mapimg'
              >
                Location</Link>
              <Link to='/'>Terms of Service</Link>
            </div>

            <div className='footer-link-items'>
              <h2>Reach Us</h2>
              {/* <Link
                to={Datas.Insta_link}
                target='_blank'
                aria-label='Instagram'
              >Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link
                to={Datas.Youtube_link}
                target='_blank'
                aria-label='Youtube'
              >Youtube</Link> */}
              {/* <Link to='/'>Twitter</Link> */}
              <div className='social-icons'>
                {/* <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link> */}

                <Link
                  className='social-icon-link'
                  // to={Datas.mail_id}                 
                  // target='_top'
                  // aria-label='ContatNumber'
                  onClick={() => handlecontact()}
                >
                  <MdCall />

                </Link>
                <Link
                  className='social-icon-link'
                  // to={Datas.mail_id}                 
                  // target='_top'
                  // aria-label='Mail'
                  onClick={() => handlemail()}
                >
                  <MdMailOutline />

                </Link>

                <Link
                  className='social-icon-link'
                  to={Datas.Insta_link}
                  target='_blank'
                  aria-label='Instagram'
                >
                  <FaInstagram />
                </Link>
                <Link
                  className='social-icon-link'
                  to=
                  {Datas.Youtube_link}
                  // {'//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'}

                  target='_blank'
                  aria-label='Youtube'
                >
                  <FaYoutube />
                </Link>



                {/* <Link
                  className='social-icon-link'
                  to={Datas.Map_link}
                  target='_blank'
                  aria-label='mapimg'
                >
                  <FaSearchLocation />

                </Link> */}
                {/* <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link> */}
              </div>
              {state.contactflag ?
                <div>
                  {Datas.contact_number.map(num => (

                    <div className="contact-number">{num.Title}: {num.Number}</div>
                  ))}
                </div>
                : null
              }
              {state.mailflag ?
                <div className="mail-id">
                  {Datas.mail_id}
                </div> : null}
            </div>

            <div className='footer-link-items'>
              <h2>We Shine in</h2>

              {Datas.Our_Work.map((data) => {
                return (
                  <ul>
                    {/* <Link className={`${data.url === "/"? 'our-work-items' : 'our-work-url our-work-items'} `}> {data.title}</Link> */}
                    <div
                      className={`${data.url === "/" ? 'our-work-items' : 'our-work-url our-work-items'} `}
                    >
                      < Animations.Link

                        // className='nav-links'
                        to={data.url}
                        duration={1000} spy={true} offset={-50}
                        smooth>
                        {data.title}
                      </Animations.Link>
                    </div>
                  </ul>
                )

              })}


            </div>
          </div>
        </div>
        {/* <Link
          className='map-img-link'
          to={Datas.Map_link}
          target='_blank'
          aria-label='mapimg'
        >
          <img className="map-img" 
          alt="JRE Map"
          src={Datas.JrMapimg}
           />
        </Link> */}
        {/* <Map/> */}
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                {/* <MdFingerprint className='navbar-icon' /> */}
                <h4 className="website-name"> EzhilElit </h4>
              </Link>
            </div>
            <small className='website-rights'>EzhilElit © 2021</small>
          </div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Footer;
