import React from 'react';
import Gender from './Gender';
import Eazy_bank from './Eazy_bank';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import Horizontal from './Horizantal';
import Download from './Download';



export default function BarChartExample() {
  const data = [
    { name: 'ABA', value: 25 },
    { name: 'ACLIDA', value: 23 },
    { name: 'CANADIA', value: 6 },
    { name: 'WING', value: 5 },
    { name: 'PRINCE', value: 2 },
    { name: 'VATANAC', value: 2 },
    { name: 'JTRUST', value: 1 },
    { name: 'BRASAK', value: 1 },
  ];

  const isSmallScreen = window.innerWidth < 600; // Detect small screens

  return (
    <>
   
    <div className="gender">
        <Gender/>
      </div>
      <h2 className='text-center mt-10'><b>ធនាគារដែលប្រើប្រាស់ដែលមានអ្នកប្រើប្រាស់ច្រើន</b></h2>
      <div className="chart-container" style={{ width: '100%', height: '500px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 40, right: 30, left: 20, bottom: isSmallScreen ? 80 : 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis
              dataKey="name"
              tick={{
                fill: '#555',
                fontSize: isSmallScreen ? 12 : 14, // Adjust font size for small screens
                angle: isSmallScreen ? -45 : 0, // Rotate labels for small screens
                textAnchor: isSmallScreen ? 'end' : 'middle', // Align rotated labels properly
              }}
              interval={0} // Ensure all labels are displayed
            />
            <YAxis tick={{ fill: '#555', fontSize: 14 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#f5f5f5', borderRadius: '8px' }}
              cursor={{ fill: 'rgba(200, 200, 200, 0.3)' }}
            />
            <Legend verticalAlign="top"  height={36} />
            <Bar
              dataKey="value"
              fill="url(#colorGradient)"
              radius={[10, 10, 0, 0]}
              barSize={isSmallScreen ? 20 : 40} // Adjust bar size for small screens
            >
              <LabelList dataKey="value" position="top" fill="#333" fontSize={14} />
            </Bar>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8884d8" />
                <stop offset="100%" stopColor="#82ca9d" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
     
      <h5 style={{textAlign:"center", margin:"10px 0 0 0"}}>ធនាគារដែលស្រួលប្រើប្រាស់</h5>
      <div className="eazy_bank">
      <Eazy_bank/>
      </div>
      <div className="horizantl">
      <h5 style={{textAlign:"center"}}>តើអ្នកចូលចិត្តចំណាយជាក្រដាស់ប្រាក់ផ្តាល់ឬជាសាច់ប្រាក់ឌីជីថល?</h5>
        <Horizontal/>
      </div>
      <div className='container'>
        
      </div>
      <br /><br /><br /><br /><br />
    </>
    
  );
  
}
