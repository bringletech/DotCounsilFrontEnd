// import React from 'react'
// import { cardDetail, analysisCardDetail } from '../../constants/constants'
// import DashCardSmall from './DashCardSmall'

// function DashCardContainer({ type, stats, analysisStats }) {
//   // array select kro type ke hisaab se
//   const cards = type === "dash" ? cardDetail : analysisCardDetail;

//   return (
//     <div className="cards w-full flex gap-2">
//       {cards.map((card, idx) => {
//         let digits = 0;

//         // dashboard condition
//         if (type === "dash") {
//           if (card.title === "Total Users") digits = stats.totalUsers;
//           if (card.title === "Active Users") digits = stats.activeUsers;
//           if (card.title === "Total Courses") digits = stats.totalCourses;
//           if (card.title === "Revenue") digits = stats.revenue;
//         }

//         // analysis condition
//         if (type === "analysis") {
//           if (card.title === "Total Revenue") digits = analysisStats.TotalRevenue;
//           if (card.title === "Total Enrollment") digits = analysisStats.TotalEnrollment;
//           if (card.title === "Completion Rate") digits = analysisStats.completionRate;
//           if (card.title === "Avg Revenue User") digits = analysisStats.AvgRevenueUser;
//         }

//         return <DashCardSmall key={idx} {...card} digits={digits} />
//       })}
//     </div>
//   )
// }

// export default DashCardContainer
