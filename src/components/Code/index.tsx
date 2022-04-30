import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Code.module.css";

const VSCODESTYLE = {
  default: "default",
};

const initialStyle: string = VSCODESTYLE.default;

const Code = () => {
  const [style] = useState(initialStyle);

  const __this = classNames({
    [`${styles.this}`]: style === VSCODESTYLE.default,
  });

  const __class = classNames({
    [`${styles.class}`]: style === VSCODESTYLE.default,
  });

  const __value = classNames({
    [`${styles.value}`]: style === VSCODESTYLE.default,
  });

  const __number = classNames({
    [`${styles.number}`]: style === VSCODESTYLE.default,
  });

  const __return = classNames({
    [`${styles.return}`]: style === VSCODESTYLE.default,
  });

  const __property = classNames({
    [`${styles.property}`]: style === VSCODESTYLE.default,
  });

  const __function = classNames({
    [`${styles.function}`]: style === VSCODESTYLE.default,
  });

  const __className = classNames({
    [`${styles.className}`]: style === VSCODESTYLE.default,
  });

  const __container = classNames(
    {
      [`${styles.container}`]: style === VSCODESTYLE.default,
    },
    "hover:bg-slate-100"
  );

  return (
    <div className="flex flex-col rounded border p-4">
      <pre>
        <code className="block whitespace-pre">
          <div className={__container}>
            <div className={__number}> 1</div>
            <div>
              <span className={__class}>class</span>{" "}
              <span className={__className}>JerwinOrdillano</span> {`{`}
            </div>
          </div>
          <div className={__container}>
            <div className={__number}> 2</div>
            <div className="ml-8">
              <span className={__function}>constructor</span>() {"{"}
            </div>
          </div>
          <div className={__container}>
            <div className={__number}> 3</div>
            <div className="ml-16">
              <span className={__this}>this</span>.name ={" "}
              <span className={__value}>{`"Jerwin Ordillano"`}</span>;
            </div>
          </div>
          <div className={__container}>
            <div className={__number}> 4</div>
            <div className="ml-16">
              <span className={__this}>this</span>.birthday ={" "}
              <span className={__value}>{`"September 5, 1998"`}</span>;
            </div>
          </div>
          <div className={__container}>
            <div className={__number}> 5</div>
            <div className="ml-16">
              <span className={__this}>this</span>.email ={" "}
              <span className={__value}>{`"jawe.1276@gmail.com"`}</span>;
            </div>
          </div>
          <div className={__container}>
            <div className={__number}> 6</div>
            <div className="ml-8">{"}"}</div>
          </div>
          <div className={classNames(__container, "h-6")}></div>
          <div className={__container}>
            <div className={__number}> 7</div>
            <div className="ml-8">
              <span className={__function}>workExperience</span>() {"{"}
            </div>
          </div>
          <div className={__container}>
            <div className={__number}> 8</div>
            <div className="ml-16">
              <span className={__return}>return</span> {"["}
            </div>
          </div>
          <div className={__container}>
            <div className={__number}> 9</div>
            <div className="ml-24">{"{"}</div>
          </div>
          <div className={__container}>
            <div className={__number}>10</div>
            <div className="ml-32">
              <span className={__property}>company</span>:{" "}
              <span className={__value}>{`"Webact"`}</span>,
            </div>
          </div>
          <div className={__container}>
            <div className={__number}>11</div>
            <div className="ml-32">
              <span className={__property}>dateEmployed</span>:{" "}
              <span className={__value}>{`"April 2019 - Present"`}</span>,
            </div>
          </div>
          <div className={__container}>
            <div className={__number}>12</div>
            <div className="ml-32">
              <span className={__property}>position</span>:{" "}
              <span className={__value}>{`"Web designer and developer"`}</span>,
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>13</div>
            <div className="ml-24">{"}"},</div>
          </div>

          <div className={__container}>
            <div className={__number}>14</div>
            <div className="ml-24">{"{"}</div>
          </div>

          <div className={__container}>
            <div className={__number}>15</div>
            <div className="ml-32">
              <span className={__property}>company</span>:{" "}
              <span className={__value}>{`"Graphics From Nowhere"`}</span>,
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>16</div>
            <div className="ml-32">
              <span className={__property}>dateEmployed</span>:{" "}
              <span className={__value}>{`"April 2019 - Present"`}</span>,
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>17</div>
            <div className="ml-32">
              <span className={__property}>position</span>:{" "}
              <span className={__value}>{`"Graphic Designer"`}</span>,
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>18</div>
            <div className="ml-24">{"}"},</div>
          </div>

          <div className={__container}>
            <div className={__number}>19</div>
            <div className="ml-24">{"{"}</div>
          </div>

          <div className={__container}>
            <div className={__number}>20</div>
            <div className="ml-32">
              <span className={__property}>company</span>:{" "}
              <span
                className={__value}
              >{`"Regional Tripartite Wages and Productivity Board"`}</span>
              ,
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>21</div>
            <div className="ml-32">
              <span className={__property}>dateEmployed</span>:{" "}
              <span className={__value}>{`"April 2019 - June 2019"`}</span>,
            </div>
          </div>
          <div className={__container}>
            <div className={__number}>22</div>
            <div className="ml-32">
              <span className={__property}>position</span>:{" "}
              <span className={__value}>{`"IT Officer"`}</span>,
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>22</div>
            <div className="ml-24">{"}"},</div>
          </div>

          <div className={__container}>
            <div className={__number}>23</div>
            <div className="ml-24">{"{"}</div>
          </div>

          <div className={__container}>
            <div className={__number}>24</div>
            <div className="ml-32">
              <span className={__property}>company</span>:
              <span className={__value}>{`"SMESoft Inc."`}</span>,
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>25</div>
            <div className="ml-32">
              <span className={__property}>dateEmployed</span>:{" "}
              <span className={__value}>{`"January 2019 - March 2019"`}</span>,
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>26</div>
            <div className="ml-32">
              <span className={__property}>position</span>:{" "}
              <span className={__value}>{`"Software Engineer Intern"`}</span>,
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>27</div>
            <div className="ml-24">{"}"},</div>
          </div>

          <div className={__container}>
            <div className={__number}>28</div>
            <div className="ml-16">{"]"};</div>
          </div>

          <div className={__container}>
            <div className={__number}>29</div>
            <div className="ml-8">{"}"}</div>
          </div>

          <div className={classNames(__container, "h-6")}></div>

          <div className={__container}>
            <div className={__number}>30</div>
            <div className="ml-8">
              <span className={__function}>education</span>() {"{"}
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>31</div>
            <div className="ml-16">
              <span className={__return}>return</span> {"["}
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>32</div>
            <div className="ml-24">{"{"}</div>
          </div>

          <div className={__container}>
            <div className={__number}>33</div>
            <div className="ml-32">
              <span className={__property}>school</span>:{" "}
              <span
                className={__value}
              >{`"Divine Word College of Calapan"`}</span>
              ,
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>34</div>
            <div className="ml-32">
              <span className={__property}>graduated</span>:{" "}
              <span className={__value}>{`"March 2019"`}</span>,
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>35</div>
            <div className="ml-24">{"}"},</div>
          </div>

          <div className={__container}>
            <div className={__number}>36</div>
            <div className="ml-16">{"]"};</div>
          </div>

          <div className={__container}>
            <div className={__number}>37</div>
            <div className="ml-8">{"}"}</div>
          </div>

          <div className={classNames(__container, "h-6")}></div>

          <div className={__container}>
            <div className={__number}>38</div>
            <div className="ml-8">
              <span className={__function}>skills</span>() {"{"}
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>39</div>
            <div className="ml-16">
              <span className={__return}>return</span> {"{"}
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>40</div>
            <div className="ml-24">
              <span className={__property}>techStacks</span>: {"["}
              <span className={__value}>{`"HTML/CSS/JS"`}</span>,{" "}
              <span className={__value}>{`"React.JS"`}</span>,{" "}
              <span className={__value}>{`"jQuery"`}</span>{" "}
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>41</div>
            <div className="ml-32">
              <span className={__value}>{`"TailwindCSS"`}</span>,{" "}
              <span className={__value}>{`"Bootstrap"`}</span>,{" "}
              <span className={__value}>{`"PHP"`}</span>,{" "}
              <span className={__value}>{`"C#"`}</span>,{" "}
              <span className={__value}>{`"ASP.NET"`}</span>,{" "}
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>42</div>
            <div className="ml-32">
              <span className={__value}>{`"MySQL"`}</span>,{" "}
              <span className={__value}>{`"Wordpress"`}</span>,{" "}
              <span className={__value}>{`"Arduino"`}</span>,{" "}
              <span className={__value}>{`"Java"`}</span>,{" "}
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>43</div>
            <div className="ml-32">
              <span className={__value}>{`"Raspberry Pi"`}</span>,{" "}
              <span className={__value}>{`"Python"`}</span>
              {`]`},
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>44</div>
            <div className="ml-24">
              <span className={__property}>javascript</span>: {"["}
              <span className={__value}>{`"React.JS"`}</span>,{" "}
              <span className={__value}>{`"Vue.JS"`}</span>,{" "}
              <span className={__value}>{`"Svelte"`}</span>
              {`]`},
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>45</div>
            <div className="ml-24">
              <span className={__property}>webDesign</span>: {"["}
              <span className={__value}>{`"Adobe XD"`}</span>,{" "}
              <span className={__value}>{`"Photoshop"`}</span>,{" "}
              <span className={__value}>{`"Illustrator"`}</span>
              {`]`},
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>46</div>
            <div className="ml-24">
              <span className={__property}>graphicDesign</span>: {"["}
              <span className={__value}>{`"Photoshop"`}</span>,{" "}
              <span className={__value}>{`"Illustrator"`}</span>,{" "}
              <span className={__value}>{`"Premiere"`}</span>,{" "}
              <span className={__value}>{`"After Effects"`}</span>
              {`]`},
            </div>
          </div>

          <div className={__container}>
            <div className={__number}>47</div>
            <div className="ml-16">{"}"};</div>
          </div>

          <div className={__container}>
            <div className={__number}>48</div>
            <div className="ml-8">{"}"}</div>
          </div>

          <div className={__container}>
            <div className={__number}>49</div>
            <div>{"}"}</div>
          </div>
        </code>
      </pre>
    </div>
  );
};

export default Code;
