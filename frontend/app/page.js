"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion, useAnimation, useScroll, useInView } from "framer-motion";
import { useEffect } from "react";
import arnav from "../public/arnav.jpg";
import cpp from "../public/cpp.png";
import c from "../public/c.png";
import css from "../public/css.png";
import django from "../public/django.png";
import ethereum from "../public/ethereum.png";
import html from "../public/html.png";
import python from "../public/python.png";
import react from "../public/react.png";
import typescript from "../public/typescript.png";
import ThreeMail from "../public/ThreeMail.png";
import Clock from "react-live-clock";

import Marquee from "react-fast-marquee";
import "./globals.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import { Twitter } from "@mui/icons-material";
import { useRef } from "react";
export default function Home() {
  const screenAnimation = useAnimation();
  const textAnimation = useAnimation();
  const UpAnimation = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const startAnimation = async () => {
      // Sequence: Screen from black to white
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
    };
    startAnimation();
  }, []);

  return (
    <div className="Home" style={{}}>
      <div className="Home-Pre">
        <motion.div
          transition={{ delay: 0.5, duration: 10 }}
          initial={{ background: "black" }}
          animate={screenAnimation}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
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
            width: "100vw",
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
          <motion.div className="Upper" style={{ display: "flex", gap: "5px" }}>
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
            <motion.div
              className="Upper-Middle"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <motion.div
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
                >
                  <motion.p
                    style={{
                      fontSize: "35px",
                      fontWeight: "800",
                      marginBottom: "5px",
                    }}
                  >
                    <Clock
                      format={"HH:MM A"}
                      ticking={true}
                      interval={0}
                      timezone={"Asia/Kolkata"}
                    />
                  </motion.p>
                  <motion.p>Indian Stanard Time</motion.p>
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
              <motion.div style={{ display: "flex", flexDirection: "column" }}>
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
                  marginTop: "5px",
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
        </motion.div>
      </div>

      <div style={{ marginTop: "-750px", paddingLeft: "8%",
            paddingRight: "8%", }}>
        <motion.div
          style={{ textAlign: "center", fontSize: "35px", fontWeight: "800" }}
        >
          PROJECTS
        </motion.div>
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            gap:'30px'
          }}
        >
          {" "}
          <div  style={{ position:'sticky', top:'10px', marginTop:'130px' }}>
          <Image
            className="sticky"
            alt=""
            src={ThreeMail}
            style={{ width: "400px", height: "auto"}}
          />
          </div>
          <motion.div  style={{display:'flex', flexDirection:'column',gap:'400px', marginTop:'200px'}}>
            <motion.div className="Project-Banner" >
              <motion.span>ThreeMail</motion.span>
              <motion.p> Developed with Solidity, React, and Web3.js, brings decentralized
              messaging to the forefront. Using asymmetric encryption on the
              Ethereum blockchain ensures robust privacy and tamper-proof
              communication. The React interface, integrated with Web3.js,
              guarantees user-friendly interactions while maintaining the
              highest security standards, making Threemail the ideal choice for
              decentralized, private messaging.</motion.p>
            </motion.div>
            <motion.div className="Project-Banner">
              <motion.span>Furry Personality</motion.span>
              <motion.p> Developed with Solidity, React, and Web3.js, brings decentralized
              messaging to the forefront. Using asymmetric encryption on the
              Ethereum blockchain ensures robust privacy and tamper-proof
              communication. The React interface, integrated with Web3.js,
              guarantees user-friendly interactions while maintaining the
              highest security standards, making Threemail the ideal choice for
              decentralized, private messaging.</motion.p>
            </motion.div>
            <motion.div className="Project-Banner">
              <motion.span>Fullstack Ecommerce</motion.span>
              <motion.p> Developed with Solidity, React, and Web3.js, brings decentralized
              messaging to the forefront. Using asymmetric encryption on the
              Ethereum blockchain ensures robust privacy and tamper-proof
              communication. The React interface, integrated with Web3.js,
              guarantees user-friendly interactions while maintaining the
              highest security standards, making Threemail the ideal choice for
              decentralized, private messaging.</motion.p>
            </motion.div>
            <motion.div style={{height:'1px', background:'blue',marginTop:'-90px'}}/>
          </motion.div>
          </motion.div>
      </div>
    </div>
  );
}
