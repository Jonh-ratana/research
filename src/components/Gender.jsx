import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from 'recharts';

export default function GenderPieChart() {
  const data = [
    { name: 'Male', value: 12 },
    { name: 'Female', value: 18 },
  ];

  const COLORS = ['#0088FE', '#FF8042', '#FFBB28'];

  // Detect small screens
  const isSmallScreen = window.innerWidth < 600;

  // Custom label renderer
  const renderCustomLabel = ({ name, percent, x, y }) => {
    const isMale = name === 'Male';
    return (
      <text
        x={x}
        y={y}
        fill={isMale ? '#0088FE' : '#FF8042'} // Different color for Male and Female
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={isSmallScreen ? 12 : 14} // Adjust font size for small screens
        fontWeight="bold"
      >
        {`${name}: ${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div
      className="Chart"
      style={{
        width: '100%',
        height: isSmallScreen ? 300 : 400, // Smaller height for mobile devices
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={isSmallScreen ? 80 : 100} // Smaller radius for mobile devices
            fill="#8884d8"
            label={renderCustomLabel} // Apply the custom label renderer
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          {/* <Legend
            layout={isSmallScreen ? 'horizontal' : 'vertical'} // Adjust legend layout for small screens
            align={isSmallScreen ? 'center' : 'right'} // Center legend on small screens
            verticalAlign="middle"
          /> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
