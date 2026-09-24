'use client';

import ActivityCalendar, { ThemeInput } from 'react-activity-calendar';

interface LeetCodeCalendarProps {
  submissionCalendar: string;
}

const LeetCodeCalendar = ({ submissionCalendar }: LeetCodeCalendarProps) => {
  const calendarObj = JSON.parse(submissionCalendar || '{}');
  
  // Create a map of date string to count
  const dateToCount = new Map<string, number>();
  Object.keys(calendarObj).forEach((timestamp) => {
    const date = new Date(parseInt(timestamp) * 1000);
    const dateStr = date.toISOString().split('T')[0];
    dateToCount.set(dateStr, calendarObj[timestamp]);
  });

  // Generate data for the last 365 days
  const activities = [];
  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0];
    const count = dateToCount.get(dateStr) || 0;
    
    let level = 0;
    if (count > 0) level = 1;
    if (count >= 3) level = 2;
    if (count >= 6) level = 3;
    if (count >= 10) level = 4;

    activities.push({
      date: dateStr,
      count,
      level: level as 0 | 1 | 2 | 3 | 4
    });
  }

  const explicitTheme: ThemeInput = {
    light: ['#282828', '#00b8a340', '#00b8a370', '#00b8a3a0', '#00b8a3'],
    dark: ['#282828', '#00b8a340', '#00b8a370', '#00b8a3a0', '#00b8a3'],
  };

  return (
    <ActivityCalendar 
      data={activities} 
      theme={explicitTheme}
      colorScheme="dark"
      hideColorLegend
      hideMonthLabels
      style={{ width: '100%' }}
    />
  );
};

export default LeetCodeCalendar;
