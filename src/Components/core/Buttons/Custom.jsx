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
         
         <div className="max-w-screen bg-gray-300 dark:bg-Navbgcolor flex space-x-3 overflow-x-scroll">
    {/* Accordion */}
    <button className="rounded shadow-lg bg-blue-200 px-2 py-1 capitalize">Accordion</button>

    {/* Toggle */}
    <button className="rounded shadow-lg bg-green-300 px-4 py-2">Toggle</button>

    {/* Alert */}
    <button className="rounded shadow-lg bg-red-400 px-4 py-2">Alert</button>

    {/* Avatar */}
    <button className="rounded shadow-lg bg-yellow-200 px-4 py-2">Avatar</button>

    {/* Badge */}
    <button className="rounded shadow-lg bg-purple-200 px-4 py-2">Badge</button>

    {/* Bottom Navigation */}
    <button className="rounded shadow-lg bg-teal-200 px-4 py-2">Bottom Navigation</button>

    {/* Breadcrumbs */}
    <button className="rounded shadow-lg bg-indigo-200 px-4 py-2">Breadcrumbs</button>

    {/* Buttons */}
    <button className="rounded shadow-lg bg-pink-300 px-4 py-2">Button</button>

    {/* Card */}
    <button className="rounded shadow-lg bg-gray-200 px-4 py-2">Card</button>

    {/* Carousel */}
    <button className="rounded shadow-lg bg-blue-300 px-4 py-2">Carousel</button>

    {/* Chatbubble */}
    <button className="rounded shadow-lg bg-green-200 px-4 py-2">Chatbubble</button>

    {/* Chatbox */}
    <button className="rounded shadow-lg bg-yellow-300 px-4 py-2">Chatbox</button>

    {/* Collapse */}
    <button className="rounded shadow-lg bg-red-300 px-4 py-2">Collapse</button>

    {/* Countdown */}
    <button className="rounded shadow-lg bg-purple-300 px-4 py-2">Countdown</button>

    {/* Diff */}
    <button className="rounded shadow-lg bg-teal-300 px-4 py-2">Diff</button>

    {/* Divider */}
    <button className="rounded shadow-lg bg-indigo-300 px-4 py-2">Divider</button>

    {/* Drawer */}
    <button className="rounded shadow-lg bg-pink-200 px-4 py-2">Drawer</button>

    {/* Dropdown */}
    <button className="rounded shadow-lg bg-gray-300 px-4 py-2">Dropdown</button>

    {/* File Input */}
    <button className="rounded shadow-lg bg-blue-400 px-4 py-2">File Input</button>

    {/* Footer */}
    <button className="rounded shadow-lg bg-green-400 px-4 py-2">Footer</button>

    {/* Hero */}
    <button className="rounded shadow-lg bg-yellow-400 px-4 py-2">Hero</button>

    {/* Indicator */}
    <button className="rounded shadow-lg bg-red-400 px-4 py-2">Indicator</button>

    {/* Text Input */}
    <button className="rounded shadow-lg bg-purple-400 px-4 py-2">Text Input</button>

    {/* Join */}
    <button className="rounded shadow-lg bg-teal-400 px-4 py-2">Join</button>

    {/* KBD */}
    <button className="rounded shadow-lg bg-indigo-400 px-4 py-2">KBD</button>

    {/* Link */}
    <button className="rounded shadow-lg bg-pink-400 px-4 py-2">Link</button>

    {/* Browser Mockup */}
    <button className="rounded shadow-lg bg-gray-400 px-4 py-2">Browser Mockup</button>

    {/* Code Mockup */}
    <button className="rounded shadow-lg bg-blue-500 px-4 py-2">Code Mockup</button>

    {/* Phone Mockup */}
    <button className="rounded shadow-lg bg-green-500 px-4 py-2">Phone Mockup</button>

    {/* Window Mockup */}
    <button className="rounded shadow-lg bg-yellow-500 px-4 py-2">Window Mockup</button>

    {/* Modal */}
    <button className="rounded shadow-lg bg-red-500 px-4 py-2">Modal</button>

    {/* Pagination */}
    <button className="rounded shadow-lg bg-purple-500 px-4 py-2">Pagination</button>

    {/* Progress */}
    <button className="rounded shadow-lg bg-teal-500 px-4 py-2">Progress</button>

    {/* Radial Progress */}
    <button className="rounded shadow-lg bg-indigo-500 px-4 py-2">Radial Progress</button>

    {/* Radio */}
    <button className="rounded shadow-lg bg-pink-500 px-4 py-2">Radio</button>

    {/* Range Slider */}
    <button className="rounded shadow-lg bg-gray-500 px-4 py-2">Range Slider</button>

    {/* Skeleton */}
    <button className="rounded shadow-lg bg-blue-600 px-4 py-2">Skeleton</button>

    {/* Stack */}
    <button className="rounded shadow-lg bg-green-600 px-4 py-2">Stack</button>

    {/* Stars */}
    <button className="rounded shadow-lg bg-yellow-600 px-4 py-2">Stars</button>

    {/* Steps */}
    <button className="rounded shadow-lg bg-red-600 px-4 py-2">Steps</button>

    {/* Swap */}
    <button className="rounded shadow-lg bg-purple-600 px-4 py-2">Swap</button>

    {/* Tabs */}
    <button className="rounded shadow-lg bg-teal-600 px-4 py-2">Tabs</button>

    {/* Table */}
    <button className="rounded shadow-lg bg-indigo-600 px-4 py-2">Table</button>

    {/* Textarea */}
    <button className="rounded shadow-lg bg-pink-600 px-4 py-2">Textarea</button>

    {/* Theme Controller */}
    <button className="rounded shadow-lg bg-gray-600 px-4 py-2">Theme Controller</button>

    {/* Timeline */}
    <button className="rounded shadow-lg bg-blue-700 px-4 py-2">Timeline</button>

    {/* Toast */}
    <button className="rounded shadow-lg bg-green-700 px-4 py-2">Toast</button>

    {/* Tooltip */}
    <button className="rounded shadow-lg bg-yellow-700 px-4 py-2">Tooltip</button>
</div>



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
