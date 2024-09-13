import React, { useState } from "react";

const Customssss = () => {
    // State for all CSS properties
    const [width, setWidth] = useState("100px");
    const [height, setHeight] = useState("50px");
    const [border, setBorder] = useState("2px solid black");
    const [borderRadius, setBorderRadius] = useState("2px");
    const [boxShadow, setBoxShadow] = useState("2px 2px 10px black");
    const [padding, setPadding] = useState("10px");
    const [margin, setMargin] = useState("10px");
    const [text, setText] = useState("Button");
    const [textColor, setTextColor] = useState("black");
    const [textShadow, setTextShadow] = useState("2px 2px 4px black");
    const [backgroundColor, setBackgroundColor] = useState("white");

    return (
        <>
        
         <div className="w-[710px] h-[410px] border relative left-12 top-[110px] rotate-1 shadow-xl shadow-black rounded-lg"></div>
        <div className="flex justify-between p-8 w-full  relative -top-80">


            {/* Preview Section */}
           
            <div className="w-1/2 h-[400px] border text-center pt-4 p-2 rounded-xl shadow-lg shadow-black">
                <h2 className="text-lg font-bold mb-4 text-textcolor">Design Preview</h2>
                <div className="w-full h-[320px] border-2 rounded-lg relative bg-transparent shadow-inner shadow-black  ">
                    <button className="flex items-center justify-center relative  left-2 top-12  "
                        style={{
                            width: width,
                            height: height,
                            border: border,
                            borderRadius: borderRadius,
                            boxShadow: boxShadow,
                            padding: padding,
                            margin: margin,
                            color: textColor,
                            textShadow: textShadow,

                            backgroundColor: backgroundColor, // default background color
                        }}
                    >
                        <span>{text}</span>
                    </button>
                </div>
            </div>

            {/* Input Section */}

            <div className="border w-[600px]  shadow-xl shadow-black rounded-lg    ">
                <h2 className="text-lg font-bold mb-4 text-textcolor text-center" >PlayGround </h2>
                <div className=" pb-12">
                    <table style={{ width: "100%" }}  >
                        <tr className="text-white font-bold  text-xl relative left-20">
                            <td className="ml-12"> <label className="block   ">
                                Bg-Color:{" "}
                            </label>
                            </td>
                            <td><label className="block ">
                                Width:{" "} </label></td>
                        </tr>
                        <tr className="relative left-12">
                            <td>
                                <input
                                    type="text"
                                    value={backgroundColor}
                                    onChange={(e) => setBackgroundColor(e.target.value)}
                                    placeholder="e.g., lightblue"
                                    className="border border-gray-300 p-2 rounded-md"
                                />

                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={width}
                                    onChange={(e) => setWidth(e.target.value)}
                                    placeholder="e.g., 300px"
                                    className="border border-gray-300 p-2 rounded-md"
                                />

                            </td>
                        </tr>

                        <tr className="text-white font-bold  text-xl relative left-20">
                            <td><label className="block ">
                                Height:{" "}</label></td>
                            <td><label className="block ">
                                Border:{" "}</label></td>
                        </tr>

                        <tr className="relative left-12">
                            <td> <input
                                type="text"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                placeholder="e.g., 300px"
                                className="border border-gray-300 p-2 rounded-md"
                            /></td>
                            <td> <td>
                                <input
                                    type="text"
                                    value={border}
                                    onChange={(e) => setBorder(e.target.value)}
                                    placeholder="e.g., 2px solid red"
                                    className="border border-gray-300 p-2 rounded-md"
                                />
                            </td></td>
                        </tr>
                        {/* <tr>
    <td></td>
    <td></td>
</tr> */}






                        <tr className="text-white font-bold  text-xl relative left-20">
                            <td><label className="block ">
                                Border-Radius:{" "}</label>

                            </td>
                            <td><label className="block ">
                                Box-Shadow:{" "}</label></td>

                        </tr>


                        <tr className="relative left-12">
                            <td>
                                <input
                                    type="text"
                                    value={borderRadius}
                                    onChange={(e) => setBorderRadius(e.target.value)}
                                    placeholder="e.g., 10px"
                                    className="border border-gray-300 p-2 rounded-md"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={boxShadow}
                                    onChange={(e) => setBoxShadow(e.target.value)}
                                    placeholder="e.g., 2px 2px 10px rgba(0, 0, 0, 0.2)"
                                    className="border border-gray-300 p-2 rounded-md"
                                />
                            </td>
                        </tr>



                        <tr className="text-white font-bold  text-xl relative left-20">
                            <td> <label className="block ">
                                Padding:{" "}</label></td>
                            <td><label className="block ">
                                Margin:{" "}</label></td>
                        </tr>

                        <tr className="relative left-12">
                            <td>
                                <input
                                    type="text"
                                    value={padding}
                                    onChange={(e) => setPadding(e.target.value)}
                                    placeholder="e.g., 10px"
                                    className="border border-gray-300 p-2 rounded-md"
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={margin}
                                    onChange={(e) => setMargin(e.target.value)}
                                    placeholder="e.g., 10px"
                                    className="border border-gray-300 p-2 rounded-md"
                                />
                            </td>
                        </tr>
                        <tr className="text-white font-bold  text-xl relative left-20">
                            <td> <label className="block ">
                                Text:{" "}</label></td>
                            <td> <label className="block ">
                                Text Color:{" "}</label></td>
                        </tr>

                        <tr className="relative left-12">
                            <td>

                                <input
                                    type="text"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="e.g., Preview Box"
                                    className="border border-gray-300 p-2 rounded-md"
                                />


                            </td>
                            <td>

                                <input
                                    type="text"
                                    value={textColor}
                                    onChange={(e) => setTextColor(e.target.value)}
                                    placeholder="e.g., red"
                                    className="border border-gray-300 p-2 rounded-md"
                                />

                            </td>
                        </tr>

                        <tr className="text-white font-bold  text-xl relative left-20">
                            <td>
                                <label className="block mb-2">Text Shadow:{" "}</label>
                            </td>
                        </tr>

                        <tr className="relative left-12">
                            <td>

                                <input
                                    type="text"
                                    value={textShadow}
                                    onChange={(e) => setTextShadow(e.target.value)}
                                    placeholder="e.g., 2px 2px 4px rgba(0, 0, 0, 0.2)"
                                    className="border border-gray-300 p-2 rounded-md"
                                />

                            </td>
                        </tr>

                    </table>
                </div>
            </div>

        </div>
        </>
    );
};

export default Customssss;
