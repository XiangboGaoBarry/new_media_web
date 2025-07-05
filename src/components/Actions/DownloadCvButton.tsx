// // 'use client';
// // import React, { useRef } from 'react';
// // import { DownloadIcon } from '@heroicons/react/outline';
// // import { CVTemplate } from '../CV/CVTemplate';
// // import { downloadCv } from '../../utils/downloadCv';

// // const DownloadCvButton: React.FC = () => {
// //   const cvRef = useRef<HTMLDivElement>(null);

// //   const handleClick = () => {
// //     if (!cvRef.current) return;
// //     downloadCv(cvRef.current);
// //   };

// //   return (
// //     <>
// //       {/* 隐藏的 CV DOM（仅用于生成 PDF） */}
// //       <div style={{ position: 'fixed', left: -9999, top: -9999 }}>
// //         <CVTemplate ref={cvRef} />
// //       </div>

// //       {/* 按钮本身 */}
// //       <button
// //         onClick={handleClick}
// //         className="flex gap-x-2 rounded-full border-2 border-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700/80"
// //       >
// //         Download CV
// //         <DownloadIcon className="h-5 w-5" />
// //       </button>
// //     </>
// //   );
// // };

// // export default DownloadCvButton;



// 'use client';                    // ✅ 一定要放在文件第一行（客户端组件）

// import React, { useRef } from 'react';
// import { DownloadIcon } from '@heroicons/react/outline';
// import { downloadCv } from '../../utils/downloadCv';   // ← 路径从 Actions 到 utils
// import { CVTemplate } from '../CV/CVTemplate';         // ← 相对 Actions 的路径

// const DownloadCvButton: React.FC = () => {
//   const cvRef = useRef<HTMLDivElement>(null);

//   const handleClick = () => {
//     downloadCv(cvRef.current);
//   };

//   return (
//     <>
//       {/* 隐藏 DOM，仅供 html2pdf 捕获 */}
//       <div style={{ position: 'fixed', left: -9999, top: -9999 }}>
//         <CVTemplate ref={cvRef} />
//       </div>

//       {/* 按钮自身 */}
//       <button
//         onClick={handleClick}
//         className="flex gap-x-2 rounded-full border-2 border-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700/80"
//       >
//         Download CV
//         <DownloadIcon className="h-5 w-5" />
//       </button>
//     </>
//   );
// };

// export default DownloadCvButton;   // ✅ 确保是 default 导出





// src/components/Actions/DownloadCvButton.tsx
'use client';

import React, { useRef, useEffect, useState } from 'react';
import { DownloadIcon } from '@heroicons/react/outline';
import { downloadCv } from '../../utils/downloadCv';
import { CVTemplate } from '../CV/CVTemplate';

const DownloadCvButton: React.FC = () => {
  const cvRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // ✅ 只在浏览器端渲染隐藏 DOM，防止 SSR / CSR 差异
  useEffect(() => setMounted(true), []);

  const handleClick = () => downloadCv(cvRef.current);

  return (
    <>
      {mounted && (
        <div style={{ position: 'fixed', left: -9999, top: -9999 }}>
          <CVTemplate ref={cvRef} />
        </div>
      )}

      <button
        onClick={handleClick}
        className="flex gap-x-2 rounded-full border-2 border-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700/80"
      >
        Download Auto-generated CV
        <DownloadIcon className="h-5 w-5" />
      </button>
    </>
  );
};

export default DownloadCvButton;