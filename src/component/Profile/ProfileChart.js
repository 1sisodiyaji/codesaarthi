import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import config from '../../config/config';  
import Graph from '../Graph';
import { useSelector } from 'react-redux';

const ProfileChart = () => {
    const [articleData, setArticleData] = useState([]);
    const [questionData, setQuestionData] = useState([]);
    const [answerData, setAnswerData] = useState([]);
    const user = useSelector((state) => state.user.user);  

    useEffect(() => {
        if (user?._id) {
            const fetchData = async () => {
                try {
                    const [articleRes, questionRes, answerRes] = await Promise.all([
                        axios.get(`${config.BASE_URL}/article/getMonthlyArticleData/${user._id}`),
                        axios.get(`${config.BASE_URL}/article/getMonthlyQuestionData/${user._id}`),
                        axios.get(`${config.BASE_URL}/article/getMonthlyAnswerData/${user._id}`)
                    ]);

                    if (articleRes.status === 200) setArticleData(articleRes.data.monthlyArticleData);
                    if (questionRes.status === 200) setQuestionData(questionRes.data.monthlyQuestionData);
                    if (answerRes.status === 200) setAnswerData(answerRes.data.monthlyAnswerData);
                } catch (error) {
                    console.error("Failed to fetch data:", error);
                    toast.error("Failed to fetch data");
                }
            };

            fetchData();
        }
    }, [user]);

    const months = useMemo(
        () => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        []
    );

    const questionChartData = useMemo(
        () => months.map((month, index) => ({
            label: month,
            y: questionData[index] || 0,
        })),
        [months, questionData]
    );

    const articleChartData = useMemo(
        () => months.map((month, index) => ({
            label: month,
            y: articleData[index] || 0,
        })),
        [months, articleData]
    );

    const answerChartData = useMemo(
        () => months.map((month, index) => ({
            label: month,
            y: answerData[index] || 0,
        })),
        [months, answerData]
    );

    const articleChartOptions = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "dark2",
        title: {
            text: "Monthly Articles",
        },
        axisY: {
            includeZero: true,
        },
        data: [
            {
                type: "spline",
                indexLabelFontColor: "#5A5757",
                indexLabelPlacement: "outside",
                name: "Articles Posted By You",
                showInLegend: true,
                dataPoints: articleChartData,
            },
        ],
    };

    const questionChartOptions = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "dark2",
        title: {
            text: "Monthly Questions Activity",
        },
        axisY: {
            includeZero: true,
        },
        data: [
            {
                type: "pie",
                showInLegend: true,
                dataPoints: questionChartData,
            },
        ],
    };

    const answerChartOptions = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "dark2",
        title: {
            text: "Monthly Answers Activity",
        },
        axisY: {
            includeZero: true,
        },
        data: [
            {
                type: "splineArea",
                name: "Answers Given",
                showInLegend: true,
                dataPoints: answerChartData,
            },
        ],
    };

    return (
        <div>
            <ToastContainer />
            <div className="row my-2">
                <div className="col-md-6 col-12 my-2">
                    <Graph options={articleChartOptions} />
                </div>
                <div className="col-md-6 col-12 my-2">
                    <Graph options={questionChartOptions} />
                </div>
                <div className="col-md-12 col-12 my-2">
                    <Graph options={answerChartOptions} />
                </div>
            </div>
        </div>
    );
};

export default ProfileChart;
