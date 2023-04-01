/* Import Module */
import styles from "../styles/Featured.module.css";
import Image from "next/image"; // use modeulw react
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0); // dec index for lop
  /* Make var to save image */
  const images = [
    "/img/slide.webp",
    "/img/slide.webp",
    "/img/slide.webp",  
  ];

  /* Function untuk menghendle arrow (dapat bergeser) */
  const handleArrow = (direction) =>{
      if(direction==="l"){ // jika klik kiri 
          setIndex(index !== 0 ? index-1 : 2) // index bukan 0 atau index - 1 : 2
      }
      if(direction==="r"){ // jika klik kanan
          setIndex(index !== 2 ? index+1 : 0) // set index bukan sama dengan 2 atau index + 1 : 0
      }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}> {/* Handle kiri */}
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => ( // use uniq component untuk menampilkan gambar (memecah)
          <div className={styles.imgContainer} key={i}> {/* mentregiger dengan kunci uniq (i) */}
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}> {/* Handle kanab */}
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Featured;