import React, { useState } from "react";
// import { useState } from "react";
import tailwindConfig from "../../tailwind.config";
tailwindConfig
const Section =({title,discription}) =>{
    const [visible,setvisble] = useState(false);
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        margin:"10px",
      };
    return (
        <div style={mystyle}>

            <h2>{title}</h2>
            {
                visible ? (
                    <button onClick={ () => setvisble(false)}>hide</button>
                ):(
                    <button onClick={ () => setvisble(true)}>show</button>
                ) }
            { visible && <p>{discription}</p>}

        </div>
    )
}

const instamart = () => {
    return (
        <div>
         

       <Section
       title={"profile"}
       discription={"loremIt was independently[11][4][12][5] proposed by Tōsaku Mizuhashi (水橋東作) in 1937,[13] and by Amiel R. Volpert [ru] (Амиэ́ль Р. Во́льперт)[14][4] and Phillip H. Smith in 1939.[15][16] Starting with a rectangular diagram, Smith had developed a special polar coordinate chart by 1936, which, with the input of his colleagues Enoch B. Ferrell and James W. McRae, who were familiar with conformal mappings, was reworked into the final form in early 1937, which was eventually published in January 1939.[15][9][17] While Smith had originally called it a [15][16] and other authors first used names like ,[9] early adopters at MIT's Radiation Laboratory started to refer to it simply as  the 1940s,[9][17] a name generally accepted in the Western world by 1950.[18][19]"}
        
       />
       <Section
       title={"abou us"}
       discription={"loremIt was independently[11][4][12][5] proposed by Tōsaku Mizuhashi (水橋東作) in 1937,[13] and by Amiel R. Volpert [ru] (Амиэ́ль Р. Во́льперт)[14][4] and Phillip H. Smith in 1939.[15][16] Starting with a rectangular diagram, Smith had developed a special polar coordinate chart by 1936, which, with the input of his colleagues Enoch B. Ferrell and James W. McRae, who were familiar with conformal mappings, was reworked into the final form in early 1937, which was eventually published in January 1939.[15][9][17] While Smith had originally called it a 5][16] and other authors first used names like early adopters at MIT's Radiation Laboratory started to refer to it simply as  in the 1940s,[9][17] a name generally accepted in the Western world by 1950.[18][19]"}
        
       />
       

        </div>
    )

}
export default instamart;

