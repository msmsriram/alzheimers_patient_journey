// // // // import React, { useState } from 'react';
// // // // import { Card } from '../ui/card';
// // // // import { 
// // // //   ArrowRight,
// // // //   Stethoscope,
// // // //   Building2,
// // // //   User,
// // // //   LineChart,
// // // //   ClipboardCheck,
// // // //   AlertTriangle
// // // // } from 'lucide-react';

// // // // const JourneyStage = ({ stage, metrics, barriers, findings }) => {
// // // //   const [expandedAction, setExpandedAction] = useState(null);

// // // //   const handleActionClick = (actionName) => {
// // // //     setExpandedAction(prevAction => (prevAction === actionName ? null : actionName));
// // // //   };

// // // //   return (
// // // //     <div className="relative w-full">
// // // //       <Card className="bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 p-6 mb-6 shadow-lg rounded-lg border border-purple-200">
// // // //         <div className="flex items-center gap-4 mb-6">
// // // //           <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-md">
// // // //             <span className="text-2xl font-bold text-white">{stage.number}</span>
// // // //           </div>
// // // //           <div>
// // // //             <h2 className="text-xl font-bold text-purple-900">{stage.title}</h2>
// // // //             <p className="text-sm text-purple-700">{stage.timeframe}</p>
// // // //           </div>
// // // //         </div>

// // // //         <p className="text-gray-700 mb-6">{stage.description}</p>

// // // //         {/* Action items with arrows */}
// // // //         <div className="flex items-center gap-4 mb-6">
// // // //           {stage.actions.map((action, idx) => (
// // // //             <React.Fragment key={idx}>
// // // //               <button
// // // //                 className="flex-1 bg-white p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg focus:outline-none"
// // // //                 onClick={() => handleActionClick(action.name)}
// // // //               >
// // // //                 <div className="text-sm font-medium text-purple-900">{action.name}</div>
// // // //               </button>
// // // //               {idx < stage.actions.length - 1 && (
// // // //                 <ArrowRight className="w-6 h-6 text-purple-400 flex-shrink-0" />
// // // //               )}
// // // //             </React.Fragment>
// // // //           ))}
// // // //         </div>

// // // //         {/* Expandable content area */}
// // // //         {expandedAction && (
// // // //           <div className="bg-purple-50 p-4 rounded-lg shadow-inner mt-4 transition-all duration-300">
// // // //             <h3 className="text-purple-800 font-semibold mb-2">
// // // //               {expandedAction}
// // // //             </h3>
// // // //             <p className="text-gray-700 text-sm">
// // // //               {stage.actions.find(action => action.name === expandedAction)?.content}
// // // //             </p>
// // // //           </div>
// // // //         )}
// // // //       </Card>

// // // //       {/* Grid layout for metrics, barriers, and findings */}
// // // //       <div className="grid grid-cols-12 gap-6">
// // // //         {/* Key Metrics */}
// // // //         <div className="col-span-3">
// // // //           <Card className="h-full p-5 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow-lg">
// // // //             <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
// // // //               <LineChart className="w-4 h-4" />
// // // //               Key Metrics
// // // //             </h3>
// // // //             <div className="space-y-3">
// // // //               {metrics.map((metric, idx) => (
// // // //                 <div key={idx} className="bg-white p-3 rounded-lg shadow-md">
// // // //                   <div className="text-xl font-bold text-blue-600">{metric.value}</div>
// // // //                   <div className="text-sm text-gray-600">{metric.label}</div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </Card>
// // // //         </div>

// // // //         {/* Key Barriers */}
// // // //         <div className="col-span-6">
// // // //           <Card className="h-full p-5 bg-white shadow-lg rounded-lg">
// // // //             <h3 className="font-semibold mb-3 text-gray-800">Key Barriers</h3>
// // // //             <div className="grid grid-cols-3 gap-4">
// // // //               {Object.entries(barriers).map(([key, barrierGroup], groupIdx) => (
// // // //                 <div key={groupIdx} className={`bg-${key}-50 p-3 rounded-lg shadow-md`}>
// // // //                   <div className="flex items-center gap-2 mb-2">
// // // //                     {key === 'physician' && <Stethoscope className="w-4 h-4 text-red-600" />}
// // // //                     {key === 'system' && <Building2 className="w-4 h-4 text-blue-600" />}
// // // //                     {key === 'patient' && <User className="w-4 h-4 text-green-600" />}
// // // //                     <h4 className={`text-sm font-semibold text-${key}-900 capitalize`}>{key}</h4>
// // // //                   </div>
// // // //                   <ul className="space-y-2">
// // // //                     {barrierGroup.map((barrier, idx) => (
// // // //                       <li key={idx} className="text-xs flex items-start gap-1">
// // // //                         <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" />
// // // //                         <div>
// // // //                           <span>{barrier.description}</span>
// // // //                           {barrier.subpoints && (
// // // //                             <ul className="mt-1 ml-4 text-gray-600 list-disc list-inside">
// // // //                               {barrier.subpoints.map((subpoint, subIdx) => (
// // // //                                 <li key={subIdx} className="text-xs">{subpoint}</li>
// // // //                               ))}
// // // //                             </ul>
// // // //                           )}
// // // //                         </div>
// // // //                       </li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </Card>
// // // //         </div>

// // // //         {/* Key Findings */}
// // // //         <div className="col-span-3">
// // // //           <Card className="h-full p-5 bg-gradient-to-b from-purple-50 to-purple-100 shadow-lg rounded-lg">
// // // //             <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
// // // //               <ClipboardCheck className="w-4 h-4" />
// // // //               Key Findings
// // // //             </h3>
// // // //             <div className="space-y-3">
// // // //               {findings.map((finding, idx) => (
// // // //                 <div key={idx} className="bg-white p-3 rounded-lg shadow-md text-sm text-gray-700 flex items-start gap-2">
// // // //                   <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
// // // //                   <span>{finding}</span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </Card>
// // // //         </div>
// // // //       </div>

// // // //       <div className="absolute left-8 bottom-0 w-0.5 h-8 bg-purple-200" />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default JourneyStage;

// // // import React, { useState } from 'react';
// // // import { Card } from '../ui/card';
// // // import { 
// // //   ArrowRight,
// // //   Stethoscope,
// // //   Building2,
// // //   User,
// // //   LineChart,
// // //   ClipboardCheck,
// // //   AlertTriangle
// // // } from 'lucide-react';

// // // const JourneyStage = ({ stage, metrics, barriers, findings }) => {
// // //   const [hoveredAction, setHoveredAction] = useState(null);

// // //   const handleActionHover = (actionName) => {
// // //     setHoveredAction(actionName);
// // //   };

// // //   const handleActionLeave = () => {
// // //     setHoveredAction(null);
// // //   };

// // //   return (
// // //     <div className="relative w-full">
// // //       <Card className="bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 p-6 mb-6 shadow-lg rounded-lg border border-purple-200">
// // //         <div className="flex items-center gap-4 mb-6">
// // //           <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-md">
// // //             <span className="text-2xl font-bold text-white">{stage.number}</span>
// // //           </div>
// // //           <div>
// // //             <h2 className="text-xl font-bold text-purple-900">{stage.title}</h2>
// // //             <p className="text-sm text-purple-700">{stage.timeframe}</p>
// // //           </div>
// // //         </div>

// // //         <p className="text-gray-700 mb-6">{stage.description}</p>

// // //         {/* Action items with hover effect */}
// // //         <div className="flex items-center gap-4 mb-6">
// // //           {stage.actions.map((action, idx) => (
// // //             <React.Fragment key={idx}>
// // //               <div
// // //                 className="flex-1 bg-white p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg cursor-pointer"
// // //                 onMouseEnter={() => handleActionHover(action.name)}
// // //                 onMouseLeave={handleActionLeave}
// // //               >
// // //                 <div className="text-sm font-medium text-purple-900">{action.name}</div>
// // //               </div>
// // //               {idx < stage.actions.length - 1 && (
// // //                 <ArrowRight className="w-6 h-6 text-purple-400 flex-shrink-0" />
// // //               )}
// // //             </React.Fragment>
// // //           ))}
// // //         </div>

// // //         {/* Expandable content area */}
// // //         {hoveredAction && (
// // //           <div className="bg-purple-50 p-4 rounded-lg shadow-inner mt-4 transition-all duration-300">
// // //             <h3 className="text-purple-800 font-semibold mb-2">
// // //               {hoveredAction}
// // //             </h3>
// // //             <p className="text-gray-700 text-sm">
// // //               {stage.actions.find(action => action.name === hoveredAction)?.content}
// // //             </p>
// // //           </div>
// // //         )}
// // //       </Card>

// // //       {/* Grid layout for metrics, barriers, and findings */}
// // //       <div className="grid grid-cols-12 gap-6">
// // //         {/* Key Metrics */}
// // //         <div className="col-span-3">
// // //           <Card className="h-full p-5 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow-lg">
// // //             <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
// // //               <LineChart className="w-4 h-4" />
// // //               Key Metrics
// // //             </h3>
// // //             <div className="space-y-3">
// // //               {metrics.map((metric, idx) => (
// // //                 <div key={idx} className="bg-white p-3 rounded-lg shadow-md">
// // //                   <div className="text-xl font-bold text-blue-600">{metric.value}</div>
// // //                   <div className="text-sm text-gray-600">{metric.label}</div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </Card>
// // //         </div>

// // //         {/* Key Barriers */}
// // //         <div className="col-span-6">
// // //           <Card className="h-full p-5 bg-white shadow-lg rounded-lg">
// // //             <h3 className="font-semibold mb-3 text-gray-800">Key Barriers</h3>
// // //             <div className="grid grid-cols-3 gap-4">
// // //               {Object.entries(barriers).map(([key, barrierGroup], groupIdx) => (
// // //                 <div key={groupIdx} className={`bg-${key}-50 p-3 rounded-lg shadow-md`}>
// // //                   <div className="flex items-center gap-2 mb-2">
// // //                     {key === 'physician' && <Stethoscope className="w-4 h-4 text-red-600" />}
// // //                     {key === 'system' && <Building2 className="w-4 h-4 text-blue-600" />}
// // //                     {key === 'patient' && <User className="w-4 h-4 text-green-600" />}
// // //                     <h4 className={`text-sm font-semibold text-${key}-900 capitalize`}>{key}</h4>
// // //                   </div>
// // //                   <ul className="space-y-2">
// // //                     {barrierGroup.map((barrier, idx) => (
// // //                       <li key={idx} className="text-xs flex items-start gap-1">
// // //                         <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" />
// // //                         <div>
// // //                           <span>{barrier.description}</span>
// // //                           {barrier.subpoints && (
// // //                             <ul className="mt-1 ml-4 text-gray-600 list-disc list-inside">
// // //                               {barrier.subpoints.map((subpoint, subIdx) => (
// // //                                 <li key={subIdx} className="text-xs">{subpoint}</li>
// // //                               ))}
// // //                             </ul>
// // //                           )}
// // //                         </div>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </Card>
// // //         </div>

// // //         {/* Key Findings */}
// // //         <div className="col-span-3">
// // //           <Card className="h-full p-5 bg-gradient-to-b from-purple-50 to-purple-100 shadow-lg rounded-lg">
// // //             <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
// // //               <ClipboardCheck className="w-4 h-4" />
// // //               Key Findings
// // //             </h3>
// // //             <div className="space-y-3">
// // //               {findings.map((finding, idx) => (
// // //                 <div key={idx} className="bg-white p-3 rounded-lg shadow-md text-sm text-gray-700 flex items-start gap-2">
// // //                   <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
// // //                   <span>{finding}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </Card>
// // //         </div>
// // //       </div>

// // //       <div className="absolute left-8 bottom-0 w-0.5 h-8 bg-purple-200" />
// // //     </div>
// // //   );
// // // };

// // // export default JourneyStage;

// // import React, { useState } from 'react';
// // import { Card } from '../ui/card';
// // import { 
// //   ArrowRight,
// //   Stethoscope,
// //   Building2,
// //   User,
// //   LineChart,
// //   ClipboardCheck,
// //   AlertTriangle
// // } from 'lucide-react';

// // const JourneyStage = ({ stage, metrics, barriers, findings }) => {
// //   const [hoveredAction, setHoveredAction] = useState(null);

// //   const handleActionHover = (actionName) => {
// //     setHoveredAction(actionName);
// //   };

// //   const handleActionLeave = () => {
// //     setHoveredAction(null);
// //   };

// //   return (
// //     <div className="relative w-full">
// //       <Card className="bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 p-6 mb-6 shadow-lg rounded-lg border border-purple-200">
// //         <div className="flex items-center gap-4 mb-6">
// //           <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-md">
// //             <span className="text-2xl font-bold text-white">{stage.number}</span>
// //           </div>
// //           <div>
// //             <h2 className="text-xl font-bold text-purple-900">{stage.title}</h2>
// //             <p className="text-sm text-purple-700">{stage.timeframe}</p>
// //           </div>
// //         </div>

// //         <p className="text-gray-700 mb-6">{stage.description}</p>

// //         {/* Action items with hover effect */}
// //         <div className="flex items-center gap-4 mb-6">
// //           {stage.actions.map((action, idx) => (
// //             <React.Fragment key={idx}>
// //               <div
// //                 className="flex-1 bg-white p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg cursor-pointer"
// //                 onMouseEnter={() => handleActionHover(action.name)}
// //                 onMouseLeave={handleActionLeave}
// //               >
// //                 <div className="text-sm font-medium text-purple-900">{action.name}</div>
// //               </div>
// //               {idx < stage.actions.length - 1 && (
// //                 <ArrowRight className="w-6 h-6 text-purple-400 flex-shrink-0" />
// //               )}
// //             </React.Fragment>
// //           ))}
// //         </div>

// //         {/* Expandable content area with smoother transition */}
// //         <div
// //           className={`overflow-hidden transition-all duration-500 ease-in-out ${hoveredAction ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
// //         >
// //           {hoveredAction && (
// //             <div className="bg-purple-50 p-4 rounded-lg shadow-inner mt-4">
// //               <h3 className="text-purple-800 font-semibold mb-2">
// //                 {hoveredAction}
// //               </h3>
// //               <p className="text-gray-700 text-sm">
// //                 {stage.actions.find(action => action.name === hoveredAction)?.content}
// //               </p>
// //             </div>
// //           )}
// //         </div>
// //       </Card>

// //       {/* Grid layout for metrics, barriers, and findings */}
// //       <div className="grid grid-cols-12 gap-6">
// //         {/* Key Metrics */}
// //         <div className="col-span-3">
// //           <Card className="h-full p-5 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow-lg">
// //             <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
// //               <LineChart className="w-4 h-4" />
// //               Key Metrics
// //             </h3>
// //             <div className="space-y-3">
// //               {metrics.map((metric, idx) => (
// //                 <div key={idx} className="bg-white p-3 rounded-lg shadow-md">
// //                   <div className="text-xl font-bold text-blue-600">{metric.value}</div>
// //                   <div className="text-sm text-gray-600">{metric.label}</div>
// //                 </div>
// //               ))}
// //             </div>
// //           </Card>
// //         </div>

// //         {/* Key Barriers */}
// //         <div className="col-span-6">
// //           <Card className="h-full p-5 bg-white shadow-lg rounded-lg">
// //             <h3 className="font-semibold mb-3 text-gray-800">Key Barriers</h3>
// //             <div className="grid grid-cols-3 gap-4">
// //               {Object.entries(barriers).map(([key, barrierGroup], groupIdx) => (
// //                 <div key={groupIdx} className={`bg-${key}-50 p-3 rounded-lg shadow-md`}>
// //                   <div className="flex items-center gap-2 mb-2">
// //                     {key === 'physician' && <Stethoscope className="w-4 h-4 text-red-600" />}
// //                     {key === 'system' && <Building2 className="w-4 h-4 text-blue-600" />}
// //                     {key === 'patient' && <User className="w-4 h-4 text-green-600" />}
// //                     <h4 className={`text-sm font-semibold text-${key}-900 capitalize`}>{key}</h4>
// //                   </div>
// //                   <ul className="space-y-2">
// //                     {barrierGroup.map((barrier, idx) => (
// //                       <li key={idx} className="text-xs flex items-start gap-1">
// //                         <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" />
// //                         <div>
// //                           <span>{barrier.description}</span>
// //                           {barrier.subpoints && (
// //                             <ul className="mt-1 ml-4 text-gray-600 list-disc list-inside">
// //                               {barrier.subpoints.map((subpoint, subIdx) => (
// //                                 <li key={subIdx} className="text-xs">{subpoint}</li>
// //                               ))}
// //                             </ul>
// //                           )}
// //                         </div>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               ))}
// //             </div>
// //           </Card>
// //         </div>

// //         {/* Key Findings */}
// //         <div className="col-span-3">
// //           <Card className="h-full p-5 bg-gradient-to-b from-purple-50 to-purple-100 shadow-lg rounded-lg">
// //             <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
// //               <ClipboardCheck className="w-4 h-4" />
// //               Key Findings
// //             </h3>
// //             <div className="space-y-3">
// //               {findings.map((finding, idx) => (
// //                 <div key={idx} className="bg-white p-3 rounded-lg shadow-md text-sm text-gray-700 flex items-start gap-2">
// //                   <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
// //                   <span>{finding}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </Card>
// //         </div>
// //       </div>

// //       <div className="absolute left-8 bottom-0 w-0.5 h-8 bg-purple-200" />
// //     </div>
// //   );
// // };

// // export default JourneyStage;

// import React, { useState } from 'react';
// import { Card } from '../ui/card';
// import { 
//   ArrowRight,
//   Stethoscope,
//   Building2,
//   User,
//   LineChart,
//   ClipboardCheck,
//   AlertTriangle
// } from 'lucide-react';

// const JourneyStage = ({ stage, metrics, barriers, findings }) => {
//   const [hoveredAction, setHoveredAction] = useState(null);

//   const handleActionHover = (actionName) => {
//     setHoveredAction(actionName);
//   };

//   const handleActionLeave = () => {
//     setHoveredAction(null);
//   };

//   return (
//     <div className="relative w-full">
//       <Card className="bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 p-6 mb-6 shadow-lg rounded-lg border border-purple-200">
//         <div className="flex items-center gap-4 mb-6">
//           <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-md">
//             <span className="text-2xl font-bold text-white">{stage.number}</span>
//           </div>
//           <div>
//             <h2 className="text-xl font-bold text-purple-900">{stage.title}</h2>
//             <p className="text-sm text-purple-700">{stage.timeframe}</p>
//           </div>
//         </div>

//         <p className="text-gray-700 mb-6">{stage.description}</p>

//         {/* Action items with hover effect */}
//         <div className="flex items-center gap-4 mb-6">
//           {stage.actions.map((action, idx) => (
//             <React.Fragment key={idx}>
//               <div
//                 className="flex-1 bg-white p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg cursor-pointer"
//                 onMouseEnter={() => handleActionHover(action.name)}
//                 onMouseLeave={handleActionLeave}
//               >
//                 <div className="text-sm font-medium text-purple-900">{action.name}</div>
//               </div>
//               {idx < stage.actions.length - 1 && (
//                 <ArrowRight className="w-6 h-6 text-purple-400 flex-shrink-0" />
//               )}
//             </React.Fragment>
//           ))}
//         </div>

//         {/* Expandable content area with smoother transition */}
//         <div
//           className={`overflow-hidden transition-all duration-500 ease-in-out ${hoveredAction ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
//         >
//           {hoveredAction && (
//             <div className="bg-purple-50 p-4 rounded-lg shadow-inner mt-4">
//               <h3 className="text-purple-800 font-semibold mb-2">
//                 {hoveredAction}
//               </h3>
//               <p className="text-gray-700 text-sm">
//                 {stage.actions.find(action => action.name === hoveredAction)?.content}
//               </p>
//             </div>
//           )}
//         </div>
//       </Card>

//       {/* Grid layout for metrics, barriers, and findings */}
//       <div className="grid grid-cols-12 gap-6">
//         {/* Key Metrics */}
//         <div className="col-span-3">
//           <Card className="h-full p-5 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow-lg">
//             <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
//               <LineChart className="w-4 h-4" />
//               Key Metrics
//             </h3>
//             <div className="space-y-3">
//               {metrics.map((metric, idx) => (
//                 <div key={idx} className="bg-white p-3 rounded-lg shadow-md">
//                   <div className="text-xl font-bold text-blue-600">{metric.value}</div>
//                   <div className="text-sm text-gray-600">{metric.label}</div>
//                 </div>
//               ))}
//             </div>
//           </Card>
//         </div>

//         {/* Key Barriers */}
//         <div className="col-span-6">
//           <Card className="h-full p-5 bg-white shadow-lg rounded-lg">
//             <h3 className="font-semibold mb-3 text-gray-800">Key Barriers</h3>
//             <div className="grid grid-cols-3 gap-4">
//               {Object.entries(barriers).map(([key, barrierGroup], groupIdx) => (
//                 <div
//                   key={groupIdx}
//                   className={
//                     key === 'physician' ? 'bg-red-50 p-3 rounded-lg shadow-md' :
//                     key === 'system' ? 'bg-blue-50 p-3 rounded-lg shadow-md' :
//                     key === 'patient' ? 'bg-green-50 p-3 rounded-lg shadow-md' : 'p-3 rounded-lg shadow-md'
//                   }
//                 >
//                   <div className="flex items-center gap-2 mb-2">
//                     {key === 'physician' && <Stethoscope className="w-4 h-4 text-red-600" />}
//                     {key === 'system' && <Building2 className="w-4 h-4 text-blue-600" />}
//                     {key === 'patient' && <User className="w-4 h-4 text-green-600" />}
//                     <h4 className={`text-sm font-semibold text-${key}-900 capitalize`}>{key}</h4>
//                   </div>
//                   <ul className="space-y-2">
//                     {barrierGroup.map((barrier, idx) => (
//                       <li key={idx} className="text-xs flex items-start gap-1">
//                         <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" />
//                         <div>
//                           <span>{barrier.description}</span>
//                           {barrier.subpoints && (
//                             <ul className="mt-1 ml-4 text-gray-600 list-disc list-inside">
//                               {barrier.subpoints.map((subpoint, subIdx) => (
//                                 <li key={subIdx} className="text-xs">{subpoint}</li>
//                               ))}
//                             </ul>
//                           )}
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </Card>
//         </div>

//         {/* Key Findings */}
//         <div className="col-span-3">
//           <Card className="h-full p-5 bg-gradient-to-b from-purple-50 to-purple-100 shadow-lg rounded-lg">
//             <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
//               <ClipboardCheck className="w-4 h-4" />
//               Key Findings
//             </h3>
//             <div className="space-y-3">
//               {findings.map((finding, idx) => (
//                 <div key={idx} className="bg-white p-3 rounded-lg shadow-md text-sm text-gray-700 flex items-start gap-2">
//                   <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
//                   <span>{finding}</span>
//                 </div>
//               ))}
//             </div>
//           </Card>
//         </div>
//       </div>

//       <div className="absolute left-8 bottom-0 w-0.5 h-8 bg-purple-200" />
//     </div>
//   );
// };

// export default JourneyStage;

import React, { useState } from 'react';
import { Card } from '../ui/card';
import { 
  ArrowRight,
  Stethoscope,
  Building2,
  User,
  LineChart,
  ClipboardCheck,
  AlertTriangle
} from 'lucide-react';

const JourneyStage = ({ stage, metrics, barriers, findings }) => {
  const [hoveredAction, setHoveredAction] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);  // State to control card expansion

  const handleActionHover = (actionName) => {
    setHoveredAction(actionName);
  };

  const handleActionLeave = () => {
    setHoveredAction(null);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);  // Toggle expansion
  };

  return (
    <div className="relative w-full">
      <Card className="bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 p-6 mb-6 shadow-lg rounded-lg border border-purple-200">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-md">
            <span className="text-2xl font-bold text-white">{stage.number}</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-purple-900">{stage.title}</h2>
            <p className="text-sm text-purple-700">{stage.timeframe}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-6">{stage.description}</p>

        {/* Action items with hover effect */}
        <div className="flex items-center gap-4 mb-6">
          {stage.actions.map((action, idx) => (
            <React.Fragment key={idx}>
              <div
                className="flex-1 bg-white p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg cursor-pointer"
                onMouseEnter={() => handleActionHover(action.name)}
                onMouseLeave={handleActionLeave}
              >
                <div className="text-sm font-medium text-purple-900">{action.name}</div>
              </div>
              {idx < stage.actions.length - 1 && (
                <ArrowRight className="w-6 h-6 text-purple-400 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Expandable content area with smoother transition */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${hoveredAction ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          {hoveredAction && (
            <div className="bg-purple-50 p-4 rounded-lg shadow-inner mt-4">
              <h3 className="text-purple-800 font-semibold mb-2">
                {hoveredAction}
              </h3>
              <p className="text-gray-700 text-sm">
                {stage.actions.find(action => action.name === hoveredAction)?.content}
              </p>
            </div>
          )}
        </div>

        {/* Deep Dive button to expand the card */}
        <button
          onClick={toggleExpand}
          className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Deep Dive
        </button>

        {/* Expanded content area (text box) */}
        {isExpanded && (
          <div className="mt-4 p-4 bg-purple-50 rounded-lg shadow-inner">
            <textarea
              className="w-full p-2 border border-purple-300 rounded-md"
              placeholder="Enter details here..."
            ></textarea>
          </div>
        )}
      </Card>

      {/* Grid layout for metrics, barriers, and findings */}
      <div className="grid grid-cols-12 gap-6">
        {/* Key Metrics */}
        <div className="col-span-3">
          <Card className="h-full p-5 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow-lg">
            <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <LineChart className="w-4 h-4" />
              Key Metrics
            </h3>
            <div className="space-y-3">
              {metrics.map((metric, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg shadow-md">
                  <div className="text-xl font-bold text-blue-600">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Key Barriers */}
        <div className="col-span-6">
          <Card className="h-full p-5 bg-white shadow-lg rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-800">Key Barriers</h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(barriers).map(([key, barrierGroup], groupIdx) => (
                <div
                  key={groupIdx}
                  className={
                    key === 'physician' ? 'bg-red-50 p-3 rounded-lg shadow-md' :
                    key === 'system' ? 'bg-blue-50 p-3 rounded-lg shadow-md' :
                    key === 'patient' ? 'bg-green-50 p-3 rounded-lg shadow-md' : 'p-3 rounded-lg shadow-md'
                  }
                >
                  <div className="flex items-center gap-2 mb-2">
                    {key === 'physician' && <Stethoscope className="w-4 h-4 text-red-600" />}
                    {key === 'system' && <Building2 className="w-4 h-4 text-blue-600" />}
                    {key === 'patient' && <User className="w-4 h-4 text-green-600" />}
                    <h4 className={`text-sm font-semibold text-${key}-900 capitalize`}>{key}</h4>
                  </div>
                  <ul className="space-y-2">
                    {barrierGroup.map((barrier, idx) => (
                      <li key={idx} className="text-xs flex items-start gap-1">
                        <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span>{barrier.description}</span>
                          {barrier.subpoints && (
                            <ul className="mt-1 ml-4 text-gray-600 list-disc list-inside">
                              {barrier.subpoints.map((subpoint, subIdx) => (
                                <li key={subIdx} className="text-xs">{subpoint}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Key Findings */}
        <div className="col-span-3">
          <Card className="h-full p-5 bg-gradient-to-b from-purple-50 to-purple-100 shadow-lg rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
              <ClipboardCheck className="w-4 h-4" />
              Key Findings
            </h3>
            <div className="space-y-3">
              {findings.map((finding, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg shadow-md text-sm text-gray-700 flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
                  <span>{finding}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div className="absolute left-8 bottom-0 w-0.5 h-8 bg-purple-200" />
    </div>
  );
};

export default JourneyStage;
