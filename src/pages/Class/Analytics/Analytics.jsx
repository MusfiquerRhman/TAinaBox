import React, { useContext } from 'react';
import AnalyticsCard from '../../../components/UI Elements/AnalyticsCard';
import { AnalyticsContext } from '../../../contexts/AnalyticsContext';
import Filers from './Filters';
import LineChart from './LineChart';
import PieChart from './PieChart';

const Analytics = () => {
    const { analyticsState } = useContext(AnalyticsContext);

    const questionsData = {
        labels: analyticsState.questionsDataset.labels,
        datasets: [
            {
                label: 'Questions',
                data: analyticsState.questionsDataset.data,
                borderColor: 'rgb(76, 175, 80)',
                backgroundColor: 'rgba(76, 175, 80, 0.5)',
            },
        ],
    };

    const satisfactionData = {
        labels: analyticsState.satisfaction.labels,
        datasets: [
            {
                label: 'Positive',
                data: analyticsState.satisfaction.dataset_1,
                borderColor: 'rgb(76, 175, 80)',
                backgroundColor: 'rgba(76, 175, 80, 0.5)',
            },
            {
                label: 'Negative',
                data: analyticsState.satisfaction.dataset_2,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    const demographicData = {
        labels: analyticsState.demographicData.labels,
        datasets: [
            {
                label: 'People',
                data: analyticsState.demographicData.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(153, 102, 255,0.5)',
                    'rgba(67, 160, 71, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255,1)',
                    'rgba(67, 160, 71, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <section className='topic__container'>
            <Filers />
            <div className='question__chart'>
                <h3 className='title-secondary'>Questions Asked</h3>
                <LineChart data={questionsData} />
            </div>
            <div className='question__chart'>
                <h3 className='title-secondary'>Satisfaction</h3>
                <LineChart data={satisfactionData} />
            </div>
            <div className='analytics__data'>
                <div className='demographic__chart'>
                    <h3 className='title-secondary'>Demographic Chart</h3>
                    <PieChart data={demographicData}/>
                </div>
                <div className='demographic__cards'>
                    <div className='analytics__cards'>
                        <AnalyticsCard value={12345} text={'Inquiries Today'}/>
                        <AnalyticsCard value={12345} text={'Inquiries This Month'}/>
                        <AnalyticsCard value={12345} text={'Inquiries This Year'}/>
                        <AnalyticsCard value={12345} text={'Inquiries Overall'}/>
                    </div>
                    <div className='analytics__cards'>
                        <AnalyticsCard percent={true} value={12.45} text={'Satisfaction Rate Today'}/>
                        <AnalyticsCard percent={true} value={12.45} text={'Satisfaction Rate This Month'}/>
                        <AnalyticsCard percent={true} value={12.45} text={'Satisfaction Rate This Year'}/>
                        <AnalyticsCard percent={true} value={12.45} text={'Satisfaction Rate Overall'}/>
                    </div>
                    <div className='analytics__cards'>
                        <AnalyticsCard ratio={true} value={'1:345'} text={'Average Rate Links Clicked per Inquiry'}/>
                        <AnalyticsCard value={12.35} text={'Average Inquiries per Active User Per Day'}/>
                        <AnalyticsCard value={12.35} text={'Average Inquiries per Active User Per Week'}/>
                        <AnalyticsCard value={12.34} text={'Average Inquiries per User Overall'}/>
                    </div>
                    <div className='analytics__cards'>
                        <AnalyticsCard value={12345} text={'User Active Today'}/>
                        <AnalyticsCard value={12345} text={'User Active This Week'}/>
                        <AnalyticsCard value={12345} text={'Inactive users'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Analytics;