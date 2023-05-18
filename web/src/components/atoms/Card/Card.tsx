// import { useState } from 'react';
// import { ResponsiveContainer, LineChart, Line, Tooltip, Area, AreaChart } from 'recharts';

// import type { IExercise } from 'utils/db.types';
// import { getMonthAndYear } from 'utils';

// import style from './Card.module.scss';

// interface ICardProps extends IExercise {
// }

// export function Card({
//   en,
//   ru,
//   id,
//   highest,
//   good,
//   history,
// }: ICardProps): JSX.Element {
//   const [isCollapsed, setCollapse] = useState<boolean>(true);
//   const firstDay = history[0].date.toMillis();
//   const lastDay = history[history.length - 1].date.toMillis();

//   const data = history.map(({ weight, date }) => ({
//     date: getMonthAndYear(date.toMillis()),
//     w: weight,
//   }));

//   return (
//     <div id={id} className={style.root}>
//       <div
//         className={style.coloredBg}
//         onClick={() => setCollapse(!isCollapsed)}
//       >
//         <div className={style.exerciseTitles}>
//           <div>
//             <span>🇺🇸</span> {en}
//           </div>
//           <div>
//             <span>🇷🇺</span> {ru}
//           </div>
//         </div>
//         <div
//           className={style.icon}
//         >
//           {isCollapsed ? '👇' : '👆'}
//         </div>
//       </div>
//       {!isCollapsed && (
//         <div className={style.details}>
//           <div className={style.chart}>
//             <ResponsiveContainer width="100%" height={100}>
//               {/* <LineChart width={300} height={100} data={data}>
//                 <Line type="monotone" dataKey="w" stroke="#FF3CAC" strokeWidth={2} />
//                 <Tooltip  />
//               </LineChart> */}
//               <AreaChart width={300} height={100} data={data}>
//                 <defs>
//                   <linearGradient id="colorW" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#2AF598" stopOpacity={0.8}/>
//                     <stop offset="95%" stopColor="#2AF598" stopOpacity={0}/>
//                   </linearGradient>
//                 </defs>
//                 <Tooltip />
//                 <Area type="monotone" dataKey="w" stroke="#2AF598" fillOpacity={1} strokeWidth={2} fill="url(#colorW)" />
//               </AreaChart>
//             </ResponsiveContainer>
//             <div className={style.dates}>
//               <div>{getMonthAndYear(firstDay)}</div>
//               <div>{getMonthAndYear(lastDay)}</div>
//             </div>
//           </div>
//           <div className={style.weights}>
//             <div>
//               Highest: <b>{highest}</b> kgs
//             </div>
//             <div>
//               Good: <b>{good}</b> kgs
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

export function Card() {
  return (
    <div>Card</div>
  )
}

