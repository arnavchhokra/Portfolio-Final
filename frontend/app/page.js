"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion, useAnimation, useScroll, useInView } from "framer-motion";
import { useEffect } from "react";
import arnav from "./public/Arnav.jpg";
import cpp from "./public/cpp.png";
import c from "./public/c.png";
import css from "./public/css.png";
import django from "./public/django.png";
import ethereum from "./public/ethereum.png";
import html from "./public/html.png";
import python from "./public/python.png";
import react from "./public/react.png";
import typescript from "./public/typescript.png";
import ThreeMail from "./public/ThreeMail.png";

import Marquee from "react-fast-marquee";
import "./globals.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import { ScaleSharp, Twitter } from "@mui/icons-material";
import { useRef, useState } from "react";
import three from "./public/three.jpg"
import akat from "./public/akat.jpg"
import scream from "./public/scream.jpg"

export default function Home() {
  const screenAnimation = useAnimation();
  const textAnimation = useAnimation();
  const UpAnimation = useAnimation();
  const RightAnimation = useAnimation();
  const VisibilityAnimation = useAnimation();

  const scaleAnimation1 = useAnimation();
  const scaleAnimation2 = useAnimation();
  const scaleAnimation3 = useAnimation();
  const scaleAnimation4 = useAnimation();


  function Hovered(anim) {
    anim.start({
      scale: 1.05,
      transition: { delay:0, duration: 0.5, ease:'easeInOut' },
    })
  }

  function NoHovered(anim){
    anim.start({
      scale: 1,
      transition: { delay:0, duration: 0.5, ease:'easeInOut' },
    })
  }

  useEffect(() => {
    const startAnimation = async () => {
      await screenAnimation.start({ background: "white" });
      await textAnimation.start({
        opacity: 1,
        transition: { delay: 0.2, duration: 0.6 },
      });
      await textAnimation.start({
        y: -10,
        opacity: 0,
        transition: { delay: 0, duration: 0.2 },
      });
      await UpAnimation.start({ y: "-100vh" });
      await VisibilityAnimation.start({
        opacity: 1,
      });    };


    startAnimation();
  }, []);

  const [currentTime, setCurrentTime] = useState(new Date());
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="Home"  style={{
      width: "100%",
      height:'100%',
      color: "white",
    }}>
      <div className="Home-Pre" style={{
      width: "100%",
      height:'100vh',
      color: "white",
    }}>
        <motion.div
          transition={{ delay: 0.5, duration: 10 }}
          initial={{ background: "white" }}
          animate={screenAnimation}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <motion.p
            style={{ fontSize: "22px", color: "black" }}
            initial={{ opacity: 0 }}
            animate={textAnimation}
          >
            Arnav Chhokra
          </motion.p>
        </motion.div>





  <motion.div
          style={{
            background: "black",
            height: "100vh",
            color: "white",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",

          }}
          initial={{ y: "1000vh" }}
          animate={UpAnimation}
          transition={{ delay: -1.5, duration: 2 }}
        >
          <div class='ME'style={{display:'flex', flexDirection:'column', justifyContent:'center', }}>
          <motion.div className="Upper" style={{ display: "flex", gap: "5px",justifyContent:'center', alignItems:'center', justifySelf:'center',
}}>
            <motion.div className="imgcontainer" transition={{ delay: 0, duration: 1,  ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              animate={VisibilityAnimation}     style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', height:'100%',}}>
            <Image className="Myimg"
              style={{
                objectFit: "cover",
                flex:'1',
                height:'100%',
                borderRadius: "5px",
                border: "1px solid grey",
                width: "18.5vw",
              }}
              src={arnav}
              alt=""
            />
            </motion.div>
            <motion.div
              className="Upper-Middle"
              style={{ display: "flex", flexDirection: "column" ,
              justifyContent:'flex-start',
              width: "58%",
              height:'100%',
            }}
            >



<motion.div className="imgcontainer2" transition={{ delay: 0, duration: 1,  ease: "easeInOut",  }}
              initial={{ opacity: 0 }}
              animate={VisibilityAnimation}     style={{display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
            <Image className="Myimg2"
              style={{
                objectFit: "cover",
                flex:'1',
                borderRadius: "5px",
                border: "1px solid grey",
                display:'none',
              }}
              src={arnav}
              alt=""
            />
            </motion.div>






              <motion.div className="intro"
              transition={{ delay: 0, duration: 2,  ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              animate={VisibilityAnimation}
                style={{
                  border: "1px solid grey",
                  borderRadius: "5px",
                  padding: "20px",
                  width:'100%',
                }}
              >
                <motion.p className="intro-text"
                  style={{
                    fontSize: "35px",
                    fontWeight: "800",
                    marginBottom: "80px",
                  }}
                >
                  I'm Arnav
                </motion.p>
                <motion.p>
                  A Blockchain/Web Developer and software engineer, skilled in
                  crafting decentralized applications (DApps) and dynamic web
                  solutions. Proficient in Ethereum, Hyperledger, and modern web
                  technologies. With a strong software engineering background,
                  proficient in both front-end and backend development.
                </motion.p>
              </motion.div>
              <motion.div
                className="Upper-Middle-Lower"
                style={{
                  display: "flex",
                  marginTop: "5px",
                  marginBottom: "10px",
                  width:'100%',
                }}
              >
                <motion.div
                  className='SKILLS'
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    padding: "20px",
                    width: "75%",
                    height:'25vh',
                    display:'flex',
                    justifyContent:'space-between',
                    flexDirection:'column'
                  }}
                  transition={{ delay: 0.5, duration: 2,  ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              animate={VisibilityAnimation}
                >
                  <motion.p className="skillstitle"
                    style={{
                      fontSize: "35px",
                      fontWeight: "800",
                    }}
                  >
                    SKILLS
                  </motion.p>
                  <motion.p>
                    Frontend
                    <br />
                    Web3
                    <br />
                    Backend
                    <br />
                    DSA
                    <br />
                  </motion.p>
                </motion.div>
                <motion.div className="IST"
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    padding: "20px",
                    marginLeft: "5px",
                    flex:'1',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  transition={{ delay: 1, duration: 2,  ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              animate={VisibilityAnimation}
                >
                  <motion.p
                    style={{
                      fontSize: "35px",
                      fontWeight: "800",
                      marginBottom: "5px",
                    }}
                  >
                    {formattedTime}
                  </motion.p>
                  <motion.p>Indian Standard Time</motion.p>
                </motion.div>
              </motion.div>
              <motion.div className="Stack-Box"
                style={{
                  border: "1px solid grey",
                  borderRadius: "5px",
                  padding: "20px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",

                }}
                transition={{ delay: 1.5, duration: 2,  ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              animate={VisibilityAnimation}
              >
                <motion.div  style={{ display: "flex", }}>
                  <motion.p style={{ fontSize: "25px", fontWeight: "800" }}>
                    STACK
                  </motion.p>
                  <Marquee
                    autoFill="true"
                    speed="80"
                    style={{ width: "90%", marginLeft: "20px" }}
                  >
                    <motion.div
                      className="Marquee"
                      style={{
                        display: "flex",
                        gap: "20px",
                        marginRight: "20px",
                      }}
                    >
                      <Image
                        src={cpp}
                        alt=""
                        style={{ width: "35px", height: "35px" }}
                      />
                      <Image
                        src={css}
                        alt=""
                        style={{ width: "35px", height: "35px" }}
                      />
                      <Image
                        src={c}
                        alt=""
                        style={{ width: "35px", height: "35px" }}
                      />
                      <Image
                        src={ethereum}
                        alt=""
                        style={{ width: "35px", height: "35px" }}
                      />
                      <Image
                        src={html}
                        alt=""
                        style={{ width: "35px", height: "35px" }}
                      />
                      <Image
                        src={python}
                        alt=""
                        style={{ width: "35px", height: "35px" }}
                      />
                      <Image
                        src={typescript}
                        alt=""
                        style={{ width: "35px", height: "35px" }}
                      />
                    </motion.div>
                  </Marquee>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="Upper-Right"
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "2px",
                justifyContent: "center",
                height:'100%'
              }}
            >
              <motion.div
              transition={{ delay: 2, duration: 2,  ease: "easeInOut", height:'40%' }}
              initial={{ opacity: 0 }}
              animate={VisibilityAnimation}
              style={{ display: "flex", flexDirection: "column" }}>
                <motion.div
                  style={{ display: "flex", alignItems: "center", gap: "3px" }}
                >
                  <motion.p
                    style={{
                      fontSize: "35px",
                      fontWeight: "800",
                      padding: "15px",
                    }}
                  >
                    LIN
                    <br />
                    KS:
                  </motion.p>
                  <TwitterIcon
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "white",
                      color: "black",
                      borderRadius: "5px",
                      padding: "15px",
                    }}
                  />
                  <GitHubIcon
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "white",
                      color: "black",
                      borderRadius: "5px",
                      padding: "15px",
                    }}
                  />
                </motion.div>
                <motion.div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                    marginLeft: "7px",
                  }}
                >
                  <LinkedInIcon
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "white",
                      color: "black",
                      borderRadius: "5px",
                      padding: "15px",
                    }}
                  />
                  <InstagramIcon
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "white",
                      color: "black",
                      borderRadius: "5px",
                      padding: "15px",
                    }}
                  />
                  <MailIcon
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "white",
                      color: "black",
                      borderRadius: "5px",
                      padding: "15px",
                    }}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                style={{
                  border: "1px solid grey",
                  marginTop: "16px",
                  borderRadius: "5px",
                  fontWeight: "800",
                  fontSize: "30px",
                  padding: "20px",
                  height: "47.5vh",
                  display: "flex",
                  flex:'1',
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "255px",
                }}
                transition={{ delay: 2.5, duration: 2,  ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              animate={VisibilityAnimation}
              >
                <motion.p>HAVE A PROJECT IN MIND</motion.p>
                <button
                  style={{
                    padding: "20px",
                    fontSize: "20px",
                    fontWeight: "800",
                    borderRadius: "5px",
                  }}
                >
                  hey@arnav.com
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

















          <div style={{display:'flex', justifyContent:'center', alignItems:'center',}}>
          <motion.div
              className="Responsive-Bottom"
              style={{
                justifyContent: "center",
                width:'78%',
                gap:'10px',
                display:'none',
              }}
            >
              <motion.div
              transition={{ delay: 2, duration: 2,  ease: "easeInOut",}}
              initial={{ opacity: 0 }}
              animate={VisibilityAnimation}
              style={{ display: "flex", flexDirection: "column",}}>
                <motion.div
                  style={{ display: "flex", alignItems: "center", gap: "3px",  }}
                >
                  <motion.p className="links-icn"
                    style={{
                      fontSize: "35px",
                      fontWeight: "800",
                      padding: "15px",
                    }}
                  >
                    LIN
                    <br />
                    KS:
                  </motion.p>
                  <TwitterIcon className='icn'
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "white",
                      color: "black",
                      borderRadius: "5px",
                      padding: "15px",
                    }}
                  />
                  <GitHubIcon className='icn'
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "white",
                      color: "black",
                      borderRadius: "5px",
                      padding: "15px",
                    }}
                  />
                </motion.div>
                <motion.div className='icn'
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                    marginLeft: "7px",
                  }}
                >
                  <LinkedInIcon className='icn'
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "white",
                      color: "black",
                      borderRadius: "5px",
                      padding: "15px",
                    }}
                  />
                  <InstagramIcon className='icn'
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "white",
                      color: "black",
                      borderRadius: "5px",
                      padding: "15px",
                    }}
                  />
                  <MailIcon className='icn'
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "white",
                      color: "black",
                      borderRadius: "5px",
                      padding: "15px",
                    }}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                style={{
                  border: "1px solid grey",
                  marginTop: "16px",
                  borderRadius: "5px",
                  fontWeight: "800",
                  fontSize: "30px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex:'1'
                }}
                transition={{ delay: 2.5, duration: 2,  ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              animate={VisibilityAnimation}
              >
                <motion.p className="HavePr">HAVE A PROJECT IN MIND</motion.p>
                <button
                  style={{
                    padding: "20px",
                    fontSize: "20px",
                    fontWeight: "800",
                    borderRadius: "5px",
                  }}
                >
                  hey@arnav.com
                </button>
              </motion.div>
            </motion.div>
            </div>



















          </div>
        </motion.div>
















      </div>


        <div className='PR' style={{height:'100%'}}>
        <motion.div
        className="PRTitle"
          style={{ fontSize: "35px", fontWeight: "800", marginBottom:'25px', marginLeft:'9vw' }}
        >
          PROJECTS
        </motion.div>
        <motion.div className="ImageLayer" style={{display:'flex', gap:'5px', width:'100%', justifyContent:'center'}} >
          <motion.div onHoverStart={() => Hovered(scaleAnimation1)} onHoverEnd={()=>NoHovered(scaleAnimation1)} animate={scaleAnimation1} initial={{scale:1}}>
          <Image className="imgpr" style={{width:"40.85vw",height:'auto',borderRadius:'5px', height:'100%', objectFit:'cover'}} src={scream} alt="" />
          </motion.div>
          <motion.div onHoverStart={() => Hovered(scaleAnimation2)} onHoverEnd={()=>NoHovered(scaleAnimation2)} animate={scaleAnimation2} initial={{scale:1}}>
          <Image className="imgpr" style={{width:"40.85vw",height:'auto',borderRadius:'5px', height:'100%', objectFit:'cover'}}src={akat} alt="" />
          </motion.div>
        </motion.div>
        <motion.div style={{display:'flex', width:'100%',justifyContent:'center', width:'100%'}} onHoverStart={() => Hovered(scaleAnimation3)} onHoverEnd={()=>NoHovered(scaleAnimation3)} animate={scaleAnimation3} initial={{scale:1}}   >
        <Image style={{width:"82vw",height:'auto',borderRadius:'5px', height:'350px', objectFit:'cover', marginTop:'5px', }}src={three} alt="" />
        </motion.div>
      </div>
      <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span style={{fontWeight:'800'}}>CONTACT US</span>
          </div>
        </div>
        <div class="screen-body-item">
          <div class="app-form" style={{fontWeight:'800'}}>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME" value="Arnav Chhokra"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO"/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div class="app-form-group buttons" style={{display:'flex',gap:'20px'}}>
              <button class="app-form-button">CANCEL</button>
              <button class="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>










{
  /*


  <motion.div
          style={{
            background: "green",
            width: "100%",
            height: "100vh",
            color: "white",
            paddingLeft: "8%",
            paddingRight: "8%",
            paddingTop: "2%",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
          initial={{ y: "1000vh" }}
          animate={UpAnimation}
          transition={{ delay: -1.5, duration: 2 }}
        >
          <div class='ME'style={{}}>
          <motion.div className="Upper" style={{ display: "flex", gap: "5px",justifyContent:'center', alignItems:'center', justifySelf:'center',
}}>
            <motion.div transition={{ delay: 0, duration: 1,  ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              animate={VisibilityAnimation}>
            <Image
              style={{
                objectFit: "cover",
                height: "558px",
                borderRadius: "5px",
                border: "1px solid grey",
                width: "360px",
              }}
              src={arnav}
              alt=""
            />
            </motion.div>
            <motion.div
              className="Upper-Middle"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <motion.div
              transition={{ delay: 0, duration: 2,  ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              animate={VisibilityAnimation}
                style={{
                  border: "1px solid grey",
                  borderRadius: "5px",
                  padding: "20px",
                  width: "640px",
                }}
              >
                <motion.p
                  style={{
                    fontSize: "35px",
                    fontWeight: "800",
                    marginBottom: "80px",
                  }}
                >
                  I'm Arnav
                </motion.p>
                <motion.p>
                  A Blockchain/Web Developer and software engineer, skilled in
                  crafting decentralized applications (DApps) and dynamic web
                  solutions. Proficient in Ethereum, Hyperledger, and modern web
                  technologies. With a strong software engineering background,
                  proficient in both front-end and backend development.
                </motion.p>
              </motion.div>
              <motion.div
                className="Upper-Middle-Lower"
                style={{
                  display: "flex",
                  marginTop: "5px",
                  marginBottom: "10px",
                }}
              >
                <motion.div
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    padding: "20px",
                    width: "450px",
                  }}
                  transition={{ delay: 0.5, duration: 2,  ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              animate={VisibilityAnimation}
                >
                  <motion.p
                    style={{
                      fontSize: "35px",
                      fontWeight: "800",
                      marginBottom: "20px",
                    }}
                  >
                    SKILLS
                  </motion.p>
                  <motion.p>
                    Frontend
                    <br />
                    Web3
                    <br />
                    Backend
                    <br />
                    DSA
                    <br />
                  </motion.p>
                </motion.div>
                <motion.div
                  style={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                    padding: "20px",
                    width: "185px",
                    marginLeft: "5px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  transition={{ delay: 1, duration: 2,  ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              animate={VisibilityAnimation}
                >
                  <motion.p
                    style={{
                      fontSize: "35px",
                      fontWeight: "800",
                      marginBottom: "5px",
                    }}
                  >
                    {formattedTime}
                  </motion.p>
                  <motion.p>Indian Standard Time</motion.p>
                </motion.div>
              </motion.div>
              <motion.div
                style={{
                  border: "1px solid grey",
                  borderRadius: "5px",
                  padding: "20px",
                  width: "640px",
                  height: "100px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",

                }}
                transition={{ delay: 1.5, duration: 2,  ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              animate={VisibilityAnimation}
              >
                <motion.div style={{ display: "flex" }}>
                  <motion.p style={{ fontSize: "25px", fontWeight: "800" }}>
                    STACK
                  </motion.p>
                  <Marquee
                    autoFill="true"
                    speed="80"
                    style={{ width: "90%", marginLeft: "20px" }}
                  >
                    <motion.div
                      className="Marquee"
                      style={{
                        display: "flex",
                        gap: "20px",
                        marginRight: "20px",
                      }}
                    >
                      <Image
                        src={cpp}
                        alt=""
                        style={{ width: "35px", height: "35px" }}
                      />
                      <Image
                        src={css}
                        alt=""
                        style={{ width: "35px", height: "35px" }}
                      />
                      <Image
                        src={c}
                        alt=""
                        style={{ width: "35px", height: "35px" }}
                      />
                      <Image
                        src={ethereum}
                        alt=""
                        style={{ width: "35px", height: "35px" }}
                      />
                      <Image
                        src={html}
                        alt=""
                        style={{ width: "35px", height: "35px" }}
                      />
                      <Image
                        src={python}
                        alt=""
                        style={{ width: "35px", height: "35px" }}
                      />
                      <Image
                        src={typescript}
                        alt=""
                        style={{ width: "35px", height: "35px" }}
                      />
                    </motion.div>
                  </Marquee>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="Upper-Right"
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "2px",
                width: "750px",
              }}
            >
              <motion.div
              transition={{ delay: 2, duration: 2,  ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              animate={VisibilityAnimation}
              style={{ display: "flex", flexDirection: "column" }}>
                <motion.div
                  style={{ display: "flex", alignItems: "center", gap: "3px" }}
                >
                  <motion.p
                    style={{
                      fontSize: "35px",
                      fontWeight: "800",
                      padding: "15px",
                    }}
                  >
                    LIN
                    <br />
                    KS:
                  </motion.p>
                  <TwitterIcon
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "white",
                      color: "black",
                      borderRadius: "5px",
                      padding: "15px",
                    }}
                  />
                  <GitHubIcon
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "white",
                      color: "black",
                      borderRadius: "5px",
                      padding: "15px",
                    }}
                  />
                </motion.div>
                <motion.div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                    marginLeft: "7px",
                  }}
                >
                  <LinkedInIcon
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "white",
                      color: "black",
                      borderRadius: "5px",
                      padding: "15px",
                    }}
                  />
                  <InstagramIcon
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "white",
                      color: "black",
                      borderRadius: "5px",
                      padding: "15px",
                    }}
                  />
                  <MailIcon
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "white",
                      color: "black",
                      borderRadius: "5px",
                      padding: "15px",
                    }}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                style={{
                  border: "1px solid grey",
                  marginTop: "16px",
                  borderRadius: "5px",
                  fontWeight: "800",
                  fontSize: "30px",
                  padding: "20px",
                  height: "353px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "255px",
                }}
                transition={{ delay: 2.5, duration: 2,  ease: "easeInOut" }}
              initial={{ opacity: 0 }}
              animate={VisibilityAnimation}
              >
                <motion.p>HAVE A PROJECT IN MIND</motion.p>
                <button
                  style={{
                    padding: "20px",
                    fontSize: "20px",
                    fontWeight: "800",
                    borderRadius: "5px",
                  }}
                >
                  hey@arnav.com
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
          </div>
        </motion.div>





  */
}

























    </div>
  );
}

