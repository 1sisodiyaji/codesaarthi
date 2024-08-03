import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import config from '../../config/config';  
import Graph from '../Graph';
import { useSelector } from 'react-redux';
import ErrorBoundary from '../ErrorBoundary';

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

  const formatDataForChart = (data, type) => {
    const chartData = [
      ['Month', 'Value'],
      ...months.map((month, index) => [month, data[index] || 0])
    ];

    return {
      chartType: type,
      data: chartData,
      width: "100%",
      height: "400px"
    };
  };

  const articleChartOptions = formatDataForChart(articleData, 'LineChart');
  const questionChartOptions = formatDataForChart(questionData, 'PieChart');
  const answerChartOptions = formatDataForChart(answerData, 'AreaChart');

  return (
    <div>
      <ToastContainer />
      <div className="row my-2">
        <div className="col-md-6 col-12 my-2">
          <ErrorBoundary>
            <Graph options={articleChartOptions} />
          </ErrorBoundary>
        </div>
        <div className="col-md-6 col-12 my-2">
          <ErrorBoundary>
            <Graph options={questionChartOptions} />
          </ErrorBoundary>
        </div>
        <div className="col-md-12 col-12 my-2">
          <ErrorBoundary>
            <Graph options={answerChartOptions} />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default ProfileChart;
